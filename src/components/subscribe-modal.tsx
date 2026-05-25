"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, Loader2, CheckCircle } from "lucide-react";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "disclaimer" | "invoice" | "success";

const POLLING_INTERVAL = 3000; // 3 seconds

export default function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [step, setStep] = useState<Step>("disclaimer");
  const [isLoading, setIsLoading] = useState(false);
  const [invoiceUrl, setInvoiceUrl] = useState<string | null>(null);
  const [invoiceId, setInvoiceId] = useState<string | null>(null);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setStep("disclaimer");
      setInvoiceUrl(null);
      setInvoiceId(null);
      setIsLoading(false);
      // Clear polling
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
    }
  }, [isOpen]);

  // Polling for payment status
  useEffect(() => {
    if (step === "invoice" && invoiceId && !isLoading) {
      const checkStatus = async () => {
        try {
          const res = await fetch(`/api/xendit/status?id=${invoiceId}`);
          const data = await res.json();

          if (data.status === "PAID" || data.status === "SETTLED") {
            // Payment successful!
            if (pollingRef.current) {
              clearInterval(pollingRef.current);
              pollingRef.current = null;
            }
            setStep("success");
          }
        } catch {
          // Silently fail, will retry on next poll
        }
      };

      // Start polling
      pollingRef.current = setInterval(checkStatus, POLLING_INTERVAL);

      // Cleanup
      return () => {
        if (pollingRef.current) {
          clearInterval(pollingRef.current);
          pollingRef.current = null;
        }
      };
    }
  }, [step, invoiceId, isLoading]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSubscribe = async () => {
    setIsLoading(true);
    setStep("invoice");

    try {
      const res = await fetch("/api/xendit/invoice", { method: "POST" });
      const data = await res.json();

      if (data.invoice_url && data.invoice_id) {
        setInvoiceUrl(data.invoice_url);
        setInvoiceId(data.invoice_id);
      } else {
        setInvoiceUrl(null);
        setInvoiceId(null);
      }
    } catch {
      setInvoiceUrl(null);
      setInvoiceId(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {step === "disclaimer" && "Informasi Penting"}
                {step === "invoice" && "Pembayaran Langganan"}
                {step === "success" && "Pembayaran Berhasil"}
              </h2>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                aria-label="Tutup"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            {step === "disclaimer" && (
              <div className="p-6">
                {/* Warning Icon */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <AlertTriangle size={32} className="text-amber-600" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-center text-xl font-bold text-gray-900">
                  Mode Demo / Testing
                </h3>

                {/* Description */}
                <div className="mb-6 space-y-3 text-center text-gray-600">
                  <p>
                    Ini adalah <span className="font-semibold text-amber-600">halaman demo</span> untuk
                    menguji alur pembayaran.
                  </p>
                  <p>
                    Subscription ini <span className="font-semibold">tidak akan membuat akun yang sebenarnya</span>.
                    Ini hanya dummy test untuk keperluan pengembangan.
                  </p>
                  <p className="text-sm text-gray-500">
                    Pembayaran menggunakan Xendit dalam mode development/sandbox.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <button
                    onClick={onClose}
                    className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleSubscribe}
                    className="rounded-lg bg-gold px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-gold/25 transition-colors hover:bg-gold-dark"
                  >
                    Lanjutkan Subscribe
                  </button>
                </div>
              </div>
            )}

            {step === "invoice" && (
              <div className="flex flex-col">
                <div className="relative h-[450px] w-full sm:h-[520px]">
                  {isLoading ? (
                    <div className="flex h-full flex-col items-center justify-center gap-3 text-gray-500">
                      <Loader2 size={32} className="animate-spin text-gold" />
                      <p className="text-sm">Memuat halaman pembayaran...</p>
                    </div>
                  ) : invoiceUrl ? (
                    <iframe
                      src={invoiceUrl}
                      className="h-full w-full border-0"
                      title="Xendit Invoice"
                      allow="payment"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 text-gray-500">
                      <p className="text-sm">Gagal memuat halaman pembayaran</p>
                      <button
                        onClick={onClose}
                        className="rounded-lg bg-gold px-4 py-2 text-sm font-medium text-white hover:bg-gold-dark"
                      >
                        Tutup
                      </button>
                    </div>
                  )}
                </div>
                {/* Status indicator */}
                {invoiceUrl && !isLoading && (
                  <div className="flex items-center justify-center gap-2 border-t border-gray-100 px-6 py-3 text-sm text-gray-500">
                    <Loader2 size={16} className="animate-spin" />
                    <span>Menunggu pembayaran...</span>
                  </div>
                )}
              </div>
            )}

            {step === "success" && (
              <div className="p-6">
                {/* Success Icon */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle size={32} className="text-green-600" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-center text-xl font-bold text-gray-900">
                  Terima Kasih!
                </h3>

                {/* Description */}
                <div className="mb-6 space-y-3 text-center text-gray-600">
                  <p>
                    Pembayaran Anda telah <span className="font-semibold text-green-600">berhasil diproses</span>.
                  </p>
                  <p>
                    Namun perlu diingat, ini adalah <span className="font-semibold text-amber-600">halaman demo</span>.
                    Subscription ini <span className="font-semibold">tidak membuat akun yang sebenarnya</span>.
                  </p>
                  <p className="text-sm text-gray-500">
                    Ini hanya dummy test untuk keperluan pengembangan menggunakan Xendit mode sandbox.
                  </p>
                </div>

                {/* Action */}
                <div className="flex justify-center">
                  <button
                    onClick={onClose}
                    className="rounded-lg bg-gold px-8 py-2.5 text-sm font-bold text-white shadow-lg shadow-gold/25 transition-colors hover:bg-gold-dark"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

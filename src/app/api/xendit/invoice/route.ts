import { NextResponse } from "next/server";

export async function POST() {
  const secretKey = process.env.XENDIT_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: "Xendit secret key tidak dikonfigurasi" },
      { status: 500 }
    );
  }

  const externalId = `grandepos-${Date.now()}`;

  const response = await fetch("https://api.xendit.co/v2/invoices", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(secretKey + ":").toString("base64"),
    },
    body: JSON.stringify({
      external_id: externalId,
      amount: 2000000,
      description: "Langganan Grande POS - 1 Bulan",
      currency: "IDR",
      invoice_duration: 86400,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return NextResponse.json(
      { error: "Gagal membuat invoice", detail: error },
      { status: response.status }
    );
  }

  const invoice = await response.json();

  return NextResponse.json({
    invoice_url: invoice.invoice_url,
    invoice_id: invoice.id
  });
}

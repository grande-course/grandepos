import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const secretKey = process.env.XENDIT_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: "Xendit secret key tidak dikonfigurasi" },
      { status: 500 }
    );
  }

  const invoiceId = request.nextUrl.searchParams.get("id");

  if (!invoiceId) {
    return NextResponse.json(
      { error: "Invoice ID diperlukan" },
      { status: 400 }
    );
  }

  const response = await fetch(
    `https://api.xendit.co/v2/invoices/${invoiceId}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Basic " + Buffer.from(secretKey + ":").toString("base64"),
      },
    }
  );

  if (!response.ok) {
    const error = await response.json();
    return NextResponse.json(
      { error: "Gagal mengecek status invoice", detail: error },
      { status: response.status }
    );
  }

  const invoice = await response.json();

  // Status: PENDING, PAID, SETTLED, EXPIRED
  return NextResponse.json({
    status: invoice.status,
    paid_at: invoice.paid_at || null,
  });
}

import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";

function sanitize(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const message = sanitize(body.message);

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (name.length > 100 || message.length > 5000) {
      return NextResponse.json({ error: "Input too long." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Server email is not configured." }, { status: 500 });
    }

    const to = process.env.CONTACT_TO_EMAIL ?? "aziamadjicrepin@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

    const text = [
      `Nom: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] Message de ${name}`,
        text,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      return NextResponse.json(
        { error: "Failed to send email.", details: errorBody },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
}

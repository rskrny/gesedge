import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, service, message } = data;

    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log to server console (visible in Vercel logs)
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log(JSON.stringify({ name, email, company, service, message, timestamp: new Date().toISOString() }, null, 2));
    console.log("===================================");

    // If RESEND_API_KEY is configured, send email notification
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "GES Website <noreply@gesedge.com>",
          to: "ryan@gesedge.com",
          subject: `New inquiry from ${name}${company ? ` at ${company}` : ""}`,
          text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nService: ${service}\nMessage:\n${message}\n\nSubmitted: ${new Date().toISOString()}`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to process submission" }, { status: 500 });
  }
}

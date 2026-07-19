import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }


  try {

    await resend.emails.send({
      from:"portfolio <onboarding@resend.dev>",
      to:process.env.CONTACT_EMAIL!,
      subject:`potfolio contact from ${name}`,
      html: `
      <h2>New Contact Message</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>

      <hr/>

      <p>${message}</p>
    `,

    })
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.log(error)
    return NextResponse.json({error :"failed to send email"} , {status:500})
    
  }

}

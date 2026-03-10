import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { type, name, email, message, phone, serviceType, date, time } = data;

    // We require these SMTP credentials to be set in .env.local
    // Example for Gmail:
    // SMTP_USER=your_email@gmail.com
    // SMTP_PASS=your_app_password
    const transporter = nodemailer.createTransport({
      service: "gmail", // Standard setup assuming a Gmail account
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let mailOptions = {};

    if (type === "booking") {
      mailOptions = {
        from: process.env.SMTP_USER,
        to: "lucytsowa3@gmail.com",
        subject: `New Booking Request: ${serviceType} from ${name}`,
        html: `
                <h2>New Booking Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service:</strong> ${serviceType}</p>
                <p><strong>Preferred Date:</strong> ${date}</p>
                <p><strong>Preferred Time:</strong> ${time}</p>
                <br/>
                <p><strong>Additional Message:</strong></p>
                <p>${message}</p>
            `,
      };
    } else {
      // Standard Contact Form
      mailOptions = {
        from: process.env.SMTP_USER,
        to: "lucytsowa3@gmail.com",
        subject: `New Contact Inquiry from ${name}`,
        html: `
                <h2>New Contact Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <br/>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
      };
    }

    // Only attempt to send if credentials exist, otherwise log to console for development
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
      return NextResponse.json(
        { success: true, message: "Email sent successfully" },
        { status: 200 },
      );
    } else {
      console.warn(
        "SMTP credentials not found in environment variables. Email not sent, logging payload instead:",
      );
      console.log(mailOptions);
      return NextResponse.json(
        { success: true, message: "Email logged locally (no SMTP config)" },
        { status: 200 },
      );
    }
  } catch (error) {
    console.error("Email API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process request" },
      { status: 500 },
    );
  }
}

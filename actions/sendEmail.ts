"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Validación básica
  if (!senderEmail || typeof senderEmail !== "string") {
    return { error: "Invalid sender email" };
  }
  if (!message || typeof message !== "string") {
    return { error: "Invalid message" };
  }
  if (message.length > 5000) {
    return { error: "Message too long" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "guidonaselli@gmail.com",
      subject: "Message from portfolio contact form",
      replyTo: senderEmail,
      react: ContactFormEmail({ message, senderEmail }),
    });

    if (error) {
      return { error: error.message };
    }

    return { data };
  } catch (error) {
    return { error: "Failed to send email" };
  }
};

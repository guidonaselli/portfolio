import { Resend } from "resend";
import ReactDOMServer from "react-dom/server"; // Use renderToString instead
import { EmailTemplate } from "@/email/email-template";
import * as React from "react";
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "autoprefixer";
import { m } from "framer-motion";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  let senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  try {
    // Enviar el correo electrónico
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["guidonaselli@gmail.com"],
      subject: "Message from portfolio contact form",
      reply_to: senderEmail,
      text: message,
      react: EmailTemplate({ message, senderEmail }), // <EmailTemplate message={message} senderEmail={senderEmail} />,
    });
    return { data };
  } catch (error) {
    return {
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};

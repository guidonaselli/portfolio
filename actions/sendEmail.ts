import { Resend } from "resend";
import ReactDOMServer from "react-dom/server"; // Use renderToString instead
import { EmailTemplate } from "@/email/email-template";
import * as React from "react";
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "autoprefixer";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

function validateEmail(email: string) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateString(input: string, maxLength: number) {
  return typeof input === "string" && input.length <= maxLength;
}

export const sendEmail = async (formData: FormData) => {
  let senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  if (!validateEmail(senderEmail)) {
    throw new Error("Invalid sender email");
  }
  if (!validateString(message, 5000)) {
    throw new Error("Invalid message");
  }

  try {
    // Enviar el correo electrónico
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "guidonaselli@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      text: message,
      react: EmailTemplate({ message, senderEmail }),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
};

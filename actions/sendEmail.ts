import { Resend } from "resend";
import { EmailTemplate } from "@/email/email-template";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("sendEmail started");
  let senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  try {
    // Enviar el correo electrónico
    console.log("About to call resend.emails.send");
    const data = await resend.emails.send({
      from: "<onboarding@resend.dev>",
      to: "guidonaselli@gmail.com",
      subject: "Message from portfolio contact form",
      reply_to: senderEmail,
      text: message,
      react: EmailTemplate({ message, senderEmail }),
    });
    console.log("sendEmail completed"); // Add this
    return { data };
  } catch (error) {
    console.error("sendEmail error", error); // Add this
    throw error instanceof Error
      ? error
      : new Error("An unknown error occurred");
  }
};

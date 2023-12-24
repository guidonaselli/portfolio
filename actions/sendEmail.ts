import { Resend } from "resend";
import { EmailTemplate } from "@/email/email-template";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = (formData: FormData) => {
  let senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  try {
    // Enviar el correo electrónico
    const data = resend.emails.send({
      from: "<onboarding@resend.dev>",
      to: "guidonaselli@gmail.com",
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

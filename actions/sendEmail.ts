import { EmailTemplate } from "@/email/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  let senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  try {
    console.log("About to call resend.emails.send");
    let { data } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["guidonaselli@gmail.com"],
      subject: "Message from portfolio contact form",
      text: message,
      react: EmailTemplate({ message: message, senderEmail: senderEmail }),
    });
    console.log("sendEmail completed");
    return { data };
  } catch (error) {
    console.error("sendEmail error", error);
    return error;
  }
};

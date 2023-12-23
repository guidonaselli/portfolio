import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import ReactDOMServer from "react-dom/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const validateString = (str: string | null, maxLength: number): boolean => {
  if (typeof str !== "string") return false;
  return str.length <= maxLength;
};

export const sendEmail = async (formData: FormData) => {
  let senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message");

  if (typeof senderEmail !== "string" || typeof message !== "string") {
    return {
      error: "Invalid form data",
    };
  }

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    // Call your function to get the JSX element
    const emailElement = ContactFormEmail({ message, senderEmail });

    // Render the JSX element to a string
    const emailContent = ReactDOMServer.renderToString(emailElement);

    // Send the email
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "guidonaselli@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      html: emailContent, // Use the rendered string here
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "An unknown error occurred",
    };
  }

  return {
    data,
  };
};

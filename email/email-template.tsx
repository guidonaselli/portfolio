import * as React from "react";

type EmailTemplateProps = {
  message: string;
  senderEmail: string;
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  senderEmail,
}) => (
  <div style={{ fontFamily: "sans-serif", lineHeight: "1.5" }}>
    <h2>Message from Contact Form</h2>
    <p>From: {senderEmail}</p>
    <p>Message:</p>
    <blockquote>{message}</blockquote>
    {/* Add more email content here as needed, e.g., footer, links, etc. */}
  </div>
);

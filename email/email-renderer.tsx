import React from "react";

type EmailRendererProps = {
  message: string;
  senderEmail: string;
};

export default function EmailRenderer({
  message,
  senderEmail,
}: EmailRendererProps) {
  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: "1.5" }}>
      <h2>Message from Contact Form</h2>
      <p>From: {senderEmail}</p>
      <p>Message:</p>
      <blockquote>{message}</blockquote>
      {/* Add more email content here as needed, e.g., footer, links, etc. */}
    </div>
  );
}

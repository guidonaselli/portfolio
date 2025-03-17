import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje recibido desde el portfolio</Preview>
      <Body style={{ backgroundColor: "#f3f3f3", color: "#000" }}>
        <Container>
          <Section
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid #eaeaea",
              marginTop: "20px",
            }}
          >
            <Heading style={{ marginBottom: "16px" }}>
              Recibiste un nuevo mensaje:
            </Heading>
            <Text style={{ marginBottom: "16px" }}>{message}</Text>
            <Hr />
            <Text>Email del remitente: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

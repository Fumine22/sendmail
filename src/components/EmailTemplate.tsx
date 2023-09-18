import * as React from "react";
import { Button } from "@react-email/button";
import { Html } from "@react-email/html";

interface EmailProps {
  url: string;
}

const EmailTemplate: React.FC<Readonly<EmailProps>> = ({ url }) => {
  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  );
};

export default EmailTemplate;

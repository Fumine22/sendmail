import nodemailer from "nodemailer";
import EmailTemplate from "@/components/EmailTemplate";
import { render } from "@react-email/render";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  auth: {
    user: process.env.GOOGLE_ACCOUNT,
    pass: process.env.GOOGLE_PASSWORD,
  },
});

const emailHtml = render(<EmailTemplate url="https://google.com" />);

const options = {
  from: process.env.GOOGLE_ACCOUNT,
  to: "tuanphucnguyen2110@gmail.com",
  subject: "hello world",
  html: emailHtml,
};

export async function sendEmail() {
  await transporter.sendMail(options);
}

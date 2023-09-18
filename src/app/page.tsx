import { sendEmail } from "@/services/email";

export default function Home() {
  async function submit() {
    "use server";
    await sendEmail();
  }
  return (
    <form action={submit}>
      <button>Send email</button>
    </form>
  );
}

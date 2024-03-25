import Email from "@/emails/userMailFlash";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const { name, surname } = await req.json();

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "antoine.vinsonneau34@gmail.com",
    subject: `Validation formulaire ${name}`,
    react: Email({
      name,
      surname,
    }),
  });

  if (error) {
    return Response.json(error);
  }
  return Response.json({ message: "Email sent successfully" });
}

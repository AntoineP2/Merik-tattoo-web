import Email from "@/emails/userMailFlash";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY_OFFICIAL);

export async function POST(req: Request, res: Response) {
  const { name, surname, email } = await req.json();

  const { data, error } = await resend.emails.send({
    from: "MerikTattoo Information <contact@padovaniwebdevelopment.fr>",
    to: email,
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

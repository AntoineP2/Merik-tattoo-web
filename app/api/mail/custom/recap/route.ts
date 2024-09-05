import Email from "@/emails/recapMailCustom";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const {
    name,
    surname,
    email,
    phone,
    description,
    size,
    placement,
    disponibility,
    image,
  } = await req.json();

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "merikos.mi.corazon@hotmail.com", // A changer en mail quand on auras le nom de domaine
    subject: `Validation formulaire ${name}`,
    react: Email({
      name,
      surname,
      email,
      phone,
      description,
      size,
      placement,
      disponibility,
      image,
    }),
  });

  if (error) {
    return Response.json(error);
  }
  return Response.json({ message: "Email sent successfully" });
}

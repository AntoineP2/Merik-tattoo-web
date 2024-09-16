import Email from "@/emails/recapMailFlash";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY_OFFICIAL);

export async function POST(req: Request, res: Response) {
  const { name, surname, email, phone, reference, placement, disponibility, daysOfWeek } =
    await req.json();

  const { data, error } = await resend.emails.send({
    from: "MerikTattoo Information <contact@padovaniwebdevelopment.fr>",
    to: email, // A changer en mail quand on auras le nom de domaine
    subject: `Validation formulaire ${name}`,
    react: Email({
      name,
      surname,
      email,
      phone,
      reference,
      placement,
      disponibility,
      daysOfWeek,
    }),
  });

  if (error) {
    return Response.json(error);
  }
  return Response.json({ message: "Email sent successfully" });
}

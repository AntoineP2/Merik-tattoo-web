import Email from "@/emails/recapMailCustom";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY_OFFICIAL);

export async function POST(req: Request, res: Response) {
  const {
    name,
    surname,
    email,
    instagram,
    description,
    size,
    dayOfWeek,
    placement,
    disponibility,
    image,
  } = await req.json();

  const imageConverted = image.replace(/^data:image\/\w+;base64,/, "");

  const { data, error } = await resend.emails.send({
    from: "MerikTattoo Information <contact@padovaniwebdevelopment.fr>",
    to: "antoine.vinsonneau@ynov.com", // A changer en mail quand on auras le nom de domaine
    subject: `Validation formulaire ${name}`,
    react: Email({
      name,
      surname,
      email,
      instagram,
      description,
      size,
      dayOfWeek,
      placement,
      disponibility,
      image,
    }),
    attachments: [
      {
        content: imageConverted, // L'image en base64
        filename: 'image.jpg', // Le nom du fichier ou une valeur par défaut
      },
    ],
  });

  if (error) {
    return Response.json(error);
  }
  return Response.json({ message: "Email sent successfully" });
}

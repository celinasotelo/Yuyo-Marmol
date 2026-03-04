import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sotelocelina45@gmail.com",
      subject: "Nueva consulta desde la web",
      html: `
        <h2>Nueva consulta</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error });
  }
}
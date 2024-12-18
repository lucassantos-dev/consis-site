import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, telefone, message } = req.body;
    
    if (!name || !email || !telefone || !message) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    try {
      // Configurar o transporte (Substitua pelos seus dados SMTP)
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Exemplo: Gmail
        port: 587,
        secure: false, // true para 465, false para outros
        auth: {
          user: process.env.EMAIL_USER, // Seu e-mail
          pass: process.env.EMAIL_PASS, // Sua senha ou token de app
        },
      });

      // Configurar os detalhes do e-mail
      const mailOptions = {
        from: `"${name}" <${email}>`, // Nome e e-mail do remetente
        to: 'destinatario@exemplo.com', // Seu e-mail para receber as mensagens
        subject: 'Novo contato do site', // Assunto do e-mail
        html: `
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        `,
      };

      // Enviar o e-mail
      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: 'Mensagem enviada com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao enviar a mensagem.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

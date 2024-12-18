import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export const config = {
  api: {
    bodyParser: false, // Desabilitar o body parser padrão
  },
};

export async function POST(req: Request) {
  try {
    // Processar os dados do formulário
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const file = formData.get('file') as File;

    // Validação básica dos campos
    if (!name || !phone || !email || !file) {
      return NextResponse.json({ message: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    // Verificar se o arquivo é um PDF
    if (file.type !== 'application/pdf') {
      return NextResponse.json({ message: 'Por favor, envie apenas arquivos PDF.' }, { status: 400 });
    }

    // Configurar o SendGrid
    if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL || !process.env.EMAIL_TI) {
      return NextResponse.json({ message: 'Configuração de e-mail não encontrada.' }, { status: 500 });
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Ler o arquivo diretamente da requisição
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64File = buffer.toString('base64');

    // HTML estilizado do e-mail
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #4CAF50;">Nova Solicitação de Recurso</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p>Segue o arquivo em anexo para análise.</p>
      </div>
    `;

    // Configuração do e-mail
    const msg = {
      to: process.env.EMAIL, // Destinatário
      from: process.env.EMAIL_TI, // Remetente
      subject: 'Envio de Recurso',
      html: htmlContent,
      attachments: [
        {
          filename: file.name,
          content: base64File,
          type: file.type,
          disposition: 'attachment',
        },
      ],
    };

    // Enviar o e-mail
    await sgMail.send(msg);

    return NextResponse.json({ message: 'E-mail enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro:', error);
    return NextResponse.json({ message: 'Erro ao processar a solicitação.' }, { status: 500 });
  }
}

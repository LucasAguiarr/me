import { render } from '@react-email/render';
import sendgrid from '@sendgrid/mail';

import { Email } from '@/components/email';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');
console.log('sendgrid', sendgrid);
console.log('process.env.SENDGRID_API_KEY', process.env.SENDGRID_API_KEY);
interface EmailData {
  me: string;
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  const emailHtml = render(
    <Email email={data.email} message={data.message} name={data.name} />
  );

  await sendgrid.send({
    to: data.me,
    from: data.email,
    subject: 'Lead from Lucas Aguiar website on vercel',
    html: emailHtml,
  });
}

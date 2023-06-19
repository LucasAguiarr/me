import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { SendEmail } from '@/types/email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { from, to, subject, html } = (await request.json()) as SendEmail;
  try {
    console.log('from', from);
    console.log('to', to);
    console.log('subject', subject);
    console.log('html', html);
    const data = await resend.emails.send({
      from,
      to,
      subject,
      react: html,
    });

    console.log('data', data);
    return NextResponse.json(data);
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({ error });
  }
}

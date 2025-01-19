import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { Resend } from './resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: '...',
    to: 'neinchin123@gmail.com',
    subject: '...',
    react: <WelcomeTemplate name='Ching' />
  })

  return NextResponse.json({})
}
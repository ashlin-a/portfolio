'use server';

import { Resend } from 'resend';
export async function sendMail(name: string, email: string, message: string) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set');
    }
    const body = `<html>Hey, <strong>${name}</strong> (${email}) has messaged you this:
    <p>${message}</p></html>`;

    await resend.emails.send({
      from: 'portfolio@email.ashlin.dev',
      to: 'code@ashlin.dev',
      subject: 'Portfolio Contact Form',
      html: body,
    });
    return true
  } catch (error) {
    console.error('Failed to send Email:', error);
    return false
  }
}

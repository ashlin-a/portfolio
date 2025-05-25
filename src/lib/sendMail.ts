'use server';

import { env } from 'process';
import { Resend } from 'resend';
export async function sendMail(name: string, email: string, message: string) {
  try {
    const resend = new Resend(env.RESEND_API_KEY);
    resend.domains.create({name: "email.ashlin.dev"})

    const body = `<html>Hey, <strong>${name}</strong> (${email}) has messaged you this:
    <p>${message}</p></html>`;

    resend.emails.send({
      from: 'portfolio@email.ashlin.dev',
      to: 'code@ashlin.dev',
      subject: 'Portfolio Contact Form',
      html: body,
    });
    return true
  } catch (error) {
    console.log(error);
    return false
  }
}

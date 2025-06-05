'use server';

import { Resend } from 'resend';
import { contactFormSchema } from './schema';
import { z } from 'zod/v4';
export async function sendMail(name: string, email: string, message: string) {
  const validation = contactFormSchema.safeParse({ name, email, message });
  if (!validation.success) {
    const errors = z.flattenError(validation.error).fieldErrors;
    return {
      success: false,
      errors: {
        name: errors.name?.[0],
        email: errors.email?.[0],
        message: errors.message?.[0],
      },
    };
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set');
    }
    const body = `<html>Hey, <strong>${name}</strong> (${email}) has messaged you this:
    <p>${message}</p></html>`;

    const result = await resend.emails.send({
      from: 'portfolio@email.ashlin.dev',
      to: 'code@ashlin.dev',
      subject: 'Portfolio Contact Form',
      html: body,
    });
    if (result.error){
      console.error("Failed to send email:", result.error)
      return { success: false, errors: { message: "Failed to send email" } }
    }
    return { success: true }
  } catch (error) {
    console.error('Something went wrong', error);
    return { success: false, errors: { message: "Failed to send email" } }
  }
}

import { z } from 'zod/v4';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email({
    pattern: z.regexes.rfc5322Email,
    message: 'Invalid email address',
  }),
  message: z.string().min(5, 'Message is required'),
});

'use client';

import { FaClock } from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';
import { IoSend } from 'react-icons/io5';
import FormButton from './FormButton';
import TextAreaInput from './TextAreaInput';
import TextInput from './TextInput';
import { useState } from 'react';
import { sendMail } from '@/lib/sendMail';
import InfoBox from './InfoBox';
import { InfoBoxProps } from '@/types';
import { contactFormSchema } from '@/lib/schema';
import { z } from 'zod/v4';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState(false);
  const [infoBox, setInfoBox] = useState<InfoBoxProps>({
    messages: [],
    type: 'error',
    icon: FaCircleInfo,
  });
  return (
    <div className="flex text-dark-txt flex-col bg-light-txt rounded-md p-5 md:p-10 gap-3">
      <h3 className="font-bold text-4xl text-center md:text-left pb-5">Contact Form</h3>
      <form
        className="flex flex-col gap-2"
        onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true);
          const validation = contactFormSchema.safeParse({
            name,
            email,
            message,
          });
          if (!validation.success) {
            const fieldErrors = z.flattenError(validation.error).fieldErrors;
            const errorMessages: string[] = [];
            const errorCount = Object.keys(fieldErrors).length;
            const errorEntries = Object.entries(fieldErrors);
            for (let i = 0; i < errorCount; i++) {
              const [field, messages] = errorEntries[i];
              if (messages && messages.length > 0) {
                errorMessages.push(
                  `${field.charAt(0).toUpperCase() + field.slice(1)}: ${
                    messages[0]
                  }`
                );
              }
            }

            setInfoBox({
              messages: errorMessages,
              type: 'error',
              icon: FaCircleInfo,
            });
            setInfo(true);
            setIsLoading(false)
            return;
          }

          const result = await sendMail(name, email, message);
          if (result.success) {
            setIsLoading(false);
            setName('');
            setEmail('');
            setMessage('');
            setInfoBox({
              messages: ['Your Message was sent succesfully'],
              type: 'success',
              icon: FaCircleInfo,
            });
            setInfo(true);
            return;
          }
          setInfoBox({
            messages: ['Failed to deliver message'],
            type: 'error',
            icon: FaCircleInfo,
          });
          setInfo(true);
          setIsLoading(false);
          return;
        }}
      >
        <TextInput
          required
          value={name}
          placeholder="Name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
            setInfo(false);
          }}
        />
        <TextInput
          required
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            setInfo(false);
          }}
        />
        <TextAreaInput
          required
          value={message}
          placeholder="Message"
          onChange={(e) => {
            setMessage(e.target.value);
            setInfo(false);
          }}
        />
        {info && (
          <InfoBox
            icon={FaCircleInfo}
            messages={infoBox?.messages}
            type={infoBox.type}
          />
        )}

        <FormButton
          disabled={isLoading}
          type="submit"
          text={isLoading ? 'Sending' : 'Send'}
          icon={isLoading ? FaClock : IoSend}
        />
      </form>
    </div>
  );
}

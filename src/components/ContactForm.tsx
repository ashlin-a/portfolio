'use client';

import { FaClock } from 'react-icons/fa';
import { FaCircleInfo } from "react-icons/fa6";
import { IoSend } from 'react-icons/io5';
import FormButton from './FormButton';
import TextAreaInput from './TextAreaInput';
import TextInput from './TextInput';
import { useState } from 'react';
import { sendMail } from '@/lib/sendMail';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState(false);
  return (
    <div className="flex text-gray-900 flex-col bg-white rounded-md p-10 gap-3">
      <h3 className="font-bold text-4xl pb-5">Contact Form</h3>
      <form
        className="flex flex-col gap-2"
        onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true);
          await sendMail(name, email, message);
          setIsLoading(false);
          setName('');
          setEmail('');
          setMessage('');
          setInfo(true)
        }}
      >
        <TextInput
          required
          value={name}
          placeholder="Name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
            setInfo(false)
          }}
        />
        <TextInput
          required
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            setInfo(false)
          }}
        />
        <TextAreaInput
          required
          value={message}
          placeholder="Message"
          onChange={(e) => {
            setMessage(e.target.value);
            setInfo(false)
          }}
        />
        {info && <div className='flex text-green-700 justify-center items-center'><FaCircleInfo/><p>Your Message was sent successfully!</p></div>}
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

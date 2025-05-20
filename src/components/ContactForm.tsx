import { IoSend } from 'react-icons/io5';
import FormButton from './FormButton';
import TextAreaInput from './TextAreaInput';
import TextInput from './TextInput';

const ContactForm = () => {
  return (
    <div className="flex text-gray-900 flex-col bg-white rounded-md p-10 gap-3">
      <h3 className="font-bold text-4xl pb-5">Contact Form</h3>
      <form className="flex flex-col gap-2">
        <TextInput placeholder="Email" />
        <TextInput placeholder="Subject" />
        <TextAreaInput placeholder="Message" />
        <FormButton text="Send" icon={IoSend} />
      </form>
    </div>
  );
};

export default ContactForm;

import { TextAreaInputProps } from '@/types';

export default function TextAreaInput({
  placeholder,
  onChange,
  required,
  value,
}: TextAreaInputProps) {
  return (
    <div>
      <textarea
        value={value}
        rows={5}
        onChange={onChange}
        required={required}
        className="p-3 transition-all rounded-md appearance-none border-2 border-gray-400 hover:border-gray-500 focus:border-gray-700 outline-none w-full"
        placeholder={placeholder}
      />
    </div>
  );
}

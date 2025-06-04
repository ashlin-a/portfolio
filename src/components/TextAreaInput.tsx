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
        className="p-3 transition-all rounded-md appearance-none border-2 border-dark-txt/30 hover:border-dark-txt/50 focus:border-dark-txt/70 outline-none w-full"
        placeholder={placeholder}
      />
    </div>
  );
}

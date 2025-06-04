import { TextInputProps } from '@/types';

export default function TextInput({
  placeholder,
  onChange,
  required,
  type,
  value,
}: TextInputProps) {
  return (
    <div>
      <input
        value={value}
        type={type}
        onChange={onChange}
        required={required}
        className="p-3 transition-all rounded-md appearance-none border-2 border-dark-txt/30 hover:border-dark-txt/50 focus:border-dark-txt/70 outline-none w-full"
        placeholder={placeholder}
      />
    </div>
  );
}

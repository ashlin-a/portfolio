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
        className="p-3 rounded-md transition-all appearance-none border-2 border-gray-400 hover:border-gray-500 focus:border-gray-700 outline-none w-full"
        placeholder={placeholder}
      />
    </div>
  );
}

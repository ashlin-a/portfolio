interface TextInputProps {
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type: string;
  value: string;
}

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
        className="p-3 rounded-md appearance-none border-2 outline-none w-full"
        placeholder={placeholder}
      />
    </div>
  );
}

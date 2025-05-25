interface TextAreaInputProps {
    placeholder: string,
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean,
    value: string
}

export default function TextAreaInput({ placeholder, onChange,required, value }: TextAreaInputProps) {
    return (
        <div>
            <textarea value={value} rows={5} onChange={onChange} required={required} className="p-3 rounded-md appearance-none border-2 outline-none w-full" placeholder={placeholder} />
        </div>
    );
}

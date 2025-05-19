interface TextAreaInputProps {
    placeholder: string
}

export default function TextAreaInput({ placeholder }: TextAreaInputProps) {
    return (
        <div>
            <textarea rows={5} className="p-3 rounded-md appearance-none border-2 outline-none w-full" placeholder={placeholder} />
        </div>
    );
}

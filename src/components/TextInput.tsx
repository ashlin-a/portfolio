interface TextInputProps {
    placeholder: string
}

export default function TextInput({ placeholder }: TextInputProps) {
    return (
        <div>
            <input type="text" className="p-3 rounded-md appearance-none border-2 outline-none w-full" placeholder={placeholder} />
        </div>
    );
}

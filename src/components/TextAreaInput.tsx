interface TextAreaInputProps {
    placeholder: string
}

export default function TextAreaInput({ placeholder }: TextAreaInputProps) {
    return (
        <div>
            <textarea rows={5} className="p-2 rounded-md appearance-none focus:bg-white text-black bg-gray-500 border-none w-full hover:ring-1 accent-green-400" placeholder={placeholder} />
        </div>
    );
}

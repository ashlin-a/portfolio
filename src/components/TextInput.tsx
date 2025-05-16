interface TextInputProps {
    placeholder: string
}

export default function TextInput({ placeholder }: TextInputProps) {
    return (
        <div>
            <input type="text" className="p-2 rounded-md appearance-none focus:bg-white text-black bg-gray-500 border-none w-full hover:ring-1 accent-green-400" placeholder={placeholder} />
        </div>
    );
}

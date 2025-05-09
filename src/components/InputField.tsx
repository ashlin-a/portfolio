interface InputFieldProps{
    placeholder: string
}

export default function InputField ({placeholder}:InputFieldProps){
    return <div>
<input type="text" placeholder={placeholder} />
    </div>
}
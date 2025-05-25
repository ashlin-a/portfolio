import { IconType } from "react-icons"

interface FormButtonProps{
    text: string,
    icon?: IconType,
    type?: "submit" | "reset" | "button",
    disabled?: boolean
}

export default function FormButton ({ text, icon:Icon, type, disabled} : FormButtonProps){
    return <>
        <button type={type} disabled={disabled} className="text-lg flex cursor-pointer transition-all items-center justify-center gap-2 mt-3 p-2 text-center rounded-md bg-gray-800 hover:bg-gray-950 text-white">{text}{Icon && <Icon/>}</button>
    </>
}
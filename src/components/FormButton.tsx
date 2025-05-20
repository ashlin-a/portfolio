import { IconType } from "react-icons"

interface FormButtonProps{
    text: string
    icon?: IconType
}

export default function FormButton ({ text, icon:Icon} : FormButtonProps){
    return <>
        <button className="text-lg flex cursor-pointer transition-all items-center justify-center gap-2 mt-3 p-2 text-center rounded-md bg-gray-800 hover:bg-gray-950 text-white">{text}{Icon && <Icon/>}</button>
    </>
}
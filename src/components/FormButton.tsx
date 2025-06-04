import { FormButtonProps } from "@/types"

export default function FormButton ({ text, icon:Icon, type, disabled} : FormButtonProps){
    return <>
        <button type={type} disabled={disabled} className="text-lg flex cursor-pointer transition-all items-center justify-center gap-2 mt-3 p-2 text-center rounded-md bg-tertiary hover:bg-dark-txt text-light-txt">{text}{Icon && <Icon/>}</button>
    </>
}
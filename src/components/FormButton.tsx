import { FormButtonProps } from "@/types"

export default function FormButton ({ text, icon:Icon, type, disabled} : FormButtonProps){
    return <>
        <button type={type} disabled={disabled} className="text-lg flex cursor-pointer transition-all items-center justify-center gap-2 mt-3 p-2 text-center rounded-md bg-zinc-800 hover:bg-zinc-950 text-white">{text}{Icon && <Icon/>}</button>
    </>
}
import Link from "next/link";
import { IconType } from "react-icons";

interface LinkButtonProps{
    href: string,
    text: string,
    icon: IconType
}

export default function LinkButton ({href, text, icon: Icon} : LinkButtonProps){
    return <>
        <Link className="text-2xl flex items-center text-gray-900 font-semibold" href={href}><Icon className="inline-block mr-2"/>{text}</Link>
    </>
} 
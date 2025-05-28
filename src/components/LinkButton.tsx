import { LinkButtonProps } from "@/types";
import Link from "next/link";

export default function LinkButton ({href, text, icon: Icon, onClick} : LinkButtonProps){
    return <>
        <Link onClick={onClick} className="text-2xl flex items-center text-gray-900 font-semibold" href={href}><Icon className="inline-block mr-2"/>{text}</Link>
    </>
} 
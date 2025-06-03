import { BaseLinkProps } from "@/types";
import Link from "next/link";

export default function NavLink ({href, text} : BaseLinkProps){
    return <>
        <Link className="text-2xl flex items-center text-zinc-900 font-semibold" href={href}>{text}</Link>
    </>
} 
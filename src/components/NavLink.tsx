import { NavLinkProps } from "@/types";
import Link from "next/link";

export default function NavLink ({href, text, onClick} : NavLinkProps){
    return <>
        <Link className="text-2xl flex items-center text-dark-txt font-semibold" onClick={onClick} href={href}>{text}</Link>
    </>
} 
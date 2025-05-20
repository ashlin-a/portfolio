import Link from "next/link";

interface LinkButtonProps{
    href: string,
    text: string
}

export default function LinkButton ({href, text} : LinkButtonProps){
    return <>
        <Link className="text-2xl text-gray-900 font-semibold" href={href}>{text}</Link>
    </>
} 
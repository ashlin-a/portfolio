import Link from "next/link";

interface LinkButtonProps{
    href: string,
    text: string
}

export default function LinkButton ({href, text} : LinkButtonProps){
    return <div>
        <Link href={href}>{text}</Link>
    </div>
} 
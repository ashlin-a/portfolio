import { LinkButtonProps } from "@/types";
import Link from "next/link";

export default function LinkButtonFilled({ href, text, icon: Icon }: LinkButtonProps) {
  return (
    <Link href={href} className="flex transition-all items-center gap-2 text-2xl text-light-txt rounded-full px-6 py-2 bg-dark-txt/90 hover:bg-dark-txt font-semibold">
      <Icon />
      <span>{text}</span>
    </Link>
  );
}
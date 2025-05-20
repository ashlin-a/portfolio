import Link from "next/link";
import { IconType } from "react-icons";

interface LinkButtonFilledProps {
  href: string;
  text: string;
  icon: IconType;
}

export default function LinkButtonFilled({ href, text, icon: Icon }: LinkButtonFilledProps) {
  return (
    <Link href={href} className="flex transition-all items-center gap-2 text-2xl text-white rounded-full px-7 py-3 bg-gray-900 hover:bg-gray-950 font-semibold">
      <Icon />
      <span>{text}</span>
    </Link>
  );
}
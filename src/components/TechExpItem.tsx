import { IconType } from "react-icons";

interface TechExpItemProps { 
    text: string,
    icon: IconType 
}

export default function TechExpItem({ text, icon: Icon }: TechExpItemProps) {
    return (
        <div>
            <p><Icon /> {text}</p>
        </div>
    );
}

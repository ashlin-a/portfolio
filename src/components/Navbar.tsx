import LinkButton from "./LinkButton";

export default function Navbar(){
    return(
        <header className="bg-[#FF9770]">
        <nav className="flex gap-10 justify-end pt-10 px-20">
          <LinkButton href="/" text="Projects" />
          <LinkButton href="/" text="Blog" />
          <LinkButton href="/" text="Contact Me" />
        </nav>
      </header>
    )
}
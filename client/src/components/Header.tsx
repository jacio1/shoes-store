import { AuthDialog } from "./AuthDialog";

export default function Header(){
    return(
        <header className="hidden md:flex">
            <AuthDialog/>
        </header>
    )
}
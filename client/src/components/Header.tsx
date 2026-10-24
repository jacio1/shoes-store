import { AuthDialog } from "./AuthDialog";

export default function Header(){
    return(
        <header className="md:hidden">
            <AuthDialog/>
        </header>
    )
}
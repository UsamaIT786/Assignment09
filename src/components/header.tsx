
import Link from "next/link"
import Image from "next/image"

function Header(){

    return(
        <div>

<header>
    <div className="logo">

<Image src="/Images/logo.png" alt="logo" width={80} height={100}/>

    </div>

    <div className="h1">
        Tusion Free Programm On Latest Technologies
    </div>
    <div className="nav">
        
        <ul>
           <Link href="/Home"></Link> <li><a href="">Home</a></li>
           <Link href="/Apply"></Link> <li><a href="">Apply</a></li>
           <Link href="/Jobs"></Link> <li><a href="">Jobs</a></li>
           <Link href="/Result"></Link> <li><a href="">Result</a></li>
           <Link href="/Cources"></Link> <li><a href="">Cources</a></li>



        </ul>
    </div>
</header>


        </div>
    )
}

export default Header
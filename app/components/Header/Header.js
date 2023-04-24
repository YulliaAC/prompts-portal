import Link from "next/link";
import { BurgerIcon } from "../../utils/svg/BurgerIcon";
// import { LogoIcon } from "../utils/svg/LogoIcon";
import { PhotoIcon } from "../../utils/svg/PhotoIcon";
import { ArrowIcon } from "../../utils/svg/ArrowDown";
import { SearchIcon } from "../../utils/svg/SearchIcon";
import Authbar from "../Authbar/Authbar";


export default function Header() {
  return (
    <nav>
       <div>
           <button><BurgerIcon/></button>
           <Link href='/'><span>LOGO</span></Link>
           {/* <LogoIcon></LogoIcon> */}
           <span> PromptsPortal</span>
           <button>
            <PhotoIcon/>
           <span>Images</span>
           <ArrowIcon/>
           </button>
            <input/><SearchIcon/>
            <Authbar/>
       </div>
    </nav>
  )
}
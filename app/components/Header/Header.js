import Link from "next/link";
import { BurgerIcon } from "../../utils/svg/BurgerIcon";
// import { LogoIcon } from " @component/app/utils/svg/LogoIcon";
import { PhotoIcon } from "../../utils/svg/PhotoIcon";
import { ArrowIcon } from "../../utils/svg/ArrowDown";
import { SearchIcon } from "../../utils/svg/SearchIcon";
import Authbar from "../Authbar/Authbar";
import Navbar from "../Navbar/Navbar";
import styles from './Header.module.css';


export default function Header() {
  return (
       <div className={styles.header_container}>
        <div className={styles.logo_auth_container}>
           {/* <button className={styles.burger_btn}><BurgerIcon/></button> */}
           <Link href='/'><span><img src='../../../public/logo.png' alt='logo' width='45' height='45'/></span></Link>
           {/* <LogoIcon></LogoIcon> */}
           <span className={styles.logo_text}>PromptsPortal</span>
           <button className={styles.search_btn}>
            <PhotoIcon/>
           <span className={styles.search_btn_text}>Images</span>
           <ArrowIcon/>
           </button>
            <input className={styles.search_input}/>
            <span className={styles.search_icon}><SearchIcon/></span>
            <Authbar/>
          </div>
            <Navbar/>
       </div>
  )
}
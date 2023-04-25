'use client'
import Link from 'next/link';
import { ProfileIcon } from ' @component/app/utils/svg/ProfileIcon';
import styles from './Authbar.module.css';

export default function Authbar(isLoggenIn, user) {

  return (
    <div className={styles.auth_container}>
        {isLoggenIn ? 
        (<>
        <button className={styles.login_btn}>
            <Link href="/">
                Blog
            </Link>
        </button>
        <button className={styles.profile_btn}>
            <span className={styles.profile_icon}><ProfileIcon/></span>
            Profile</button>
            </>) : (
        <>
        <button className={styles.login_btn}>
            <Link href="/auth/signin">
                Blog
            </Link>
        </button>
        <button className={styles.signup_btn}>
            <Link href="/auth/signup">
                Login
            </Link>
        </button>
        </>)}
    </div>  
  )
}

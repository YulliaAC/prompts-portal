'use client'
import Link from 'next/link';
import { initFirebase } from ' @component/app/firebase/FirebaseApp';
import {useAuthState} from "react-firebase-hooks/auth";
import { getAuth } from 'firebase/auth';
import { ProfileIcon } from ' @component/app/utils/svg/ProfileIcon';
import styles from './Authbar.module.css';

export default function Authbar() {
    initFirebase();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

  return (
    <div className={styles.auth_container}>
        {user ? 
        (<>
        <button className={styles.login_btn}>
            <Link href="/">
                Blog
            </Link>
        </button>
        <Link className={styles.profile_btn}
        href={`/user/${user.uid}`}>
            <span className={styles.profile_icon}><ProfileIcon/></span>
            {user.displayName}</Link>
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

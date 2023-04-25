import Link from 'next/link'
import styles from './Authbar.module.css'

export default function Authbar() {
  return (
    <div className={styles.auth_container}>
        <button className={styles.login_btn}>
            <Link href="/auth/signin">
                Login
            </Link>
        </button>
        <button className={styles.signup_btn}>
            <Link href="/auth/signup">
                Sign Up
            </Link>
        </button>
    </div>
  )
}

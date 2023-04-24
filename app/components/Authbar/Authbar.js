import styles from './Authbar.module.css'

export default function Authbar() {
  return (
    <div className={styles.auth_container}>
        <button className={styles.login_btn}>
            Login
        </button>
        <button className={styles.signup_btn}>
            Sign Up
        </button>
    </div>
  )
}

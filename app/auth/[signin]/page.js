'use client'
import { initFirebase } from " @component/app/firebase/FirebaseApp";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import styles from "./page.module.css";


export default function SignIn() {
    const app = initFirebase();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    
    const signIn = async () => {
       const result = await signInWithPopup(auth, provider);
       console.log(result);
    }
   
    
  return (
    <div className={styles.login_container}>
        <h1 className={styles.login_title}>Sign In</h1>
        <button className={styles.login_btn}
        onClick={signIn}>Sign In with Google
        </button>
    </div>
  )
}

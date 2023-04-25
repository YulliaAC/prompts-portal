'use client'
import { redirect } from "next/navigation";
import { initFirebase } from " @component/app/firebase/FirebaseApp";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import styles from "./page.module.css";


export default function SignIn() {
    const app = initFirebase();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (user) {
      redirect('/');
    }
    
    const signIn = async () => {
       const result = await signInWithPopup(auth, provider);
    }
   
    
  return (
    <div className={styles.login_container}>
        <h1 className={styles.login_title}>Sign In</h1>
        <button className={styles.login_btn}
        onClick={signIn}>Sign In with Google
        </button>
        <button className={styles.login_btn}
        onClick={signIn}>Sign In with Facebook
        </button>
    </div>
  )
}

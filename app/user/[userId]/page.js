'use client'
import { initFirebase } from " @component/app/firebase/FirebaseApp";
import { getAuth } from "firebase/auth";
import { redirect } from "next/navigation";
import {useAuthState} from "react-firebase-hooks/auth";
import styles from "./page.module.css";

export default function UserPage() {
    initFirebase();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

   if (!user) {
        redirect('/')
   }

   if (loading) {
    return <div>Loading...</div>;
  }

    const signOut = () => {
        auth.signOut();
    }

  return (
    <div className={styles.profile_container}>
        <button 
        className={styles.logout_btn}
        onClick={signOut}>Logout
        </button>
    </div>
  )
}

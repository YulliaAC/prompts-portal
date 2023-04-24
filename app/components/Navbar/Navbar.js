import Link from "next/link";
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar_container}>
        <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href='/'>
            All
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href='/'>
            MidJourney
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href='/'>
            Open Journey
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href='/'>
            Stable Diffusion
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href='/'>
            RunwayMI
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href='/'>
            DALL-E 2
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href='/'>
            Craiyon
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href='/'>
            NightCafe
          </Link>
        </li>
      </ul>
    </div>
  )
}

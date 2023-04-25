import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header/Header';
import { SearchIcon } from './utils/svg/SearchIcon';
import { PhotoIcon } from './utils/svg/PhotoIcon';
import { ArrowIcon } from './utils/svg/ArrowDown';
import ImageList from './components/ImageList/ImageList';
import styles from './page.module.css';


export default function Home() {
  return (
    <div>
    <Header/>
    <main>
      <section>
      <div className={styles.hero_container}>
        <h1 className={styles.title}>Unleashing the Power of AI Prompts</h1>
        <p className={styles.text}>The Incredible Journey of Text Prompts into AI-Generated Visual Masterpieces</p>
        <div className={styles.input_container}>
        <button className={styles.search_btn}>
            <PhotoIcon/>
           <span className={styles.search_btn_text}>Images</span>
           <ArrowIcon/>
        </button>
          <input className={styles.search_input}/>
          <span className={styles.search_icon}><SearchIcon/></span>
        </div>
      </div>
      </section>
      <section>
        <ImageList/>
      </section>
    </main>
    </div>
  )
}

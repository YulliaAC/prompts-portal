import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header/Header';
import { SearchIcon } from './utils/svg/SearchIcon';
import { PhotoIcon } from './utils/svg/PhotoIcon';
import { ArrowIcon } from './utils/svg/ArrowDown';
import Navbar from './components/Navbar/Navbar';
import ImageList from './components/ImageList/ImageList';
import styles from './page.module.css';


export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <section>
      <Navbar/>
      <div>
        <h1>Unleashing the Power of AI Prompts</h1>
        <p>The Incredible Journey of Text Prompts into AI-Generated Visual Masterpieces</p>
        <div>
        <button>
            <PhotoIcon/>
           <span>Images</span>
           <ArrowIcon/>
        </button>
          <input/>
          <SearchIcon/>
        </div>
      </div>
      </section>
      <section>
        <ImageList/>
      </section>
    </main>
    </>
  )
}

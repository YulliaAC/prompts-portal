// 'use client'
import Link from "next/link";
import { BracketsIcon } from " @component/app/utils/svg/BracketsIcon";
import { CloudIcon } from " @component/app/utils/svg/CloudIcon";
import { GroupIcon } from " @component/app/utils/svg/GroupIcon";
import { HomeIcon } from " @component/app/utils/svg/HomeIcon";
import { ImageIcon } from " @component/app/utils/svg/ImageIcon";
import { MusicIcon } from " @component/app/utils/svg/MusicIcon";
import { VideoIcon } from " @component/app/utils/svg/VideoIcon";
import { StarIcon } from " @component/app/utils/svg/StarIcon";
import { TransferIcon } from " @component/app/utils/svg/TransferIcon";
import { TrophyIcon } from " @component/app/utils/svg/TrophyIcon";
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <div>
      <ul className={styles.menu_list}>
        <li className={styles.menu_item}>
          <Link href="/">
            <HomeIcon />
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/">
            <CloudIcon />
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/">
            <TrophyIcon />
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/">
            <GroupIcon />
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/">
            <ImageIcon />
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/">
            <BracketsIcon />
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/">
            <MusicIcon />
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/">
            <VideoIcon />
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/">
            <TransferIcon />
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/">
            <StarIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
}

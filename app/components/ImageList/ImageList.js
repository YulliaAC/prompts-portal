// 'use client'

import { images } from "../../utils/dbTemporary/imagesDb";
import { Modal } from "../Modal/Modal";
// import { useState } from "react";
// import  useRouter  from 'next/router';
import styles from './ImageList.module.css';

export default function ImageList() {
    // let router = useRouter();
    // const [isOpen, setIsOpen] = useState(false);

   const onClick = () => {
    console.log('click');
    // setIsOpen(true)
   }

  return (
    <>
    {/* {isOpen && <Modal onClose={setIsOpen(false)}></Modal>} */}
    <div className={styles.images_container}>
        <ul className={styles.image_list}>
            {images.map(({id, src, alt}) => (
                <li 
                // onClick={onClick}
                className={styles.image_list_item} key={id}>
                    <img className={styles.image} src={src} alt={alt} width='200'/>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

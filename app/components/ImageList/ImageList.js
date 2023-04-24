import { images } from " @component/app/utils/dbTemporary/imagesDb"
import styles from './ImageList.module.css';

export default function ImageList() {
  return (
    <div className={styles.images_container}>
        <ul className={styles.image_list}>
            {images.map(({id, src, alt}) => (
                <li className={styles.image_list_item} key={id}>
                    <img className={styles.image} src={src} alt={alt} width='200'/>
                </li>
            ))}
        </ul>
    </div>
  )
}

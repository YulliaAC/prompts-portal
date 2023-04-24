import { images } from " @component/app/utils/dbTemporary/imagesDb"

export default function ImageList() {
  return (
    <div>
        <ul>
            {images.map(({id, src, alt}) => (
                <li key={id}>
                    <img src={src} alt={alt} width='200'/>
                </li>
            ))}
        </ul>
    </div>
  )
}

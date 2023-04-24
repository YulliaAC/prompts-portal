import Link from "next/link"

export default function Navbar() {
  return (
    <div>
        <ul>
        <li>
          <Link href='/'>
            All
          </Link>
        </li>
        <li>
          <Link href='/'>
            MidJourney
          </Link>
        </li>
        <li>
          <Link href='/'>
            Open Journey
          </Link>
        </li>
        <li>
          <Link href='/'>
            Stable Diffusion
          </Link>
        </li>
        <li>
          <Link href='/'>
            RunwayMI
          </Link>
        </li>
        <li>
          <Link href='/'>
            DALL-E 2
          </Link>
        </li>
        <li>
          <Link href='/'>
            Craiyon
          </Link>
        </li>
        <li>
          <Link href='/'>
            NightCafe
          </Link>
        </li>
      </ul>
    </div>
  )
}

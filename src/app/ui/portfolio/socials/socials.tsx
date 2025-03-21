import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, link: '' },
  { icon: <FaLinkedinIn />, link: '' },
  { icon: <FaYoutube />, link: '' },
  { icon: <FaTwitter />, link: '' }
]

type TSocials = {
  containerStyles?: string
  iconStyles?: string
}

const Socials = ({ containerStyles, iconStyles }: TSocials) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link href={social.link} key={index} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials

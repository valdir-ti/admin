import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, link: 'https://github.com/valdir-ti' },
  { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/valdirti/' }
]

type TSocials = {
  containerStyles?: string
  iconStyles?: string
}

const Socials = ({ containerStyles, iconStyles }: TSocials) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          href={social.link}
          key={index}
          className={iconStyles}
          target="_blank"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials

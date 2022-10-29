import Facebook from './facebook.svg'
import Github from './github.svg'
import Instagram from './instagram.svg'
import Linkedin from './linkedin.svg'
import Mail from './mail.svg'
import Twitter from './twitter.svg'
import Youtube from './youtube.svg'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
}

const SocialIcon = ({ kind, href}) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className="fill-current text-blue-500 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-[20px] w-[20px]"
      />
    </a>
  )
}

export default SocialIcon

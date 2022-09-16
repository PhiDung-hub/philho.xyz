import { Divider } from '@mantine/core';

import { useStyles } from './Footer.styles';
import SocialIcon from '../social-icons';

const siteMetadata = {
  email: 'philho.dev@outlook.com',
  github: 'https://github.com/PhiDung-hub',
  linkedin: 'https://linkedin.com/in/phi-dung-ho',
  twitter: 'https://twitter.com/PDung0123',
  instagram: 'https://www.instagram.com/pdung001/',
}

export default function Footer() {
  const { classes } = useStyles()

  return (
    <footer className={classes.footer}>
      <Divider my='xl' />
      <div className="mt-16 flex flex-col items-center">
        <div className="flex mb-4 space-x-3">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={20} />
          <SocialIcon kind="github" href={siteMetadata.github} size={20} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={20} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={20} />

          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={20} />
        </div>
        <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{'Phil Ho '}</div>
          <div>{` © ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}

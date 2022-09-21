import { Divider } from '@mantine/core';

import SocialIcon from '../social-icons';

const siteMetadata = {
  email: 'philho.dev@outlook.com',
  github: 'https://github.com/PhiDung-hub',
  linkedin: 'https://linkedin.com/in/phi-dung-ho',
  twitter: 'https://twitter.com/PDung0123',
  instagram: 'https://www.instagram.com/pdung001/',
}

export default function Footer() {

  return (
    <footer className="fixed bottom-0 left-[50%] translate-x-[-50%] w-5/6 md:w-3/5">
      <Divider my='xl' />
      <div className="mt-5 flex flex-col items-center">
        <div className="flex mb-4 space-x-3">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`}  />
          <SocialIcon kind="github" href={siteMetadata.github} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} />
        </div>
        <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{'Phil Ho '}</div>
          <div>{` © ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}

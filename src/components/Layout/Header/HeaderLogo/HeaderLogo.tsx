import Image from 'next/image'
import React from 'react'

import { useStyles } from '@/components/Layout/Header/HeaderLogo/HeaderLogo.styles'
import Link from '@/components/Link'

export default function HeaderLogo() {
  const { classes } = useStyles()

  return (
    <Link href='/' className={classes.link}>
      <Image src="/static/images/blog.png" width="48" height="48" alt="Logo image"/>
      <span className={classes.text}>Phil.dev</span>
    </Link>
  )
}

import React from 'react'

import { useStyles } from '@/components/Layout/Header/HeaderLogo/HeaderLogo.styles'
import Link from '@/components/Link'

export default function HeaderLogo() {
  const { classes } = useStyles()

  return (
    <Link href='/' className={classes.link}>
      <span className={classes.text}>Phil Ho</span>
    </Link>
  )
}

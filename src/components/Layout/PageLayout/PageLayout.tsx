import { Title } from '@mantine/core'

import { useStyles } from './PageLayout.styles'
import { PageLayoutProps } from './types'

export default function PageLayout({
  children,
  title,
  description,
}: PageLayoutProps) {
  const { classes } = useStyles()

  return (
    <div className={classes.layout} style={{ maxWidth: '1260px' }}>
      <Title order={1} className={classes.title}>
        {title}
      </Title>
      <p className={classes.description}>{description}</p>
      {children}
    </div>
  )
}

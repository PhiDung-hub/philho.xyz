import { Anchor, AnchorProps } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons'
import Link, { LinkProps } from 'next/link'
import React from 'react'

import { CustomLinkProps } from '@/components/Link/types'
import { useStyles } from './Link.styles'

const CustomLink = React.forwardRef<
  HTMLAnchorElement,
  AnchorProps & CustomLinkProps & React.ComponentPropsWithRef<'a'> & LinkProps
>((props, ref) => {
  const {
    href,
    children,
    noIcon = false,
    as,
    replace,
    scroll,
    shallow,
    passHref = true,
    prefetch,
    locale,
    legacyBehavior,
    ...rest
  } = props
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const { classes } = useStyles()

  if (isInternalLink) {
    return (
      <Link
        href={href}
        as={as}
        ref={ref}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
        prefetch={prefetch}
        locale={locale}
        legacyBehavior={legacyBehavior}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <Anchor href={href} ref={ref} {...rest}>
        {children}
      </Anchor>
    )
  }
  return (
    <Anchor
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      ref={ref}
      {...rest}
    >
      {children}
      {!noIcon && (
        <span>
          <IconExternalLink size={18} className={classes.externalLink} />
        </span>
      )}
    </Anchor>
  )
})

export default CustomLink

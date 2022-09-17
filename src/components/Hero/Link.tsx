/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from 'next/link'
// import { useRouter } from 'next/router'
import React from 'react'

import {CustomLinkProps} from './types'

// import { ActiveLinkProps } from './types'

// const ActiveLink: FC<ActiveLinkProps> = ({ children, activeClassName, href, ...props }) => {
//   const { asPath } = useRouter()
//   const child = Children.only(children)
//   let childClassName: ReactNode;
//   if (React.isValidElement(child)) {
//     childClassName = child.props.className || ''
//   }
//
//   const className =
//     asPath === href || asPath === props?.as
//       ? `${childClassName} ${activeClassName}`.trim()
//       : childClassName
//
//   return (
//     <NextLink href={href} {...props}>
//       {React.cloneElement(child as ReactElement, {
//         className: className || null,
//       })}
//     </NextLink>

const CustomLink = ({ href, ...rest }: CustomLinkProps) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  // const {asPath} = useRouter();
  // const isActive = asPath === href || asPath === as;

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a {...rest} />
      </NextLink>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink

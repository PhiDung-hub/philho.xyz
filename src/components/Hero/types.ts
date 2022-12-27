import { LinkProps } from 'next/link'
import { HTMLProps, ReactElement, ReactNode } from 'react'

interface CardInterface {
  children: ReactNode
  imgSrc: string
  href: string
  onlyImg: boolean
  imgWidth: number
  imgHeight: number
  className: string
  title: string
  description: string
}

export type CardTypes = Partial<CardInterface>

export type ActiveLinkProps = {
  activeClassName: string
  children?: React.ReactNode | ReactElement
} & LinkProps &
  HTMLProps<HTMLAnchorElement>

export type CustomLinkProps =
  | ({
      href: string
    } & LinkProps)
  | HTMLProps<HTMLAnchorElement>

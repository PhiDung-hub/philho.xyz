import { NextSeoProps } from 'next-seo'
import React from 'react'

export type Favicons = {
  rel: string
  href: string
  sizes?: string
  type?: string
}

export type LayoutType = {
  children?: React.ReactNode
  title?: string
  description?: NextSeoProps['description']
  openGraph?: NextSeoProps['openGraph']
}

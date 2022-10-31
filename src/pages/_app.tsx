import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import { ModalsProvider } from '@mantine/modals'
import { SpotlightProvider } from '@mantine/spotlight'
import { IconSearch } from '@tabler/icons'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'

import '@/styles/globals.css'

import { links } from '@/components/Layout/Header/links'

const navy: [
  string?,
  string?,
  string?,
  string?,
  string?,
  string?,
  string?,
  string?,
  string?,
  string?
] = [
    '#e8f2ff',
    '#c8d6ea',
    '#a7bad7',
    '#859ec6',
    '#6383b5',
    '#4a699c',
    '#39527a',
    '#283a58',
    '#162337',
    '#030c18',
  ]

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-corlor-Scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  })
  const router = useRouter()
  const themeTailwind = (theme: ColorScheme) => {
    const root = window.document.documentElement.classList
    if (theme === 'dark') {
      root.add('dark')
    } else {
      root.remove('dark')
    }
  }

  useEffect(() => {
    themeTailwind(colorScheme)
  }, [colorScheme])

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useHotkeys([['mod+J', () => toggleColorScheme()]])

  const Actions = () => {
    const arr = []

    links.forEach((item) => {
      const obj = {}

      obj['title'] = item.text
      obj['onTrigger'] = () => router.push(item.href)

      arr.push(obj)
    })

    return arr
  }

  return (
    <SessionProvider>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            fontFamily:
              'Sora,Noto Sans TC,Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
            colors: {
              navy,
            },
            primaryColor: 'blue',
            breakpoints: {
              xs: 375,
              sm: 640,
              md: 768,
              lg: 1024,
              xl: 1280,
            },
          }}
        >
          <ModalsProvider>
            <SpotlightProvider
              searchIcon={<IconSearch size={18} />}
              searchPlaceholder='Search'
              shortcut={['mod + k', 'mod + p']}
              nothingFoundMessage='Nothing found ☹'
              actions={Actions()}
              radius='md'
              highlightQuery
            >
              <Global
                styles={(theme) => ({
                  html: {
                    scrollBehavior: 'smooth',
                  },
                  '::selection': {
                    background:
                      theme.colorScheme === 'dark'
                        ? 'rgb(45, 66, 99, 0.5)'
                        : 'rgb(45, 66, 99, 0.9)',
                    color: theme.colorScheme === 'dark' ? '#ECDBBA' : '#ECDBBA',
                  },
                  '::-webkit-scrollbar': {
                    width: 10,
                    height: 5,
                  },
                  '::-webkit-scrollbar-thumb': {
                    background: '#2D4263',
                    transition: '0.25s',
                    borderRadius: 5,
                  },
                  '::-webkit-scrollbar-track': {
                    background: '0 0',
                  },
                  'input:-webkit-autofill, input:-webkit-autofill:focus': {
                    transition: 'background-color 600000s 0s, color 600000s 0s',
                  },
                })}
              />
              <Component {...pageProps} />
            </SpotlightProvider>
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </SessionProvider>
  )
}

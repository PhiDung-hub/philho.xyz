import { Prism, PrismProps } from '@mantine/prism'
/* import PrismRenderer from 'prism-react-renderer/prism' */
/*   ; (typeof global !== 'undefined' ? global : window).Prism = PrismRenderer */

require('prismjs/components/prism-php')
require('prismjs/components/prism-bash')

const Pre = ({ children, language, sx, ...props }: PrismProps) => {
  return (
    <Prism
      withLineNumbers
      language={language as any}
      sx={{
        ...sx,
      }}
      styles={(theme) => ({
        lineNumber: {
          marginRight: 24,
          color: theme.colorScheme === 'dark' ? 'white' : 'black',
        },
        line: {
          '&:hover': {
            backgroundColor: 'rgba(239,68,68,.1)',
          },
        },
      })}
      {...props}
    >
      {children}
    </Prism>
  )
}

export default Pre

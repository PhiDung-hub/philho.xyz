import { Box, Card, Grid, Text, Title, useMantineTheme } from '@mantine/core'

import { useStyles } from './Hero.styles'
import Link from '../Link'

export default function Hero() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineTheme()
  const theme = useMantineTheme()
  const dark = colorScheme === 'dark'

  return (
    <Grid mb={96}>
      <Grid.Col span={12}>
        <Card p={32} className={classes.about} radius='lg' withBorder>
          <Box sx={{ height: 90, width: 90 }}>
          </Box>
          <Title order={1} sx={{ fontSize: 32, fontWeight: 700 }}>
            Hey, I&apos;m Phil 👋
          </Title>
          <Text
            size={20}
            weight={500}
            color={dark ? theme.colors.gray[6] : theme.colors.gray[8]}
          >
            A builder on Ethereum and Algorand
          </Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={12} md={4}>
        <Card
          component={Link}
          href='/projects'
          className={classes.square}
          sx={{
            backgroundImage: 'url(/static/images/train.png)',
          }}
          radius='lg'
          withBorder
          underline={false}
        >
          <Text size={28} weight={500}>
            Projects
          </Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={12} md={4}>
        <Card
          component={Link}
          href='/blog'
          className={classes.square}
          sx={{
            backgroundImage: 'url(/static/images/blog.png)',
          }}
          radius='lg'
          withBorder
          underline={false}
        >
          <Text size={28} weight={500}>
            Blog
          </Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={12} md={4}>
        <Card
          component={Link}
          href='https://link.honghong.me'
          className={classes.square}
          sx={{
            backgroundImage: 'url(/static/images/social.png)',
          }}
          radius='lg'
          withBorder
          noIcon
          underline={false}
        >
          <Text size={28} weight={500}>
            About me
          </Text>
        </Card>
      </Grid.Col>
    </Grid>
  )
}

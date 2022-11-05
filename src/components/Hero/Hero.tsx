import { Grid, Text, Title, useMantineTheme } from '@mantine/core'

import CustomCard from './Card'

const cards_data = {
  project: {
    title: 'Projects',
    description: "Fun things that I'm working on.",
  },
  blog: {
    title: 'Blog',
    description: 'Things that worth writing down.\n\n\n',
  },
}

export default function Hero() {
  const { colorScheme } = useMantineTheme()
  const theme = useMantineTheme()
  const dark = colorScheme === 'dark'

  return (
    <>
      <Grid mb={96} grow gutter='sm' justify='center'>
        <Grid.Col span={12} className='pb-5'>
          <div className='w-full flex flex-wrap justify-center'>
            <CustomCard
              description='Some fun things that I tried. Highly recommend to try it out yourself'
              href='/about'
              imgSrc='/static/images/penguin.png'
              imgWidth={180}
              imgHeight={180}
              className='py-5 md:px-4'
              onlyImg={true}
            ></CustomCard>
          </div>
          <div className='w-full text-center'>
            <Title order={1} sx={{ fontSize: 32, fontWeight: 700 }}>
              Hi, I&apos;m Phil 👋
            </Title>
            <Text
              size={20}
              weight={500}
              color={dark ? theme.colors.gray[6] : theme.colors.gray[8]}
            >
              A builder on Ethereum.
            </Text>
          </div>
        </Grid.Col>
        <Grid.Col span={12} md={6}>
          <CustomCard
            title={cards_data.project.title}
            description={cards_data.project.description}
            href='/project'
            className='py-4 md:px-4'
          />
        </Grid.Col>
        <Grid.Col span={12} md={6}>
          <CustomCard
            title={cards_data.blog.title}
            description={cards_data.blog.description}
            href='/project'
            className='py-4 md:px-4'
          />
        </Grid.Col>
      </Grid>
    </>
  )
}

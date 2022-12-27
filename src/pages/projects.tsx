import { Grid } from '@mantine/core'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import Layout from '@/components/Layout'
import PageLayout from '@/components/Layout/PageLayout'
import ProjectsCard from '@/components/ProjectCard'

type ProjectData = {
  title: string
  description: string
  href: string
}

type ProjectDataWithLocale = {
  [key: string]: ProjectData[]
}

export default function Projects() {
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  const projectsData: ProjectDataWithLocale = {
    en: [
      {
        title: 'Personal portfolio',
        description: `Share my knowledge and experience`,
        href: '',
      },
    ],
  }

  return (
    <Layout title='Projects' description={t('Seo.projectsDesc')}>
      <PageLayout title='Projects' description={t('Seo.projectsDesc')}>
        <Grid>
          {projectsData[locale ?? 'en']?.map((data: ProjectData, idx: number) => (
            <Grid.Col key={`projects-${idx}`} span={12} md={6}>
              <ProjectsCard
                title={data.title}
                description={data.description}
                href={data.href}
              />
            </Grid.Col>
          ))}
        </Grid>
      </PageLayout>
    </Layout>
  )
}

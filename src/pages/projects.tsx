import { Grid } from '@mantine/core'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import { ProjectData } from '@/lib/types'

import Layout from '@/components/Layout'
import PageLayout from '@/components/Layout/PageLayout'
import ProjectsCard from '@/components/ProjectCard'

export default function Projects() {
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  const projectsData: ProjectData = {
    en: [
      {
        title: 'Personal portfolio',
        description: `Share my knowledge and experience`,
        href: '',
      },
      {
        title: 'Kanban board',
        description: "Kanban board while I'm working alone",
        href: '/',
      },
    ],
  }

  return (
    <Layout title='Projects' description={t('Seo.projectsDesc')}>
      <PageLayout title='Projects' description={t('Seo.projectsDesc')}>
        <Grid >
          {projectsData[locale]?.map((data) => (
            <Grid.Col key={data.title} span={12} md={6}>
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

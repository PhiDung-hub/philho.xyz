import { Group, Skeleton, Text } from '@mantine/core'
import { IconEye } from '@tabler/icons'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import useSWR from 'swr'

import { Views } from '@/components/Metrics/types'
import { ViewCounterTypes } from '@/components/ViewCounter/types'
import fetcher from '@/lib/fetcher'

export default function ViewCounter({
  slug,
  text = true,
  type = 'POST',
}: ViewCounterTypes) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher)
  const views = new Number(data?.total)
  const { t } = useTranslation('common')

  React.useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: type,
      })

    registerView()
  }, [slug, type])

  return (
    <>
      {views > 0 ? (
        text ? (
          <Text>{`${views.toLocaleString()} ${t('views')}`}</Text>
        ) : (
          <Group spacing={4}>
            <IconEye size={20} />
            <Text sx={{ lineHeight: '20px' }}>{views.toLocaleString()}</Text>
          </Group>
        )
      ) : (
        <Skeleton
          height={20}
          sx={{
            maxWidth: 70,
          }}
        />
      )}
    </>
  )
}

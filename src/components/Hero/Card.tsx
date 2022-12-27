import { animated, config, useSpring } from '@react-spring/web'
import NextImage from 'next/image'
import { useRef, useState } from 'react'

import CustomLink from '@/components/Link'
import { CardTypes } from './types'

const calc = (x: number, y: number, rect: DOMRect, onlyImg: boolean) => [
  -(y - rect.top - rect.height / 2) / (onlyImg ? 50 : 40),
  (x - rect.left - rect.width / 2) / (onlyImg ? 50 : 40),
  onlyImg ? 1.1 : 1.03,
]

const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = ({
  children,
  title,
  description,
  imgSrc,
  href,
  onlyImg = false,
  className,
  imgWidth,
  imgHeight,
}: CardTypes) => {
  const ref = useRef(null)
  const [xys, set] = useState([0, 0, 1])
  const props = useSpring({ xys, config: config.molasses })

  return (
    <div className={`${className} overflow-hidden`} ref={ref}>
      <div
        className={`rounded-md ${onlyImg
            ? 'bg-none'
            : 'p-0.5 dark:p-px bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'
          }`}
      >
        <CustomLink href={href ?? '/blog'} aria-label={`Link to ${title}`}>
          <animated.div
            style={{ transform: props.xys.to(trans) }}
            onMouseLeave={() => set([0, 0, 1])}
            onMouseMove={(e) => {
              const rect = (ref as any).current.getBoundingClientRect()
              set(calc(e.clientX, e.clientY, rect, onlyImg))
            }}
            className={`will-change-transform overflow-hidden relative rounded-md ${onlyImg ? 'bg-transparent' : 'bg-violet-50 dark:bg-slate-800'
              }
after:absolute after:inset-0 after:z-10 after:bg-cover after:bg-no-repeat after:opacity-0 after:pointer-events-none
after:mix-blend-hard-light after:will-change-auto after:bg-texture-pattern after:transition-opacity after:duration-500
hover:after:opacity-100 hover:after:animate-hue-animation h-full z-20`}
          >
            {!!imgSrc && (
              <NextImage
                alt={title ?? 'No title'}
                src={imgSrc}
                className='object-center'
                width={imgWidth}
                height={imgHeight}
              />
            )}
            {!!onlyImg && <>{children}</>}
            {!onlyImg && (
              <div className='p-5'>
                <h2 className='m-0 mb-3 text-2xl'>{title}</h2>
                <div className='min-h-[120px] md:h-[120px] mb-5 prose text-gray-600 dark:text-gray-400'>
                  {description}
                </div>
                <SVGLinkTo />
              </div>
            )}
          </animated.div>
        </CustomLink>
      </div>
    </div>
  )
}

const SVGLinkTo = () => {
  return (
    <div className='text-xl p-0 text-primary-300 hover:text-primary-700 dark:hover:text-primary-400'>
      <svg
        width='24'
        height='24'
        xmlns='http://www.w3.org/2000/svg'
        fillRule='evenodd'
        clipRule='evenodd'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeWidth={1.0}
          d='M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z'
        />
      </svg>
    </div>
  )
}

export default Card

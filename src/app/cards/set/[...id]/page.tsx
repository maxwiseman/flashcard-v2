'use client'

import { Separator } from '@/components/ui/separator'
import { Flashcard } from './flashcard'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Pencil } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useRef } from 'react'

export default function Page({ params }: { params: { id: string } }) {
  const { setTheme, theme } = useTheme()
  const scroll = useRef(null)

  return (
    <>
      <div className='flex flex-nowrap justify-between'>
        <h1 className='font-bold text-4xl'>{params.id}</h1>
        <Button
          onClick={() => {
            setTheme(theme == 'dark' ? 'light' : 'dark')
          }}
        >
          <Pencil className='w-4 h-4' /> Edit
        </Button>
      </div>
      <Separator className='my-6' />
      <div
        // className='overflow-x-scroll overflow-y-hidden whitespace-nowrap w-full snap-x snap-mandatory snap-center'
        className='w-1/2 h-max relative'
      >
        <div
          className='flex flex-none overflow-auto snap-x snap-mandatory w-full no-scrollbar relative scroll-smooth'
          ref={scroll}
        >
          {exampleSet.map((card, i) => {
            return (
              <div key={i} className='min-w-full relative snap-center'>
                <Flashcard card={card} index={i} />
              </div>
            )
          })}
        </div>
        <Button
          variant={'outline'}
          size={'icon'}
          className='absolute translate-y-[-50%] top-1/2 left-4'
          onClick={() => {
            // @ts-ignore
            scroll?.current?.scrollBy({ left: -100, type: 'smooth' })
          }}
        >
          <ArrowLeft className='w-4 h-4' />
        </Button>
        <Button
          variant={'outline'}
          size={'icon'}
          className='absolute translate-y-[-50%] top-1/2 right-4'
          onClick={() => {
            // @ts-ignore
            scroll?.current?.scrollBy({ left: 100, type: 'smooth' })
          }}
        >
          <ArrowRight className='w-4 h-4' />
        </Button>
      </div>
    </>
  )
}

const exampleSet: { front: string; back: string }[] = [
  {
    front: 'Lorem',
    back: 'The',
  },
  {
    front: 'Ipsum',
    back: 'Internet',
  },
  {
    front: 'Dolor',
    back: 'Itself',
  },
  {
    front: 'Sit',
    back: 'Is',
  },
  {
    front: 'Amet',
    back: 'Pain',
  },
]

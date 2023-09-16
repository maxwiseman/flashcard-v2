'use client'

import { Separator } from '@/components/ui/separator'
import { Flashcard } from './flashcard'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Page({ params }: { params: { id: string } }) {
  const { setTheme, theme } = useTheme()

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
        className='flex flex-none overflow-auto snap-x snap-mandatory w-1/2 no-scrollbar'
      >
        {exampleSet.map((card, i) => {
          return (
            <div key={i} className='min-w-full relative snap-center'>
              <Flashcard card={card} index={i} />
            </div>
          )
        })}
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

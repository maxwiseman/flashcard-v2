'use client'

import { Card, CardContent, CardTitle } from '@/components/ui/card'
import './flashcard.css'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { MousePointerClick } from 'lucide-react'

export function Flashcard({
  card,
  index,
}: {
  card: { front: string; back: string }
  index?: number
}) {
  const [flipped, setFlipped] = useState(false)
  const [touched, setTouched] = useState(false)

  return (
    <>
      <div
        className={cn(
          'flashcard max-w-6xl cursor-default min-w-full',
          flipped && 'flipped'
        )}
        onClick={() => {
          setFlipped(!flipped)
          setTouched(true)
        }}
      >
        <div className='card'>
          <Card className='front flex justify-center items-center text-4xl px-16'>
            <CardTitle className='select-none'>{card.front}</CardTitle>
            {!touched && index == 0 && (
              <CardContent className='tooltip absolute bottom-4 text-muted-foreground text-lg flex flex-nowrap flex-row items-center gap-2 bg-card p-2'>
                <MousePointerClick className='w-5 h-5' /> Click the card to flip
              </CardContent>
            )}
          </Card>
          <Card className='back flex justify-center items-center text-4xl'>
            <CardTitle className='select-none'>{card.back}</CardTitle>
          </Card>
        </div>
      </div>
    </>
  )
}

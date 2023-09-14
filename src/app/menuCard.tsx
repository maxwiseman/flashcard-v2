import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import './cards.css'

export function MenuCard() {
  return (
    <Link
      href={'/flashcards'}
      className='flex-grow flex-shrink min-w-[580px] max-w-[50%]'
    >
      <Card className='p-4 flex flex-row flex-nowrap min-w-full gap-6 w-[580px] h-48 min-h-min'>
        <div className='cardSlot'>
          <div className='bottomCard' />
          <div className='middleCard' />
          <div className='topCard'>Todos los dias</div>
        </div>
        <div>
          <CardTitle className='font-semibold text-lg'>
            Spanish Module 1 Vocab
          </CardTitle>
          <CardDescription className='line-clamp-5'>
            Cillum adipisicing cupidatat dolor quis ad nisi. Do consectetur aute
            consequat esse nostrud dolor ullamco fugiat. Enim in cupidatat
            cupidatat do reprehenderit duis occaecat proident. Fugiat sint ipsum
            consequat voluptate aliqua nulla aute ullamco reprehenderit officia
            nostrud mollit. Ut sit aliquip reprehenderit do eiusmod labore
            pariatur qui amet aliqua. Incididunt commodo eiusmod irure laboris
            Lorem ea eu culpa qui.
          </CardDescription>
        </div>
      </Card>
    </Link>
  )
}

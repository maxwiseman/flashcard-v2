import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export function MenuCard() {
  return (
    <Link href={'/flashcards'}>
      <Card className='p-4 flex flex-row flex-nowrap gap-6'>
        <img
          className='rounded-md max-w-xs max-h-[120px]'
          src='https://images.unsplash.com/photo-1566232392379-afd9298e6a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhbmlzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60'
        />
        <div>
          <CardTitle className='font-semibold text-lg'>
            Spanish Module 1 Vocab
          </CardTitle>
          <CardDescription className='line-clamp-4'>
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

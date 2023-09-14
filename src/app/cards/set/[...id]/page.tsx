import { NewButton } from '@/app/newButton'
import { Separator } from '@/components/ui/separator'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <h1 className='font-bold text-4xl'>{params.id}</h1>
      <Separator className='my-6' />
    </>
  )
}

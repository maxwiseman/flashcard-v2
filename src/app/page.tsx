import SignIn from '@/components/auth/SignIn'
import { Separator } from '@/components/ui/separator'
import { MenuCard } from './menuCard'
import { NewButton } from './newButton'

export default async function Page() {
  return (
    <>
      <div className='flex flex-nowrap justify-between'>
        <h1 className='font-bold text-4xl'>Card Sets</h1>
        <NewButton />
      </div>
      <Separator className='my-6' />
      <div className='flex gap-6'>
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <SignIn />
    </>
  )
}

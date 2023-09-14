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
      {/* ! This should really be using grid */}
      <div className='flex flex-wrap gap-6 max-w-full'>
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <SignIn />
    </>
  )
}

import SignIn from '@/components/auth/SignIn'
import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getComputers } from '@/lib/api/computers/queries'
import { IconPlus } from '@tabler/icons-react'

export default async function Page() {
  return (
    <>
      <div className='flex flex-nowrap justify-between'>
        <h1 className='font-bold text-4xl'>Card Sets</h1>
        <Button>
          <IconPlus className='h-4 w-4' />
          New
        </Button>
      </div>
      <Separator className='my-2' />
      <Card className='p-6'>
        <CardTitle className='font-semibold text-lg'>Spanish</CardTitle>
      </Card>
      <SignIn />
    </>
  )
}

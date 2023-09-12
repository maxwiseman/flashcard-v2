import SignIn from '@/components/auth/SignIn'
import { getComputers } from '@/lib/api/computers/queries'

export default async function Page() {
  return (
    <>
      <SignIn />
    </>
  )
}

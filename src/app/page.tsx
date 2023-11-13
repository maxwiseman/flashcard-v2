import SignIn from "@/components/auth/SignIn";
import { Separator } from "@/components/ui/separator";
import { MenuCard } from "./menuCard";
import { NewButton } from "./newButton";

export default async function Page() {
  return (
    <>
      <div className="flex flex-nowrap justify-between">
        <h1 className="text-4xl font-bold">Card Sets</h1>
        <NewButton />
      </div>
      <Separator className="my-6" />
      {/* ! This should really be using grid */}
      <div className="flex max-w-full flex-wrap gap-6">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <SignIn />
    </>
  );
}

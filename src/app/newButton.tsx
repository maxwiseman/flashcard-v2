'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Setting } from '@/components/ui/setting'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose } from '@radix-ui/react-dialog'
import { IconLoader, IconPlus } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function NewButton() {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: 'Name must be at least 2 characters.',
    }),
    description: z.string().min(2, {
      message: 'Description must be at least 2 characters.',
    }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver<any>(formSchema),
    defaultValues: {
      name: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <IconPlus className='h-4 w-4' />
          New
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>New Card Set</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <Setting
              form={form}
              name='name'
              label='Name'
              placeholder='Vocabulary'
            >
              <Input />
            </Setting>
            <Setting
              form={form}
              name='username'
              label='Description'
              placeholder='Module 2 Day 1 Vocabulary'
            >
              <Textarea />
            </Setting>
          </form>
        </Form>
        <DialogFooter>
          <Button type='submit' variant={'disabled'} disabled={true}>
            <IconLoader className='w-4 h-4 animate-spin' /> Create
          </Button>
          <DialogClose asChild>
            <Button type='reset' variant={'outline'}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

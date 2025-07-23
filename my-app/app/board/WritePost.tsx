'use client';

import FolderDropdown from '@/components/FolderDropdown';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useActionState } from 'react';
import { createPost } from '@/lib/actions/post-actioins';

export default function WritePost() {
  const { data } = useSession();
  if (!data?.user.id) throw new Error('Need Login!!');

  const [, creatingPost, isPending] = useActionState(
    async (_pre: number, formData: FormData) => {
      await createPost(formData);
      return 0;
    },
    0
  );

  return (
    <form action={creatingPost} className='m-3 space-y-3'>
      <div className='flex space-x-2'>
        <FolderDropdown dataField='folder' />
        <Input
          name='title'
          type='text'
          placeholder='title...'
          defaultValue={'QQQQQ'}
        />
      </div>

      <div>
        <Textarea
          name='content'
          rows={12}
          placeholder='content...'
          className='min-h-32'
          defaultValue={'QQQQ'}
        ></Textarea>
      </div>

      <div className='flex justify-around'>
        <Button type='reset'>Cancel</Button>
        <Button variant='destructive'>Remove</Button>
        <Button type='submit' variant='primary' disabled={isPending}>
          Save
        </Button>
      </div>
    </form>
  );
}

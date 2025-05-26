import FolderDropdown from '@/components/FolderDropdown';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Board() {
  return (
    <div className='m-3 space-y-3'>
      <div className='flex space-x-2'>
        <FolderDropdown />
        <Input type='text' placeholder='title...' />
      </div>

      <div>
        <Textarea
          rows={12}
          placeholder='content...'
          className='min-h-32'
        ></Textarea>
      </div>

      <div className='flex justify-around'>
        <Button>Cancel</Button>
        <Button variant='destructive'>Remove</Button>
        <Button variant='primary'>Save</Button>
      </div>
    </div>
  );
}

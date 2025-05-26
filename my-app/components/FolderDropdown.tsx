'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useEffect, useReducer, useState } from 'react';
import { Folder, getFolders } from '@/lib/folders';

export default function FolderDropdown() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [folder, setFolder] = useState<Folder>();
  const [isOpen, toggleOpen] = useReducer((p) => !p, false);

  useEffect(() => {
    (async function () {
      const flds = await getFolders();
      console.log('🚀 flds:', flds);
      setFolders(flds);
      setFolder(flds[0]);
    })();
  }, []);

  return (
    <DropdownMenu onOpenChange={toggleOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          {folder?.title} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {folders.map((f) => (
          <DropdownMenuCheckboxItem
            key={f.id}
            checked={folder?.id === f.id}
            onClick={() => setFolder(f)}
          >
            {f.title}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

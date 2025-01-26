'use client';

import Link from 'next/link';
import { Home, ListTodo, Settings, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  return (
    <div className="fixed left-0 h-full w-48 bg-background border-r flex flex-col items-start py-4 space-y-2">
      <Link href="/dashboard" className="w-full hover:bg-accent p-3 rounded-lg transition-colors flex items-center gap-3 px-4">
        <Home className="w-5 h-5" />
        <span>Home</span>
      </Link>
      
      <Link href="/tasks" className="w-full hover:bg-accent p-3 rounded-lg transition-colors flex items-center gap-3 px-4">
        <ListTodo className="w-5 h-5" />
        <span>Tasks</span>
      </Link>
      
      <Link href="/members" className="w-full hover:bg-accent p-3 rounded-lg transition-colors flex items-center gap-3 px-4">
        <Users className="w-5 h-5" />
        <span>Members</span>
      </Link>
      
      <Link href="/settings" className="w-full hover:bg-accent p-3 rounded-lg transition-colors flex items-center gap-3 px-4">
        <Settings className="w-5 h-5" />
        <span>Settings</span>
      </Link>
    </div>
  );
};

export default Sidebar; 
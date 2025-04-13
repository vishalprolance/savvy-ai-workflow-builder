
import React from 'react';
import { Bell, Search, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="h-16 border-b border-neutral-200 flex items-center justify-between px-6 bg-white">
      <div className="flex items-center w-full max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
          <Input 
            placeholder="Search..." 
            className="pl-10 bg-neutral-50 border-neutral-200 focus-visible:ring-primary" 
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button 
          variant="outline" 
          size="sm" 
          className="text-neutral-700 border-neutral-200"
        >
          <HelpCircle size={18} className="mr-2" />
          Help
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative"
        >
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
        </Button>
      </div>
    </header>
  );
};

export default Header;

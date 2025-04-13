
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Package, 
  BarChart3, 
  Settings, 
  HelpCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
    { icon: ShoppingCart, label: 'Sales', href: '/sales' },
    { icon: Users, label: 'HR & People', href: '/hr' },
    { icon: Package, label: 'Inventory', href: '/inventory' },
    { icon: BarChart3, label: 'Finance', href: '/finance' },
    { icon: Settings, label: 'Settings', href: '/settings' },
    { icon: HelpCircle, label: 'Help', href: '/help' },
  ];

  return (
    <div 
      className={cn(
        "h-screen bg-neutral-50 border-r border-neutral-200 transition-all duration-300 flex flex-col",
        collapsed ? "w-[70px]" : "w-[240px]"
      )}
    >
      <div className={cn(
        "flex items-center h-16 px-4 border-b border-neutral-200",
        collapsed ? "justify-center" : "justify-between"
      )}>
        {!collapsed && <span className="font-bold text-xl text-primary">ERP.AI</span>}
        {collapsed && <span className="font-bold text-xl text-primary">E</span>}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>
      
      <nav className="flex-1 pt-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-md mx-2",
                  collapsed ? "justify-center" : "justify-start"
                )}
              >
                <item.icon size={20} />
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-neutral-200">
        <div className={cn(
          "flex items-center",
          collapsed ? "justify-center" : "justify-start"
        )}>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
            JS
          </div>
          {!collapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium">John Smith</p>
              <p className="text-xs text-neutral-500">Admin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

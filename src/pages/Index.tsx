
import React, { useState } from 'react';
import { ShoppingCart, Package, Users, DollarSign } from 'lucide-react';

import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import AIAssistant from '@/components/ai/AIAssistant';
import StatCard from '@/components/dashboard/StatCard';
import RecentActivities from '@/components/dashboard/RecentActivities';
import ChartCard from '@/components/dashboard/ChartCard';
import AIInsights from '@/components/dashboard/AIInsights';

const salesData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-neutral-100">
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-neutral-800">Dashboard</h1>
            <p className="text-neutral-500">Welcome back! Here's what's happening with your business today.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard 
              title="Total Sales" 
              value="$48,924" 
              change={12.5} 
              icon={<ShoppingCart size={20} />} 
            />
            <StatCard 
              title="Inventory Items" 
              value="1,286" 
              change={-3.2} 
              icon={<Package size={20} />} 
            />
            <StatCard 
              title="Active Employees" 
              value="342" 
              change={5.1} 
              icon={<Users size={20} />} 
            />
            <StatCard 
              title="Revenue" 
              value="$125,648" 
              change={8.3} 
              icon={<DollarSign size={20} />} 
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <ChartCard title="Monthly Sales Performance" data={salesData} />
            </div>
            <div>
              <AIInsights />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <RecentActivities />
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 gap-6">
              {/* Additional widgets can be added here */}
            </div>
          </div>
        </main>
      </div>
      
      <AIAssistant />
    </div>
  );
};

export default Dashboard;

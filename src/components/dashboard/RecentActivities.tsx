
import React from 'react';
import { Activity } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'New sales order created',
    description: 'Order #38492 for Customer XYZ Corp',
    time: '2 hours ago',
    type: 'sales'
  },
  {
    id: 2,
    title: 'Inventory alert',
    description: 'Product SKU-1234 is running low',
    time: '4 hours ago',
    type: 'inventory'
  },
  {
    id: 3,
    title: 'Payment received',
    description: '$12,500 from Customer ABC Inc',
    time: '5 hours ago',
    type: 'finance'
  },
  {
    id: 4,
    title: 'New employee onboarded',
    description: 'John Doe joined Engineering team',
    time: '1 day ago',
    type: 'hr'
  },
  {
    id: 5,
    title: 'System maintenance',
    description: 'Scheduled maintenance completed',
    time: '1 day ago',
    type: 'system'
  }
];

const getActivityColor = (type: string) => {
  switch (type) {
    case 'sales': return 'bg-blue-100 text-blue-600';
    case 'inventory': return 'bg-amber-100 text-amber-600';
    case 'finance': return 'bg-green-100 text-green-600';
    case 'hr': return 'bg-purple-100 text-purple-600';
    default: return 'bg-gray-100 text-gray-600';
  }
};

const RecentActivities = () => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 shadow-sm h-full">
      <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
        <h2 className="font-semibold text-lg">Recent Activities</h2>
        <Activity size={18} className="text-neutral-500" />
      </div>
      
      <div className="p-5 space-y-4 max-h-[400px] overflow-y-auto">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`w-2 h-2 rounded-full mt-2 ${getActivityColor(activity.type)}`}></div>
            <div>
              <p className="font-medium text-sm">{activity.title}</p>
              <p className="text-neutral-500 text-sm">{activity.description}</p>
              <p className="text-neutral-400 text-xs mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;

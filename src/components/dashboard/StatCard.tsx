
import React from 'react';
import { cn } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';

type StatCardProps = {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
};

const StatCard = ({ title, value, change, icon }: StatCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white rounded-lg border border-neutral-200 p-5 h-[120px] flex flex-col justify-between shadow-sm">
      <div className="flex justify-between items-start">
        <h3 className="text-neutral-500 text-sm font-medium">{title}</h3>
        <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      
      <div>
        <div className="text-2xl font-semibold">{value}</div>
        <div className="flex items-center mt-1">
          <span className={cn(
            "flex items-center text-xs font-medium",
            isPositive ? "text-success" : "text-error"
          )}>
            {isPositive ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
            {isPositive ? '+' : ''}{change}%
          </span>
          <span className="text-xs text-neutral-500 ml-1">vs last month</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;

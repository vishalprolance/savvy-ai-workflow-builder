
import React from 'react';
import { Bot, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const insights = [
  {
    id: 1,
    title: 'Sales Trend Analysis',
    description: 'Your top 3 products have seen a 14% increase in the last month. Consider increasing inventory.',
    action: 'View Details'
  },
  {
    id: 2,
    title: 'Cost Optimization',
    description: 'AI has identified potential savings of $12,500 in procurement processes.',
    action: 'View Suggestions'
  },
  {
    id: 3,
    title: 'Staff Productivity',
    description: 'Team performance has improved by 8% after implementing new training modules.',
    action: 'View Report'
  }
];

const AIInsights = () => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 shadow-sm h-full">
      <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3">
            <Bot size={16} className="text-white" />
          </div>
          <h2 className="font-semibold text-lg">AI-Generated Insights</h2>
        </div>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>
      
      <div className="p-5 space-y-6">
        {insights.map((insight) => (
          <div key={insight.id} className="bg-neutral-50 p-4 rounded-lg">
            <h3 className="font-medium text-primary">{insight.title}</h3>
            <p className="text-neutral-600 text-sm mt-2">{insight.description}</p>
            <Button variant="link" className="p-0 h-auto mt-2 text-primary flex items-center text-sm">
              {insight.action}
              <ArrowRight size={14} className="ml-1" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIInsights;

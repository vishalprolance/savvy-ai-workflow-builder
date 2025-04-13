
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type ChartCardProps = {
  title: string;
  data: Array<any>;
};

const ChartCard = ({ title, data }: ChartCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 shadow-sm h-full">
      <div className="p-5 border-b border-neutral-200">
        <h2 className="font-semibold text-lg">{title}</h2>
      </div>
      
      <div className="p-5 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            />
            <Bar dataKey="value" fill="#0052CC" barSize={30} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;

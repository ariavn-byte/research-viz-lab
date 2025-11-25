import React, { useState } from 'react';
import { BarChart3, RefreshCw } from 'lucide-react';

const DummyReport: React.FC = () => {
  const [data, setData] = useState([
    { label: 'Jan', value: 40 },
    { label: 'Feb', value: 65 },
    { label: 'Mar', value: 35 },
    { label: 'Apr', value: 82 },
    { label: 'May', value: 55 },
  ]);

  const regenerateData = () => {
    const newData = data.map(item => ({
      ...item,
      value: Math.floor(Math.random() * 90) + 10
    }));
    setData(newData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <BarChart3 className="text-blue-600" />
          Monthly Engagement Metrics
        </h1>
        <button 
          onClick={regenerateData}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <RefreshCw size={16} />
          Refresh Data
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="h-64 flex items-end justify-between space-x-2 sm:space-x-4">
          {data.map((item) => (
            <div key={item.label} className="flex flex-col items-center flex-1 group">
              <div className="relative w-full flex justify-center items-end h-full">
                 <div 
                  className="w-full max-w-[60px] bg-blue-500 rounded-t-sm transition-all duration-500 group-hover:bg-blue-600"
                  style={{ height: `${item.value}%` }}
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded pointer-events-none transition-opacity">
                    {item.value}
                  </div>
                </div>
              </div>
              <span className="mt-2 text-sm text-gray-600 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-gray-500 text-sm mb-1">Total Views</div>
          <div className="text-2xl font-bold text-gray-900">12,453</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-gray-500 text-sm mb-1">Avg. Session</div>
          <div className="text-2xl font-bold text-gray-900">4m 12s</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-gray-500 text-sm mb-1">Conversion Rate</div>
          <div className="text-2xl font-bold text-gray-900">3.2%</div>
        </div>
      </div>
    </div>
  );
};

export default DummyReport;

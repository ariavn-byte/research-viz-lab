import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Research Visualization Lab</h1>
      <p className="text-lg text-gray-700 mb-4">
        This repository serves as a hub for various interactive research reports and visualizations.
        Navigate through the sidebar to explore different modules.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Getting Started</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Select a report from the sidebar menu.</li>
          <li>Each report is an independent component configured in <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">src/reportsConfig.tsx</code>.</li>
          <li>This project is built with Vite, React, and Tailwind CSS.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

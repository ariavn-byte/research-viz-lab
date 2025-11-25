import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { reports } from '../reportsConfig';
import { Menu, X, LayoutDashboard } from 'lucide-react';
import clsx from 'clsx';

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={clsx(
          "fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out lg:transform-none",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <span className="text-xl font-bold text-gray-800">Viz Lab</span>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          <NavLink
            to="/"
            end
            onClick={() => setIsSidebarOpen(false)}
            className={({ isActive }) => clsx(
              "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
              isActive 
                ? "bg-blue-50 text-blue-700" 
                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            <LayoutDashboard size={20} className="mr-3" />
            Home
          </NavLink>

          {reports.map((report) => (
            <NavLink
              key={report.path}
              to={report.path}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) => clsx(
                "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                isActive 
                  ? "bg-blue-50 text-blue-700" 
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              {report.icon && <report.icon size={20} className="mr-3" />}
              {report.title}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center h-16 px-4 bg-white border-b shadow-sm">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <Menu size={24} />
          </button>
          <span className="ml-4 text-lg font-semibold text-gray-800">Research Viz Lab</span>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

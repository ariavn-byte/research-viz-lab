import { type LucideIcon, BarChart3 } from 'lucide-react';
import React from 'react';
import DummyReport from './pages/DummyReport';

export interface ReportConfig {
  path: string;
  title: string;
  component: React.ComponentType;
  icon?: LucideIcon;
}

export const reports: ReportConfig[] = [
  {
    path: 'metrics',
    title: 'Engagement Metrics',
    component: DummyReport,
    icon: BarChart3,
  },
];

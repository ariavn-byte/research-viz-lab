import { type LucideIcon, BarChart3, Shield } from 'lucide-react';
import React from 'react';
import DummyReport from './pages/DummyReport';
import TrumpsImmigrationAgenda from './pages/TrumpsImmigrationAgenda';

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
  {
    path: 'trumps-immigration-agenda',
    title: 'Trump’s Immigration Agenda',
    component: TrumpsImmigrationAgenda,
    icon: Shield,
  },
];

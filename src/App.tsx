import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/Home';
import { reports } from './reportsConfig';
import TrumpsImmigrationAgenda from './pages/TrumpsImmigrationAgenda';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Route for the new full-page infographic */}
        <Route path="/trumps-immigration-agenda" element={<TrumpsImmigrationAgenda />} />

        {/* Existing dashboard layout routes */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          {reports.map((report) => (
            <Route
              key={report.path}
              path={report.path}
              element={<report.component />}
            />
          ))}
          {/* Catch all - redirect to home or show 404 component inside layout */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

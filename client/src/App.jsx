import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CrewList from './pages/CrewList';
import JobAssignments from './pages/JobAssignments';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/crews" element={<CrewList />} />
        <Route path="/jobs" element={<JobAssignments />} />
      </Routes>
    </div>
  );
}

export default App;
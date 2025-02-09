import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: 10, borderBottom: '1px solid #ddd' }}>
      <Link to="/">Dashboard</Link> | 
      <Link to="/crews"> Crews</Link> | 
      <Link to="/jobs"> Jobs</Link>
    </nav>
  );
}
import { Link, Outlet } from 'react-router-dom';
import './sidebar.scss'
export function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul>
            <li><Link to='/home'>Dashboard</Link></li>
            <li><Link to='/home/expense'>Expense</Link></li>
            <li><Link to='/income'>Income</Link></li>
            <li><Link to='/reports'>Reports</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

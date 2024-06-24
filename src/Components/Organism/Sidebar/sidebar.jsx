import { Link, Outlet } from 'react-router-dom';
import './sidebar.scss'
export function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul>
            <li><Link to='/home'>Dashboard</Link></li>
            <li><Link to='/home/budget'>Budget</Link></li>
            <li><Link to='/home/expense'>Expense</Link></li>
            <li><Link to='/home/income'>Income</Link></li>
            <li><Link to='/home/reports'>Reports</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

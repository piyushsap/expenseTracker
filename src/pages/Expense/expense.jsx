import { Link } from "react-router-dom";

export function Expense() {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="content-header">
            <h1>Expense</h1>
            <Link to='add'>Add Expense</Link>
          </div>
          <div className="content-main">
            
          </div>
        </div>
      </div>
    </>
  );
}

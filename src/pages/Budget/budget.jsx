import { Link } from "react-router-dom";

export function Budget() {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="content-header">
            <h1>Budget</h1>
            <Link to='add'>Add Budget</Link>
          </div>
          <div className="content-main">
            
          </div>
        </div>
      </div>
    </>
  );
}

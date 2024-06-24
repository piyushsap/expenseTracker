import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useLocalStorage from "../../Utils/hooks/UseLocalStorage";

export function Budget() {
  const [user, setUser] = useLocalStorage("user");
  const [budget, setBudget] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const getBudget = await axios.get(
          `${import.meta.env.VITE_BUDGET_URL}/getbudget`,
          {
            headers: {
              user: user.userId,
              "x-auth-token": user.token,
            },
          }
        );
        setBudget(getBudget.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    console.log(budget, 111);
  }, []);
  const deleteBudget = async () => {
    try {
      const getBudget = await axios.get(
        `${import.meta.env.VITE_BUDGET_URL}/deletebudget`,
        {
          headers: {
            user: user.userId,
            "x-auth-token": user.token,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const totalBudget = (expenses) => {
    return expenses.reduce(
      (acc, item) => acc + parseFloat(item.Amount || 0),
      0
    );
  };
  return (
    <div className="wrapper">
      <div className="content">
        <div className="content-header">
          <h1>Budget</h1>
          <Link to="add">Add Budget</Link>
        </div>
        <div className="content-main">
          {budget.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Budget Name</th>
                  <th>Total Budget Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {budget?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.BudgetName}</td>
                    <td>{totalBudget(item.BudgetExpense)}</td>
                    <td>
                      <NavLink to={`/home/budget/${item._id}`}> Edit</NavLink>

                      <button onClick={() => deleteBudget(item._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No budget available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

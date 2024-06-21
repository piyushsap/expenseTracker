import { useState } from "react";
import { Form } from "../../Components/Organism/Form";
import { useParams } from "react-router-dom";
import cosntants from "../../Constants/constants";
import { Value } from "sass";

export function AddExpense() {
  const { id } = useParams();
  const [expense, setExpense] = useState([
    {
      budgetName: "",
      budgetExpenses: [
        {
          frequency: "",
          category: "",
          amount: "",
        },
      ],
    },
  ]);
  const handleSubmit = (e) => {
    console.log(e);
  };
  const handleChange = (e) => {
    console.log(e);
  };
  
  const handleAddMore = (e) => {
    console.log(e);
  };

  const expenseForm = [
    {
      label: "frequency",
      name: "Frequency",
      type: "text",
      inputType: "select",
      placeholder: "Frequency",
      option: cosntants.Frequency,
      value: "",
    },
    {
      label: "category",
      name: "Category",
      type: "text",
      inputType: "select",
      placeholder: "Password",
      option: cosntants.Categories,
      value: "",
    },
    {
      label: "amount",
      name: "Amount",
      type: "text",
      inputType: "input",
      placeholder: "Expense Amount",
      value: "",
    },
  ];
  return (
    <>
      <div className="content">
        <div className="content-header">
          <h1>Add Expense {id}</h1>
        </div>
        <div className="content-main">
          <form onSubmit={handleSubmit}>
            <div className="form-inline">
              <Form formFields={expenseForm} handleChange={handleChange} />
              <div className="formgroup inline-button">
                <button>Add more</button>
              </div>
            </div>
            <div className="formgroup side-by-side">
              <button>Add Expense</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

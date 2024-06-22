import { useState } from "react";
import { Form } from "../../Components/Organism/Form";
import { useParams } from "react-router-dom";
import constants from "../../Constants/constants";

export function AddExpense() {
  const { id } = useParams();
  const [expenseForms, setExpenseForms] = useState([
    {
      frequency: "",
      category: "",
      amount: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expenseForms);
  };

  const handleChange = (index, name, value) => {
    console.log(index, name, value, 1111);
    const newExpenseForms = [...expenseForms];
    newExpenseForms[index][name] = value;
    setExpenseForms(newExpenseForms);
  };

  const handleAddMore = () => {
    setExpenseForms([
      ...expenseForms,
      { frequency: "", category: "", amount: "" },
    ]);
    console.log(expenseForms, 111);
  };

  const handleRemove = (index) => {
    const newExpenseForms = expenseForms.filter((_, i) => i !== index);
    setExpenseForms(newExpenseForms);
  };

  const expenseFormFields = [
    {
      label: "frequency",
      name: "frequency",
      type: "text",
      inputType: "select",
      placeholder: "Frequency",
      option: constants.Frequency,
      value: "",
    },
    {
      label: "category",
      name: "category",
      type: "text",
      inputType: "select",
      placeholder: "Category",
      option: constants.Categories,
      value: "",
    },
    {
      label: "amount",
      name: "amount",
      type: "text",
      inputType: "input",
      placeholder: "Expense Amount",
      value: "",
    },
  ];

  return (
    <div className="content">
      <div className="content-header">
        <h1>Add Expense {id}</h1>
      </div>
      <div className="content-main">
        <form onSubmit={handleSubmit}>
          {expenseForms.map((expense, index) => (
            <div key={index} className="form-inline">
              <Form
                formFields={expenseFormFields.map((field) => ({
                  ...field,
                  value: expense[field.name],
                  rowIndex: index,
                  onChange: handleChange,
                }))}
              />
              <div className="formgroup inline-button">
                <button type="button" onClick={handleAddMore}>
                  +
                </button>
                {expenseForms.length > 1 && (
                  <button type="button" onClick={() => handleRemove(index)}>
                    -
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className="formgroup side-by-side">
            <button type="submit">Add Expense</button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Form } from "../../Components/Organism/Form";
import { useParams } from "react-router-dom";
import constants from "../../Utils/Constants/constants";
import axios from "axios";
import useLocalStorage from "../../Utils/hooks/UseLocalStorage";

export function AddBudget() {
  const [user, setUser] = useLocalStorage("user");
  const { id } = useParams();
  const [selectedBudget, setSelectedBudget] = useState("");
  const [expenseForms, setExpenseForms] = useState([
    {
      Frequency: "",
      Category: "",
      Amount: "",
    },
  ]);
  useEffect(() => {
    async function fetchData() {
      try {
        if (id) {
          const getBudget = await axios.get(
            `${import.meta.env.VITE_BUDGET_URL}/getbudget/${id}`,
            {
              headers: {
                user: user.userId,
                "x-auth-token": user.token,
              },
            }
          );
          console.log(getBudget);
          setSelectedBudget(getBudget.data[0].BudgetName);
          setExpenseForms(getBudget.data[0].BudgetExpense);
        } else {
          setSelectedBudget("");
          setExpenseForms([
            {
              Frequency: "",
              Category: "",
              Amount: "",
            },
          ]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = id
        ? `${import.meta.env.VITE_BUDGET_URL}/updateBudget/${id}`
        : `${import.meta.env.VITE_BUDGET_URL}/create`;
      const BudgetName = selectedBudget;
      const BudgetExpense = expenseForms;
      const createBudget = await axios.post(
        url,
        { BudgetName, BudgetExpense },
        {
          headers: {
            user: user.userId,
            "x-auth-token": user.token,
          },
        }
      );
      if (createBudget.status === 200 && !id) {
        setSelectedBudget("");
        setExpenseForms([
          {
            Frequency: "",
            Category: "",
            Amount: "",
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(expenseForms, selectedBudget);
  };

  const handleBudgetChange = (name, value) => {
    if (name === budgetField[0].name) {
      setSelectedBudget(value);
      console.log(selectedBudget, 222);
    }
  };

  const handleChange = (index, name, value) => {
    const newExpenseForms = [...expenseForms];
    newExpenseForms[index][name] = value;
    setExpenseForms(newExpenseForms);
  };

  const handleAddMore = () => {
    setExpenseForms([
      ...expenseForms,
      { Frequency: "", Category: "", Amount: "" },
    ]);
    console.log(expenseForms, 111);
  };

  const handleRemove = (index) => {
    const newExpenseForms = expenseForms.filter((_, i) => i !== index);
    setExpenseForms(newExpenseForms);
  };

  const expenseFormFields = [
    {
      label: "Frequency",
      name: "Frequency",
      type: "text",
      inputType: "select",
      placeholder: "Select Frequency",
      option: constants.Frequency,
    },
    {
      label: "Category",
      name: "Category",
      type: "text",
      inputType: "select",
      placeholder: "Select Category",
      option: constants.Categories,
    },
    {
      label: "Amount",
      name: "Amount",
      type: "text",
      inputType: "input",
      placeholder: "Expense Amount",
    },
  ];
  const budgetField = [
    {
      label: "Budget",
      name: "budget",
      type: "text",
      inputType: "input",
      placeholder: "Budget Name",
      value: selectedBudget,
      option: constants.Frequency,
    },
  ];

  return (
    <div className="content">
      <div className="content-header">
        <h1>{id ? 'Edit': 'Add'} Expense</h1>
      </div>
      <div className="content-main">
        <form onSubmit={handleSubmit}>
          <Form formFields={budgetField} handleChange={handleBudgetChange} />
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
            <button type="submit">{id ? 'Edit': 'Add'} Expense</button>
          </div>
        </form>
      </div>
    </div>
  );
}

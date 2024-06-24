import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/dashboard";
import { Login } from "./pages/Login/login";
import { Register } from "./pages/Register/register";
import { Expense } from "./pages/Expense/expense";
import { Sidebar } from "./Components/Organism/Sidebar/sidebar";
import { Layout } from "./Components/Organism/Layout/layout";
import { AddExpense } from "./pages/AddExpense/addExpense";
import { AddBudget } from "./pages/AddBudget/budget";
import { Budget } from "./pages/Budget/budget";
import ProtectedRoute from "./hoc/Protected";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="expense" element={<Expense />} />
          <Route path="expense/add" element={<AddExpense />} />
          <Route path="expense/:id" element={<AddExpense />} />
          <Route path="budget" element={<Budget />} />
          <Route path="budget/add" element={<AddBudget />} />
          <Route path="budget/:id" element={<AddBudget />} />
          <Route path="income" element={<Expense />} />
          <Route path="income/add" element={<AddExpense />} />
          <Route path="income/:id" element={<AddExpense />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" replace element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

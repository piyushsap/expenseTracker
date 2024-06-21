import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../Components/Organism/Form";

export function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const handleChange = (name, value) => {
    setLogin((initialValue) => ({
      ...initialValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };
  const loginForm = [
    {
      label: "Username",
      name: "username",
      type: "text",
      inputType: "input",
      placeholder: "Username",
      value: login.username,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      inputType: "input",
      placeholder: "Password",
      value: login.password,
    },
  ];
  return (
    <>
      <div className="form-wrap">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Form formFields={loginForm} handleChange={handleChange} />
          <div className="formgroup side-by-side">
            <button>Submit</button>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </>
  );
}

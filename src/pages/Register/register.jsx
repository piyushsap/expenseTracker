import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../Components/Organism/Form";

export function Register() {
  const [register, setRegister] = useState({
    username: "",
    password: "",
    cpassword: "",
    email: "",
  });
  const handeChange = (name, value) => {
    setRegister((initialValue) => ({
      ...initialValue,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(register);
  };

  const RegisterForm = [
    {
      label: "Username",
      name: "username",
      type: "text",
      placeholder: "Username",
      value: register.username,
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      placeholder: "Enter Your email",
      value: register.password,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      value: register.password,
    },
    {
      label: "Confirm Password",
      name: "cpassword",
      type: "password",
      placeholder: "Confirm Password",
      value: register.password,
    },
  ];
  return (
    <>
      <div className="form">
        <div className="form-wrap">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <Form formFields={RegisterForm} handleChange={handeChange} />
            <div className="formgroup side-by-side">
              <button>Register</button>
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form } from "../../Components/Organism/Form";

export function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (register.password === register.cpassword) {
        const payload = {
          Username: register.username,
          Password: register.password,
          Email: register.email,
        };
        const authorize = await axios.post(
          `${import.meta.env.VITE_AUTH_URL}/register`,
          payload
        );
      } else {
        setError('Password do not match');
      }

      navigate("/login");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  const RegisterForm = [
    {
      label: "Username",
      name: "username",
      inputType: "input",
      type: "text",
      placeholder: "Username",
      value: register.username,
    },
    {
      label: "Email",
      name: "email",
      inputType: "input",
      type: "text",
      placeholder: "Enter Your email",
      value: register.email,
    },
    {
      label: "Password",
      name: "password",
      inputType: "input",
      type: "password",
      placeholder: "Password",
      value: register.password,
    },
    {
      label: "Confirm Password",
      name: "cpassword",
      inputType: "input",
      type: "password",
      placeholder: "Confirm Password",
      value: register.cpassword,
    },
  ];
  return (
    <>
      <div className="form">
        <div className="form-wrap">
          <h1>Register</h1>
          {error && <p>{error}</p>}
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

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../../Components/Organism/Form";
import axios from "axios";
import useLocalStorage from "../../Utils/hooks/UseLocalStorage";

export function Login() {
  const [user, setUser] = useLocalStorage('user', {userId:'', token:''});
  const navigate = useNavigate();
  const [error, setError] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { Username: login.username, Password: login.password };
      const authorize = await axios.post(
        `${import.meta.env.VITE_AUTH_URL}/login`,
        payload
      );
      setUser({
        userId: authorize.data.userId,
        token: authorize.data.token,
      });
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
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
        {error && <p>{error}</p>}
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

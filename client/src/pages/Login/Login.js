import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Logo from "../../components/icons/Logo";
import TextInput from "../../components/TextInput/TextInput";
import { login } from "../../store/actions/authActions";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password, history));
  };

  return (
    <div className="container">
      <form className="panel" onSubmit={(e) => onSubmit(e)}>
        <div className="panelHeader">
          <Logo width={39} fill="white" />
          <span className="panelHeaderText">Login to Twitter</span>
        </div>
        <div className="inputs">
          <TextInput
            text="Phone, email or username"
            value={email}
            setValue={setEmail}
          />
          <TextInput text="Password" value={password} setValue={setPassword} />
        </div>
        <button className="loginBtn">Login</button>
        <div className="loginLinks">
          <a href="/">
            <span className="link">Forgot password</span>
          </a>
          <span className="point">.</span>
          <a href="/signup">
            <span className="link">Sign up on Twitter</span>
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;

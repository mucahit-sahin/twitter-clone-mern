import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import Logo from "../../components/icons/Logo";
import TextInput from "../../components/TextInput/TextInput";
import { signup } from "../../store/actions/authActions";

function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [password, setPassword] = React.useState("");
  function onSubmit(e) {
    e.preventDefault();

    dispatch(signup({ email, username, displayName, password }, history));
  }
  return (
    <div className="signUpContainer">
      <form className="card" onSubmit={(e) => onSubmit(e)}>
        <div className="signuplogo">
          <Logo width={26} height={53} fill="white" />
        </div>
        <div className="signupHeader">
          <span>Create your account</span>
        </div>
        <TextInput
          text="Display Name"
          value={displayName}
          setValue={setDisplayName}
        />
        <TextInput text="Username" value={username} setValue={setUsername} />
        <TextInput text="Email" value={email} setValue={setEmail} />
        <TextInput
          text="Password"
          value={password}
          setValue={setPassword}
          type="password"
        />
        <div className="acceptTerm">
          <span>
            When you register, you agree to the
            <span className="acceptTermBlue"> terms of service</span> and the
            <span className="acceptTermBlue"> Privacy Policy</span>, including
            the use of <span className="acceptTermBlue">cookies</span>. When you
            set your
            <span className="acceptTermBlue"> privacy options </span>
            accordingly, others can find you by email or phone number.
          </span>
        </div>
        <button className="signupBtn">
          <span className="signupText">Register</span>
        </button>
      </form>
    </div>
  );
}

export default Signup;

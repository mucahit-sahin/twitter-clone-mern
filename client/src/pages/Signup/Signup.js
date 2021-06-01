import React from "react";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Logo from "../../components/icons/Logo";
import TextInput from "../../components/TextInput/TextInput";
import { register } from "../../store/actions/authActions";
function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(register({ email, username, fullname, password }, history));
    console.log("register");
  };
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
          value={fullname}
          setValue={setFullname}
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

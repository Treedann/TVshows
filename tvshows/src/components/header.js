import React, { useEffect, useState } from "react";
import Modal from "./modal";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [modalUpActive, setModalUpActive] = useState();
  const [modalInActive, setModalInActive] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Your email cannot be empty.");
  const [passwordError, setPasswordError] = useState("Your password cannot be empty.");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Email is incorrect.");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 10) {
      setPasswordError("Password should be longer than 4 and shorter than 10.");
      if (!e.target.value) {
        setPasswordError("Your password cannot be empty.");
      }
    } else {
      setPasswordError("");
    }
  };

  const signInChecker = (email, password) => {
    console.log(email)
    console.log(password)
    if (
      email !== "admin@mail.ru" ||
      password !== "admin"
    ) {
      setFormValid(false);
      setEmailError("This account does not exist.");
    }else{
      setFormValid(true);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
        <Link to="/home"><img src={logo} width="120" height="90" className="logo" alt="" /></Link>

          <div className="navbar-wrap">
            <ul className="navbar-menu">
              <li><Link to='/TVshows'>TV Shows </Link></li>
              <li><Link to='/sub'>Subscription </Link></li>
              <li><Link to='/profile'>Profile </Link></li>
            </ul>

            <Link to="/" name="signUp" onClick={() => setModalUpActive(true)} className="sign">Sign up </Link>
            <Link to="/" name="signIn" onClick={() => setModalInActive(true)} className="sign">Sign in </Link>
          </div>
        </div>
      </nav>
  
      <Modal name="signUpModal" active={modalUpActive} setActive={setModalUpActive}>
        <form className="validation" name="registration">
          <h1>Registration</h1>
          {emailDirty && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
          <input
            className="input"
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blurHandler(e)}
            value={email}
            name="email"
            type="text"
            placeholder="Enter your email"
          />
          {passwordDirty && passwordError && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
          <input
            className="input"
            onChange={(e) => passwordHandler(e)}
            onBlur={(e) => blurHandler(e)}
            value={password}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button className="button" disabled={!formValid} type="submit">Registration </button>
        </form>
      </Modal>
      <Modal name="signInModal"  active={modalInActive} setActive={setModalInActive}>
        <form className="validation" name="authorization">
          <h1>Authorization</h1>
          {emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
          <input
            className="input"
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blurHandler(e)}
            value={email}
            name="email"
            type="text"
            placeholder="Enter your email"
          />
          {passwordDirty && passwordError && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
          <input
            className="input"
            onChange={(e) => passwordHandler(e)}
            onBlur={(e) => blurHandler(e)}
            value={password}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button
            className="button"
            disabled={!formValid}
            onClick={() => signInChecker(email, password)}
            type="submit"
          >
            Authorization
          </button>
        </form>
      </Modal>;
    
    </div>
  );
};

export default Header;

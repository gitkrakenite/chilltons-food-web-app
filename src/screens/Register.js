import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { register } from "../Redux/Actions/userActions";
import Header from "./../components/Header";

const Register = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");

  const [terms, setTerms] = useState(false);
  const [passCheck, setPassCheck] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);
  const [showPass, setShowPass] = useState(true);

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    // if (password === cpassword && terms) {
    //   window.alert("Everything okay");
    // } else window.alert("nope");

    password === cpassword
      ? setPassCheck(true)
      : window.alert("Passwords do not match");

    terms
      ? setTermsCheck(true)
      : window.alert("please agree to the terms and conditions");

    if (passCheck && termsCheck) {
      dispatch(register(name, email, password));
    }
  };

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}

        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Username (alphabets only)"
            required
            value={name}
            minLength="3"
            pattern="[a-zA-Z]+"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email (Important)"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Trial */}
          {/* <input
            type="password"
            placeholder="try pass"
            id="pass"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*?[0-9])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{4,}"
          /> */}
          {/* End trial */}
          <p>
            Password should have special character(@$£#), number(1-9) and
            alphabet(a-z)
          </p>
          <input
            type={showPass ? "password" : "text"}
            placeholder="Strong Password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*?[0-9])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{4,}"
            value={password}
            id="myInput"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Show password */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <input
              type="checkbox"
              style={{ width: "20px", height: "20px" }}
              onClick={() => setShowPass(!showPass)}
            />
            <p style={{ marginBottom: "9px" }}>Show Password</p>
          </div>

          <input
            type="password"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => setcPassword(e.target.value)}
          />
          {/* Terms and condition */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              margintop: "10px",
              justifyContent: "center",
            }}
          >
            <div>
              <input
                type="checkbox"
                style={{ width: "20px", height: "20px" }}
                value="terms"
                onClick={() => setTerms(true)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label for="terms">
                Do you agree to our{" "}
                <Link to={"/terms"}>
                  <strong style={{ textDecoration: "underline" }}>Terms</strong>
                </Link>
              </label>
            </div>
          </div>

          {/* Submit */}
          <button type="submit">Register</button>
          <p>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;

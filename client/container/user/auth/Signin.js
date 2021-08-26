import React, { useContext } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Link, useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import Input from "../../../component/form/input/Input";
import authStyles, { authGrid } from "./authStyles";
import mainContentStyles from "../../../styles/mainContentStyles";
import useFormData from "../../../hooks/useFormData";
import { usePost } from "../../../hooks/useFetch";
import { signin } from "../../../auth/api-auth";

function Signin() {
  const { auth, signInHandler } = useContext(AuthContext);
  const [inputData, inputHandler] = useFormData({
    email: "",
    password: "",
  });
  const [data, onSubmit, message, success, error] = usePost();
  const history = useHistory();

  if (auth) {
    return <Redirect to="/" />;
  }

  async function submit(e) {
    e.preventDefault();
    const userData = await onSubmit(signin, inputData);
    await signInHandler(userData);
    await setTimeout(() => history.push("/"), 1000);
  }

  return (
    <section
      className="base-grid"
      css={[authStyles, mainContentStyles, authGrid(250)]}
    >
      {success ? (
        <h1 className={`heading succes-text `}>"Welcome"</h1>
      ) : (
        <>
          <p>Login</p>
          <form onSubmit={submit}>
            <Input
              label={"Email"}
              type="email"
              change={inputHandler("email")}
              value={inputData.email}
            />
            <Input
              label="Password"
              type="password"
              change={inputHandler("password")}
              value={inputData.password}
            />
            <button className="btn" onClick={submit}>
              Submit
            </button>
          </form>

          <Link to="/signup" className="second-option">
            Don't have an account yet? Join us
          </Link>
        </>
      )}
    </section>
  );
}
export default Signin;

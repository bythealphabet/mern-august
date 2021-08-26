import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";
import Input from "../../../component/form/input/Input";
import authStyles, { authGrid } from "./authStyles";
import mainContentStyles from "../../../styles/mainContentStyles";
import useFormData from "../../../hooks/useFormData";
import { usePost } from "../../../hooks/useFetch";
import { create } from "../../../api/api-user";

function Signup() {
  const [inputData, inputHandler] = useFormData({
    name: "",
    email: "",
    password: "",
  });

  const [data, onSubmit, message, success, error] = usePost();

  function submit(e) {
    e.preventDefault();
    console.log("inputdata", inputData);
    onSubmit(create, inputData);
  }

  return (
    <section
      className="base-grid"
      css={[authStyles, mainContentStyles, authGrid(350)]}
    >
      {success ? (
        <p className="success-message">{message}</p>
      ) : (
        <>
          <p>Sign Up</p>
          <form onSubmit={submit}>
            <Input
              label={"Name"}
              type="name"
              change={inputHandler("name")}
              value={inputData.name}
            />
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

          <Link to="/login" className="second-option">
            Do you have an account? login
          </Link>
        </>
      )}
    </section>
  );
}
export default Signup;

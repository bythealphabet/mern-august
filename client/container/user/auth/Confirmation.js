import React, { useState, useEffect, useContext } from "react";

// import { AuthContext } from "../../../auth/AuthContext";
import { Input } from "../../../components/Forms/Forms";
import { confirmation } from "../../../api/api-user";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { usePost } from "../../../hook/useFetch";

const Confirmation = (props) => {
  //   const { auth } = useContext(AuthContext);
  const { token } = useParams();
  const history = useHistory();

  //   if (auth) {
  // return <Redirect to="/" />;
  //   }

  const [data, submitToken, message, error] = usePost();

  useEffect(() => {
    submit();
  }, []);

  async function submit() {
    await submitToken(confirmation, { token });
    await setTimeout(() => history.push("/user-auth-signin"), 3000);
  }

  return (
    <section className="form-grid full-height">
      <p className="success-text row-full">{message}</p>
    </section>
  );
};

export default Confirmation;

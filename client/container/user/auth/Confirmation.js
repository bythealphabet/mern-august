import React, { useState, useEffect, useContext } from "react";

import { confirmation } from "../../../auth/api-auth";
import { useHistory, useParams } from "react-router-dom";
import { usePost } from "../../../hooks/useFetch";

const Confirmation = (props) => {
  const { token } = useParams();
  const history = useHistory();

  const [data, submitToken, message, error] = usePost();

  useEffect(() => {
    submit();
  }, []);

  async function submit() {
    await submitToken(confirmation, { token });
    await setTimeout(() => history.push("/login"), 3000);
  }

  return (
    <section className="form-grid full-height">
      <p className="success-text row-full">{message}</p>
    </section>
  );
};

export default Confirmation;

import React, { useState, useContext } from "react";
import styles from "../../../styles/FormStyle/FormStyle.module.scss";

import { forgotPassword } from "../../../api/api-user";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";

import { FormButton } from "../../../components/Buttons/Buttons";
import { Input } from "../../../components/Forms/Forms";

import useFormData from "../../../hook/useFormData";
import { usePost } from "../../../hook/useFetch";

const ForgotPassword = (props) => {
	const { auth } = useContext(AuthContext);

	if (auth) {
		return <Redirect to="/" />;
	}
	const [inputData, inputHandler] = useFormData({ email: "" });
	const [data, onSubmit, message, succes, error] = usePost();

	const submit = (e) => {
		e.preventDefault();
		onSubmit(forgotPassword, inputData);
	};

	return (
		<section className={`${styles.FormGrid} ${styles.ForgotFormGrid}`}>
			{succes ? (
				<p className={`${styles.SuccesText} ${styles.RowFull}`}>
					{message}
				</p>
			) : (
				<>
					<h1 className={` ${styles.Heading} `}>Forgot Password</h1>
					<p className={` ${styles.InfoText} `}>
						Please enter your email address below and we will send
						you information to change your password.
					</p>

					<form onSubmit={submit} className={`${styles.Form}`}>
						<Input
							label={"Email"}
							type="email"
							change={inputHandler("email")}
							value={inputData.email}
						/>
						<FormButton text="Reset" click={submit} />
					</form>
				</>
			)}

			{succes ? "" : <p className={`${styles.ErrorMsg}`}>{message}</p>}
		</section>
	);
};

export default ForgotPassword;

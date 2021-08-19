import React, { useState, useContext } from "react";
import styles from "../../../styles/FormStyle/FormStyle.module.scss";

import { resetPassword } from "../../../api/api-user";
import { Link, useHistory, Redirect, useParams } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";

import { FormButton } from "../../../components/Buttons/Buttons";
import { Input } from "../../../components/Forms/Forms";

import useFormData from "../../../hook/useFormData";
import { usePost } from "../../../hook/useFetch";

const RecoverPassword = (props) => {
	const { auth } = useContext(AuthContext);
	const params = useParams();
	const { token } = params;

	if (auth) {
		return <Redirect to="/" />;
	}
	const [inputData, inputHandler] = useFormData({ password: "" });
	const [data, onSubmit, message, succes, error] = usePost();
	const history = useHistory();

	async function submit(e) {
		e.preventDefault();
		await onSubmit(resetPassword, { ...inputData, token: token });
		await setTimeout(() => history.push("/user-auth-signin"), 3000);
	}

	return (
		<section className={`${styles.FormGrid}`}>
			{succes ? (
				<p className={`${styles.SuccesText} ${styles.RowFull}`}>
					{message}
				</p>
			) : (
				<>
					<h1 className={` ${styles.Heading} `}>Reset Password</h1>

					<form onSubmit={submit} className={`${styles.Form}`}>
						<Input
							label={"Password"}
							type="password"
							change={inputHandler("password")}
							value={inputData.email}
						/>
						<FormButton text="Update" click={submit} />
					</form>
					<p className={` ${styles.TopText} `}>
						Please add your new Password
					</p>
					<Link
						className={`${styles.ForgotPassWd}`}
						to="/user-auth-forgot-password"
					>
						resend password reset link?
					</Link>
				</>
			)}
			{succes ? "" : <p className={`${styles.ErrorMsg}`}>{message}</p>}
		</section>
	);
};

export default RecoverPassword;

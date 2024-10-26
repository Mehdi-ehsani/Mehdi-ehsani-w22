import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import useLoginReducer from "../store/reducers/useLoginReducer";
import validateLoginForm from "../utils/validateLoginForm";
import { setCookie , getCookie } from "../utils/cookie";
import { useLogin } from "../services/mutations";
import logo from "../assets/image/logo.png";
import styles from "./Forms.module.css";

const LoginPage = () => {
	const [formData, dispatchFormData] = useLoginReducer();
	const { mutate } = useLogin();
	const navigate = useNavigate();

  useEffect(()=> {
    const token = getCookie("token");
    token && navigate("/")
    },[navigate])

	const changeHandler = (event) => {
		const value = event.target.value;
		const name = event.target.name.toUpperCase();

		switch (name) {
			case "NAME":
				dispatchFormData({ type: "NAME", payload: value });
				break;
			case "PASSWORD":
				dispatchFormData({ type: "PASSWORD", payload: value });
		}
	};
	const loginUser = (event) => {
		event.preventDefault();
		if (validateLoginForm(formData, dispatchFormData)) {
			mutate(
				{ username: formData.name, password: formData.password },
				{
					onSuccess: (data) => {
						console.log(data.data);
						setCookie("token", data.data?.token);
						navigate("/");
					},
					onError: (error) => console.log(error.response.data.message),
				}
			);
		}
	};
	return (
		<div className={styles.container}>
			<form className={styles.form}>
				<img className={styles.logo} src={logo} alt="logo" />
				<h1>فرم ورود</h1>
				<input
					onChange={changeHandler}
					name="name"
					value={formData.name}
					type="text"
					placeholder="نام کاربری"
				/>
				<input
					onChange={changeHandler}
					name="password"
					value={formData.password}
					type="password"
					placeholder="رمز عبور"
				/>
				<button onClick={loginUser} className={styles.submitBtn} type="submit">
					ورود
				</button>
				<Link to="/registration">ایجاد حساب کاربری!</Link>
			</form>
		</div>
	);
};

export default LoginPage;

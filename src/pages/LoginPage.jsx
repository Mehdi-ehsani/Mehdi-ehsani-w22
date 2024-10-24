import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/image/logo.png"
import styles from "./LoginPage.module.css"

const LoginPage = () => {
  return (
   <div className={styles.container}>
     <div className={styles.form}>
      <img className={styles.logo} src={logo} alt='logo'/>
      <h1>فرم ورود</h1>
      <input type='text'placeholder='نام کاربری'/>
      <input type='password' placeholder='رمز عبور'/>
      <button className={styles.submitBtn} type='submit'>ورود</button>
      <Link to="/registration">ایجاد حساب کاربری!</Link>
    </div>
   </div>
  )
}

export default LoginPage
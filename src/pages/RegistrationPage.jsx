import styles from "./Forms.module.css"
import logo from "../assets/image/logo.png"
import { Link } from "react-router-dom"

const RegistrationPage = () => {
  return (
    <div className={styles.container}>
     <form className={styles.form}>
      <img className={styles.logo} src={logo} alt='logo'/>
      <h1>فرم ثبت نام</h1>
      <input type='text'placeholder='نام کاربری'/>
      <input type='password' placeholder='رمز عبور'/>
      <input type='password' placeholder=' تکرار رمز عبور'/>
      <button className={styles.submitBtn} type='submit'>ثبت نام</button>
      <Link to="/login">حساب کاربری دارید؟</Link>
    </form>
   </div>
  )
}

export default RegistrationPage
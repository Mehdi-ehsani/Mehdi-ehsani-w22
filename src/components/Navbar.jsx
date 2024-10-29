import styles from "./Navbar.module.css";
import profileImg from "../assets/image/profile.png";
import searchImg from "../assets/image/search.png";

const Navbar = ({searchedValue , setSearchedValue}) => {
    const searchHandler = (e) => {
		const value = e.target.value.toLowerCase();
		setSearchedValue(value)
   }
	return (
		<nav className={styles.nav}>
			<div className={styles.searchBox}>
				<img src={searchImg} alt="icon" />
				<input
					value={searchedValue}
					onChange={searchHandler}
					placeholder="جستجو کالا"
				/>
			</div>
			<div className={styles.profileView}>
				<img src={profileImg} alt="icon" />
				<div>
					<h3>مهدی احسانی</h3>
					<p>مدیر</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

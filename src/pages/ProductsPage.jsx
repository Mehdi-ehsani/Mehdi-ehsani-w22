import { useEffect } from "react";
import { getCookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../services/queries";

import profileImg from "../assets/image/profile.png";
import searchImg from "../assets/image/search.png";
import styles from "./products.module.css";
import Product from "../components/product";

const ProductsPage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const token = getCookie("token");
		token ? null : navigate("/login");
	}, [navigate]);
	const { data, isPending, isError, error } = useProducts();

	console.log(data, isPending, error);
	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				<div className={styles.searchBox}>
					<img src={searchImg} alt="icon" />
					<input placeholder="جستجو کالا" />
				</div>
				<div className={styles.profileView}>
					<img src={profileImg} alt="icon" />
					<div>
						<h3>مهدی احسانی</h3>
						<p>مدیر</p>
					</div>
				</div>
			</nav>

			<div className={styles.products}>
				<div className={styles.header}>
					<p>نام کالا</p>
					<p>موجودی</p>
					<p>قیمت</p>
					<p>شناسه کالا</p>
				</div>
				<div>
					{isPending && <h1>Loading...</h1>}
					{!isPending &&
						data.data.data.map((product) => (
							<Product key={product.id} product={product} />
						))}
					{isError && <h1>{error}</h1>}
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;

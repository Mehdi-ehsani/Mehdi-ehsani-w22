import { useEffect, useState } from "react";
import { getCookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../services/queries";

import profileImg from "../assets/image/profile.png";
import searchImg from "../assets/image/search.png";
import settingImg from "../assets/image/setting.png";
import styles from "./products.module.css";
import Product from "../components/Product";
import AddProductModal from "../components/modals/AddProductModal";

const ProductsPage = () => {
	const [isAddModalShow, setIsAddModalShow] = useState(false);
	const [pageNumber, setPageNumber] = useState(1);
	
	const navigate = useNavigate();
	useEffect(() => {
		const token = getCookie("token");
		token ? null : navigate("/login");
	}, [navigate]);
	const { data, isPending, isError, error } = useProducts(pageNumber);
	const repetitions = Array.from({ length: data?.data?.totalPages });

	const pageNextHandler = () => {
		if (pageNumber !== data.data.totalPages) {
			setPageNumber((prev) => prev + 1);
		}
	};
	const pagePrevHandler = () => {
		if (pageNumber !== 1) {
			setPageNumber((prev) => prev - 1);
		}
	};
	const changePage = (number) => {
     setPageNumber(number)
	}
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
			<div className={styles.btn}>
				<div>
					<img src={settingImg} />
					<h1>مدیریت کالا</h1>
				</div>
				<button onClick={() => setIsAddModalShow(true)}>افزودن محصول</button>
			</div>
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
							<Product data={data} key={product.id} product={product} />
						))}
					{isError && <h1>{error}</h1>}
				</div>
			</div>
			{isAddModalShow && (
				<AddProductModal setIsAddModalOpen={setIsAddModalShow} />
			)}
			<div className={styles.paginationContainer}>
				<button onClick={pagePrevHandler}name="prev"className={styles.prevBtn}>{"<"}</button>
					{repetitions.map(( event , index) => (
						<button
						 onClick={() => changePage(index + 1)}
						 className={`${styles.pageNumberBtn} ${pageNumber === index + 1 && styles.active}`} key={index}>
							{index + 1}
						</button>
					))}
				<button onClick={pageNextHandler}name="next"className={styles.nextBtn}>{">"}</button>
			</div>
		</div>
	);
};

export default ProductsPage;

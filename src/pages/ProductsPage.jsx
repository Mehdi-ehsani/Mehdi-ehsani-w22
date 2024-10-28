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
import { useMultiDeleteProduct } from "../services/mutations";
import PaginationButtons from "../components/PaginationButtons";

const ProductsPage = () => {
	const [isAddModalShow, setIsAddModalShow] = useState(false);
	const [pageNumber, setPageNumber] = useState(1);
	const [selectedIds, setSelectedIds] = useState([]);
	const [showCheckBox, setShowCheckBox] = useState(false);
	const {mutate} = useMultiDeleteProduct()

	const navigate = useNavigate();
	useEffect(() => {
		const token = getCookie("token");
		token ? null : navigate("/login");
	}, [navigate]);

	const { data, isPending, isError, error } = useProducts(pageNumber);


	const handleCheckboxChange = (id) => {
		setSelectedIds((prevSelectedIds) => {
			if (prevSelectedIds.includes(id)) {
				return prevSelectedIds.filter((selectedId) => selectedId !== id);
			} else {
				return [...prevSelectedIds, id];
			}
		});
	};
	const multiDeleteHandler =() => {
		if(showCheckBox) {
			const data = { ids: [...selectedIds] };
			if(selectedIds.length) {
				mutate(
					{ data },
					{
						onSuccess: () => setSelectedIds([]),
						onError: (error) => console.log(error),
					}
				);
			}
			setShowCheckBox(false)
		}else {
			setShowCheckBox(true);
		}
		
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
				<div className={styles.bContainer}>
					<button onClick={() => setIsAddModalShow(true)}>افزودن محصول</button>
					<button onClick={multiDeleteHandler} className={styles.selectBtn}>{showCheckBox ? "حذف گروهی" : "انتخاب گروهی"}</button>
				</div>
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
							<Product
								showCheckBox={showCheckBox}
								handleCheckboxChange={handleCheckboxChange}
								isSelected={selectedIds.includes(product.id)}
								data={data}
								key={product.id}
								product={product}
							/>
						))}
					{isError && <h1>{error}</h1>}
				</div>
			</div>
			{isAddModalShow && (
				<AddProductModal setIsAddModalOpen={setIsAddModalShow} />
			)}
			<PaginationButtons pageNumber={pageNumber} setPageNumber={setPageNumber} data={data} />
		</div>
	);
};

export default ProductsPage;

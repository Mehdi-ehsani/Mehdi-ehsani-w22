import { useState } from "react";

import styles from "./product.module.css";
import trashImg from "../assets/image/trash.png";
import editImg from "../assets/image/edit.png";
import EditProductModal from "./modals/EditProductModal";
import DeleteConfirmModal from "./modals/DeleteConfirmModal";
import formatNumber from "../helpers/formatNumber";

const Product = ({ product , data}) => {
    const [isEditModalShow , setIsEditModalShow] = useState(false) 
    const [isDeleteModalShow , setIsDeleteModalShow] = useState(false) 

	return (
		<div className={styles.product} key={product.id}>
			<p>{product.name}</p>
			<p>{product.quantity}</p>
			<p>{formatNumber(product.price)} تومان</p>
			<div className={styles.btnContainer}>
				{product.id}
				<div>
					<img onClick={() => setIsEditModalShow(true)} src={editImg} />
					<img onClick={() => setIsDeleteModalShow(true)} src={trashImg} />
				</div>
			</div>
			{isEditModalShow && <EditProductModal data={data} id={product.id} setIsEditModalShow={setIsEditModalShow}/>}
			{isDeleteModalShow && <DeleteConfirmModal id={product.id} setIsDeleteModalShow={setIsDeleteModalShow} />}
		</div>
	);
};

export default Product;

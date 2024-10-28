import { useState } from "react";

import styles from "./product.module.css";
import trashImg from "../assets/image/trash.png";
import editImg from "../assets/image/edit.png";
import { useDeleteProduct} from "../services/mutations";
import { useProducts } from "../services/queries";
import EditProductModal from "./modals/EditProductModal";

const Product = ({ product }) => {
    const [isEditModalShow , setIsEditModalShow] = useState(false) 

	
	const { data } = useProducts();
	const { mutate:deleteProduct } = useDeleteProduct();

	const deleteHandler = (id) => {
		const data = { ids: [id] };

		deleteProduct(
			{ data },
			{
				onSuccess: (data) => console.log(data),
				onError: (error) => console.log(error),
			}
		);
	};
    const editHandler =() => {
		setIsEditModalShow(true)
	}
	return (
		<div className={styles.product} key={product.id}>
			<p>{product.name}</p>
			<p>{product.quantity}</p>
			<p>{product.price}</p>
			<div className={styles.btnContainer}>
				{product.id}
				<div>
					<img onClick={() => editHandler()} src={editImg} />
					<img onClick={() => deleteHandler(product.id)} src={trashImg} />
				</div>
			</div>
			{isEditModalShow && <EditProductModal id={product.id} setIsEditModalShow={setIsEditModalShow}/>}
		</div>
	);
};

export default Product;

import styles from "./product.module.css"
import trashImg from "../assets/image/trash.png";
import editImg from "../assets/image/edit.png";
import { useDeleteProduct } from "../services/mutations";

const Product = ({product}) => {
	const {mutate} = useDeleteProduct();

	const deleteHandler = (id) => {
	  const data = {"ids": [id]} 	
	 
      mutate({data},{
		onSuccess: (data) => console.log(data),
		onError: (error) => console.log(error)
	  })
	}
	return (
		<div className={styles.product} key={product.id}>
			<p>{product.name}</p>
			<p>{product.quantity}</p>
			<p>{product.price}</p>
			<div className={styles.btnContainer}>
				{product.id}
				<div>
					<img src={editImg} />
					<img onClick={() => deleteHandler(product.id)} src={trashImg} />
				</div>
			</div>
		</div>
	);
};

export default Product;

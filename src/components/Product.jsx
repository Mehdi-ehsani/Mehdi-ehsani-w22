import styles from "./product.module.css"
import trashImg from "../assets/image/trash.png";
import editImg from "../assets/image/edit.png";

const Product = ({product}) => {
	return (
		<div className={styles.product} key={product.id}>
			<p>{product.name}</p>
			<p>{product.quantity}</p>
			<p>{product.price}</p>
			<div className={styles.btnContainer}>
				{product.id}
				<div>
					<img src={editImg} />
					<img src={trashImg} />
				</div>
			</div>
		</div>
	);
};

export default Product;

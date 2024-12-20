import { useDeleteProduct } from "../../services/mutations";

import closeImg from "../../assets/image/close.png";
import styles from "./DeleteConfirmModal.module.css"

const DeleteConfirmModal = ({ id, setIsDeleteModalShow }) => {
	const { mutate } = useDeleteProduct();

    const deleteHandler = () => {
		const data = { ids: [id] };
		mutate(
			{ data },
			{
				onSuccess: (data) => console.log(data),
				onError: (error) => console.log(error),
			}
		);
	};
	return (
		<div className={styles.container} onClick={() => setIsDeleteModalShow(false)}>
			<div className={styles.form} onClick={(e) => e.stopPropagation()}>
				<img src={closeImg} alt="icon" />
				<h2>آیا از حذف این محصول مطمئنید؟</h2>
				<div className={styles.btnContainer}>
					<button className={styles.delete} onClick={deleteHandler}>حذف</button>
					<button className={styles.close} onClick={() => setIsDeleteModalShow(false)}>لغو</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteConfirmModal;

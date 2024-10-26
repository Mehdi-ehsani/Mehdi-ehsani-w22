import styles from "./AddProductModal.module.css";
import useAddProductReducer from "../../store/reducers/useAddProductReducer";
import { usePostProduct } from "../../services/mutations";

const AddProductModal = ({ setIsAddModalOpen ,refetch }) => {
	const [formData, dispatchFormData] = useAddProductReducer();
    const {mutate} = usePostProduct()

	const changeHandler = (event) => {
		const value = event.target.value;
		const name = event.target.name.toUpperCase();

		switch (name) {
			case "NAME":
				dispatchFormData({ type: "NAME", payload: value });
				break;
			case "PRICE":
				dispatchFormData({ type: "PRICE", payload: value });
				break;
			case "QUANTITY":
				dispatchFormData({ type: "QUANTITY", payload: value });
		}
	};
    const addProduct = () => {
      mutate({ name: formData.name, price: formData.price, quantity: formData.quantity},{
        onSuccess: (data) => {
            console.log(data.data);
            refetch()
            setIsAddModalOpen(false)
        },
        onError: (error) => console.log(error.response.data.message),
    })
    }
	return (
		<div className={styles.container} onClick={() => setIsAddModalOpen(false)}>
			<form
				onClick={(e) => {
					e.stopPropagation();
					e.preventDefault();
				}}
				className={styles.form}
			>
				<h1>ایجاد محصول جدید</h1>
				<label htmlFor="">نام کالا</label>
				<input onChange={changeHandler} name="name" value={formData.name} placeholder="نام کالا" type="text" />
				<label htmlFor="">تعداد موجودی</label>
				<input onChange={changeHandler} name="price" value={formData.price} placeholder="تعداد " type="number" />
				<label htmlFor="">قیمت</label>
				<input onChange={changeHandler} name="quantity" value={formData.quantity} placeholder="قیمت" type="number" />
				<div className={styles.btnContainer}>
					<button onClick={addProduct} className={styles.addBtn}>ایجاد</button>
					<button className={styles.cancelB}onClick={() => setIsAddModalOpen(false)}>انصراف</button>
				</div>
			</form>
		</div>
	);
};

export default AddProductModal;

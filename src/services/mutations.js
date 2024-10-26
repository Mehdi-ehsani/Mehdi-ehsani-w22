import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";

const useRegister = () => {
	const mutationFn = (data) => {
	 return	api.post("auth/register", data);
	};
	return useMutation({ mutationFn });
};

const useLogin = () => {
	const mutationFn = (data) => api.post("auth/login", data);
	return useMutation({ mutationFn });
};
const usePostProduct = () => {
	const mutationFn = (data) => api.post("products", data);
	return useMutation({ mutationFn });
}
export { useRegister, useLogin ,usePostProduct};

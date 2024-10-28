import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

const useProducts = (pageNumber) => {
	const queryFn = (data) => {
	 return	api.get(`products?page=${pageNumber}&limit=10`, data);
	};
	return useQuery({queryKey: ["products", pageNumber] , queryFn });
};
export {useProducts}
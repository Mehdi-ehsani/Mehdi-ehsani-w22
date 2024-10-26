import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

const useProducts = () => {
	const queryFn = (data) => {
	 return	api.get("products", data);
	};
	return useQuery({queryKey: ["products"] , queryFn });
};
export {useProducts}
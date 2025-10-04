import { IProduct } from "@/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productApi = createApi({
	reducerPath: "productApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://t-core.fit-hub.pro/Test/GetTariffs" }),
	endpoints: (build) => ({
		getProducts: build.query<IProduct[], string>({
			query: () => `/`,
		}),
	}),
});

export const { useGetProductsQuery } = productApi;

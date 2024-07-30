import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICountry } from "../../types"

export const counterApi = createApi({
	reducerPath: "counterApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1" }),
	endpoints: (builder) => ({
		getAllCountries: builder.query<ICountry[], string>({
			query: () => `/all`,
		}),
		getCountryByName: builder.query<ICountry, string>({
			queryFn: async (name) => {
				try {
					const response = await fetch(
						`https://restcountries.com/v3.1/name/${name}`
					)
					const data = await response.json()
					return { data: data[0] }
				} catch (e: any) {
					return { error: e.message }
				}
			},
		}),
	}),
})

export const { useGetAllCountriesQuery, useGetCountryByNameQuery } = counterApi

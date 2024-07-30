import { useGetAllCountriesQuery } from "../../store/counter/counterApi"

import List from "@mui/material/List"

import Country from "../Country/Country"
import { StyledListControl } from "./style"
import { ICountry } from "../../types"
import { Typography } from "@mui/material"
import ErrorComponent from "../ErrorComponent/ErrorComponent"
import LoaderComponent from "../LoaderComponent/LoaderComponent"

export default function GutterlessList() {
	const { data, error, isLoading } = useGetAllCountriesQuery("")

	const countries: ICountry[] | undefined = data?.slice(0, 20)

	if (isLoading) {
		return <LoaderComponent />
	}
	if (error) {
		return <ErrorComponent />
	}

	return (
		<StyledListControl>
			<Typography variant="h3" component="h2">
				Список стран
			</Typography>
			<List>
				{countries?.map((country: any) => (
					<Country key={country.name.common} country={country} />
				))}
			</List>
		</StyledListControl>
	)
}

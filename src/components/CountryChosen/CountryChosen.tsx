import { useGetCountryByNameQuery } from "../../store/counter/counterApi"
import { useNavigate, useParams } from "react-router-dom"
import { Box, Button, Typography } from "@mui/material"
import { StyledBoxControl } from "./style"
import useBackCountryList from "../../hooks/useBackCountryList"
import ErrorComponent from "../ErrorComponent/ErrorComponent"
import LoaderComponent from "../LoaderComponent/LoaderComponent"

const CountryChosen = () => {
	const { name } = useParams()
	const { handleClickBackToCountries } = useBackCountryList()

	const { data, error, isLoading } = useGetCountryByNameQuery(name!)

	if (isLoading) {
		return <LoaderComponent />
	}

	if (error) {
		return <ErrorComponent />
	}
	return (
		<StyledBoxControl>
			<Box>
				<Button onClick={handleClickBackToCountries} variant="contained">
					Вернуться назад к списку стран
				</Button>

				<Typography variant="h3" component="h1">
					Страна:{data?.name.common}
				</Typography>
				<Box>
					<img src={data?.flags.png} alt="" />
				</Box>
				<Typography variant="h4" component="h3">
					Столица:{data?.capital[0]}
				</Typography>
				<Typography variant="h5" component="h4">
					Населения:{data?.population}
				</Typography>
			</Box>
		</StyledBoxControl>
	)
}

export default CountryChosen

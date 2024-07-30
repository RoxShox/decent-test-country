import { Box, Button, Typography } from "@mui/material"
import useBackCountryList from "../../hooks/useBackCountryList"
import { StyledBoxControl } from "./style"

const ErrorComponent = () => {
	const { handleClickBackToCountries } = useBackCountryList()
	return (
		<StyledBoxControl>
			<Box>
				<Button onClick={handleClickBackToCountries} variant="contained">
					Вернуться назад к списку стран
				</Button>
				<Typography variant="h3" component="span">
					Ошибка, что-то пошло не так, попробуйте позже
				</Typography>
			</Box>
		</StyledBoxControl>
	)
}

export default ErrorComponent

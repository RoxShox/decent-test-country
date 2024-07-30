import { ListItem, ListItemButton, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface CountryProps {
	country: any
}

const Country = ({ country }: CountryProps) => {
	const navigate = useNavigate()

	const handleClickCountry = (country: string) => {
		navigate(country)
	}

	return (
		<ListItemButton>
			<ListItem
				onClick={() => handleClickCountry(country.name.common)}
				key={country.name.common}
				disableGutters
			>
				<ListItemText primary={country.name.common} />
			</ListItem>
		</ListItemButton>
	)
}

export default Country

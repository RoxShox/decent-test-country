import { useNavigate } from "react-router-dom"

const useBackCountryList = () => {
	const navigate = useNavigate()

	const handleClickBackToCountries = () => {
		navigate("/")
	}

	return { handleClickBackToCountries }
}

export default useBackCountryList

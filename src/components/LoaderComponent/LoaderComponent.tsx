import { Box } from "@mui/material"
import { BeatLoader } from "react-spinners"

const LoaderComponent = () => {
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<BeatLoader />
		</Box>
	)
}

export default LoaderComponent

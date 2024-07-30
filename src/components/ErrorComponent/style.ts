import { Box, styled } from "@mui/material"

export const StyledBoxControl = styled(Box)`
	padding-top: 50px;
	& .MuiBox-root {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	& .MuiButtonBase-root {
		max-width: max-content;
		margin: 0 auto;
		margin-bottom: 20px;
	}
	& .MuiTypography-root {
		color: red;
	}
`

import { Box, styled } from "@mui/material"

export const StyledBoxControl = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	& .MuiBox-root {
		background: #70ccd1;
		padding: 50px;
		border-radius: 30px;
	}
	& .MuiButtonBase-root {
		margin-bottom: 20px;
	}
`

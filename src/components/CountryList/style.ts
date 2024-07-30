import { List, styled } from "@mui/material"

export const StyledListControl = styled(List)`
	text-align: center;
	transition: all 0.3s;
	& .MuiList-root {
		width: 100%;
		max-width: 360px;
		margin: 0 auto;
	}
	& .MuiListItem-root {
		text-align: center;
	}
	& .MuiButtonBase-root {
		text-align: center;
		border-radius: 20px;
		transition: all 0.3s;
	}
	& .MuiButtonBase-root:hover {
		background-color: #d2dddf;
		border-radius: 20px;
		transition: all 0.3s;
	}
`

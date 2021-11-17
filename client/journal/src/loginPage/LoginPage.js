import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const history = useNavigate();

	const onLogin = () => {
		history("/1");
	};
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100vh"
			flexDirection="column"
			gap={10}
		>
			<TextField placeholder="Enter username" />
			<Button variant="contained" onClick={onLogin}>
				Login
			</Button>
		</Box>
	);
};

export default LoginPage;

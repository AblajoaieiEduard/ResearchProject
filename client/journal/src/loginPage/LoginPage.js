import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
	const [textFieldValue, setTextFieldValue] = useState("");
	const history = useNavigate();

	const onLogin = async () => {
		axios
			.post(
				"http://192.168.1.3:8080/login",
				{ username: textFieldValue },
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((res) => {
				history(`/${res.data}`);
			})
			.catch((error) => {
				console.log(error);
			});
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
			<TextField
				placeholder="Enter username"
				value={textFieldValue}
				onChange={(e) => {
					setTextFieldValue(e.target.value);
				}}
			/>
			<Button variant="contained" onClick={onLogin}>
				Login
			</Button>
		</Box>
	);
};

export default LoginPage;

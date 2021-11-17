import { Button, Grid } from "@mui/material";
import JournalPage from "./journalPage/JournalPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./loginPage/LoginPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/:id" element={<JournalPage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;

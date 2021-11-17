import { Button, Grid, Typography } from "@mui/material";
import React, { Component, useEffect } from "react";

import { Editor } from "react-draft-wysiwyg";
import { ContentState, EditorState, Modifier } from "draft-js";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import useStyles from "./JournalPage.styles";
import { Box } from "@mui/system";
import axios from "axios";
import { useLocation } from "react-router-dom";

const JournalPage = () => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const location = useLocation();

	useEffect(() => {
		console.log(location);
		axios
			.get(`http://192.168.1.3:8080/journal${location.pathname}`)
			.then((res) => {
				console.log(res);
				console.log(res.data);
				setEditorState(
					EditorState.createWithContent(ContentState.createFromText(res.data))
				);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const classes = useStyles();
	return (
		<Box className={classes.container}>
			<Box>
				<Typography>Achievements:</Typography>
			</Box>
			<Editor
				editorState={editorState}
				toolbarClassName="toolbarClassName"
				wrapperClassName="wrapperClassName"
				onEditorStateChange={setEditorState}
			/>
			<Button variant="contained" className={classes.button}>
				Finish writing session
			</Button>
		</Box>
	);
};

export default JournalPage;

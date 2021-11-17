import { Button, Grid, Typography } from "@mui/material";
import React, { Component } from "react";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, Modifier } from "draft-js";
import { useState } from "react";
import draftToHtml from "draftjs-to-html";
import PropTypes from "prop-types";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import useStyles from "./JournalPage.styles";
import { Box } from "@mui/system";

const JournalPage = () => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

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

import { Grid } from "@mui/material";
import React, { Component } from "react";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, Modifier } from "draft-js";
import { useState } from "react";
import draftToHtml from "draftjs-to-html";
import PropTypes from "prop-types";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import useStyles from "./JournalPage.styles";

const JournalPage = () => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const classes = useStyles();
	return (
		<div>
			<Editor
				editorState={editorState}
				toolbarClassName="toolbarClassName"
				wrapperClassName="wrapperClassName"
				onEditorStateChange={setEditorState}
			/>
		</div>
	);
};

export default JournalPage;

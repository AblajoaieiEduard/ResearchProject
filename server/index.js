const express = require("express");
const router = require("./server/routes/router.js");
const path = require("path");
const cors = require("cors");
var bodyParser = require("body-parser");

// const __dirname = path.resolve();

const app = express();
var jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(cors());

app.use("/", router);

const PORT = 8080;

app.listen(PORT, () => {
	console.log(`Server os running on ${PORT}`);
});

const express = require("express");
const pool = require("../../db/db");
const router = express.Router();

router.get("/challenges", async (request, response) => {
	const allChallenges = await pool.query("SELECT * FROM challenges");
	response.json(allChallenges.rows);
});

router.post("/login", async (req, res) => {
	try {
		console.log(req.body);
		const { username } = req.body;
		const user = await pool.query("SELECT id FROM users WHERE username = $1", [
			username,
		]);
		if (user.rows[0]) {
			res.status = 200;
			res.json(user.rows[0].id);
		} else {
			console.log("A crepat");
			res.sendStatus(404);
		}
	} catch (err) {
		console.error(err.message);
	}
});

router.get("/journal/:id", async (req, res) => {
	try {
		const journal = await pool.query(
			"SELECT journal FROM users WHERE id = $1",
			[req.params.id]
		);
		if (journal.rows[0]) {
			res.status = 200;
			res.json(journal.rows[0].journal);
		} else {
			console.log("A crepat");
			res.sendStatus(404);
		}
	} catch (err) {}
});

module.exports = router;

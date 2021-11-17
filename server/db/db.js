const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "eduard12",
	host: "localhost",
	port: 5432,
	database: "research",
});

module.exports = pool;

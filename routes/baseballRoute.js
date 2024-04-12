const express = require("express");
const router = express.Router();
const { getStandingsAndSchedule } = require("../controllers/baseball");

router.route('/').get( getStandingsAndSchedule );

module.exports = router;

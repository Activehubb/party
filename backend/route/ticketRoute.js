const express = require("express");
const { createTicket } = require("../controllers/ticketController");
const router = express.Router();
const { isAuthenticated, authorizedRoles } = require("../middlewares/auth");

router.route('/ticket/new').post(isAuthenticated, authorizedRoles("admin", "editor"), createTicket)

module.exports = router;

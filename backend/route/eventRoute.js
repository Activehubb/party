const express = require("express");
const {
  createEvent,
  updateEvent,
  getAllEvent,
  getEventById,
  deleteEventById,
  deleteAllEvent,
} = require("../controllers/eventControllers");
const router = express.Router();
const { isAuthenticated, authorizedRoles } = require("../middlewares/auth");

router.route("/event").get(getAllEvent);
router.route("/event/:id").get(getEventById);
router
  .route("/event/create")
  .post(
    isAuthenticated,
    authorizedRoles("admin", "editor", "user"),
    createEvent
  );
router
  .route("/event/update/:id")
  .put(isAuthenticated, authorizedRoles("admin", "editor", "user"), updateEvent);
router
  .route("/event/delete/:id")
  .delete(isAuthenticated, authorizedRoles("admin", "editor", "user"), deleteEventById);
router
  .route("/event/delete")
  .delete(isAuthenticated, authorizedRoles("admin", "editor", "user"), deleteAllEvent);

module.exports = router;

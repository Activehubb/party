const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  logoutUser,
  getUserProfile,
  forgotPassword,
  resetPassword,
  updatePassword,
  updateUserProfile,
  allUsers,
  getUserDetail,
  updateUser,
  deleteUser,
} = require("../controllers/authController");
const { isAuthenticated, authorizedRoles } = require("../middlewares/auth");

// Admin || User
router.route("/create").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").post(isAuthenticated, logoutUser);
router.route("/me").get(isAuthenticated, getUserProfile);
router.route("/me/update").put(isAuthenticated, updateUserProfile);

// Admin

router
  .route("/admin/users")
  .get(isAuthenticated, authorizedRoles("admin, editor"), allUsers);

router
  .route("/admin/user/:id")
  .get(isAuthenticated, authorizedRoles("admin, editor"), getUserDetail)
  .put(isAuthenticated, authorizedRoles("admin"), updateUser)
  .delete(isAuthenticated, authorizedRoles("admin"), deleteUser);

//   Password
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/password/update").put(updatePassword);

module.exports = router;

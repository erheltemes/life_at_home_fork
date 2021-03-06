const router = require("express").Router();
const postController = require("../../controllers/postController");

router.route("/")
  .get(postController.findAll)
  .post(postController.create);

router.route("/:id")
  .get(postController.findById)
  .put(postController.update)
  .delete(postController.remove);

module.exports = router;

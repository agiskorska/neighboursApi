const router = require("express").Router();
const ownerController = require("../controllers/ownerController");

router.get('/', ownerController.allOwners);

router.get('/:id', ownerController.oneOwner);

router.post('/', ownerController.newOwner);

router.put('/:id', ownerController.changeOwner);

module.exports = router;
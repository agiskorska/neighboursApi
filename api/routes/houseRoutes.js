const router = require("express").Router();
const houseController = require("../controllers/houseController");

router.get('/:id', houseController.oneHouse);
router.get('/postcode/:postcode/', houseController.byPostcode);
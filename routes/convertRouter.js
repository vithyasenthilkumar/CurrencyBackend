const express = require("express")
const { convertCurrency } = require ("../controllers/convertController")

const router = express.Router()

router.route('/:from/:to').post(convertCurrency)

module.exports = router
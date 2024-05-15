const express = require ("express")
const { getAllConversionRate } = require ("../controllers/currencyController")

const router = express.Router()

router.route('/').get(getAllConversionRate)

module.exports = router
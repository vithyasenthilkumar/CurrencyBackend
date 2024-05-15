const currencyModel = require('../models/currencyModel')

const convertCurrency = async(request, response) => {
  const { from, to } = request.params
  const { currencyValueToBeConverted } = request.body
  try{
  const fromRate = await currencyModel.findOne({code:from})
  const toRate = await currencyModel.findOne({code:to})

  const result = (toRate.value / fromRate.value) * currencyValueToBeConverted
  response.status(200).json({result})
  }
  catch(error)
  {
    response.status(500).json({message:error.message})
  }
}

module.exports = { convertCurrency }
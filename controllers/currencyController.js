const currencyModel = require('../models/currencyModel')
const currencyInitialData = require('../data/currencyData')

const getAllConversionRate = async(request, response) => {
  try{
    const currencyData = await currencyModel.find()
    if (currencyData.length === 0)
    {
      const currencyData = await currencyModel.insertMany(currencyInitialData)
    }
    response.status(200).json(currencyData)
  }
  catch(error)
  {
    response.status(500).json({message:error.message})
  }
}


module.exports =  { getAllConversionRate }
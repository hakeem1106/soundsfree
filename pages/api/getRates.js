require('dotenv').config();
const axios = require('axios').default();

module.exports = (req, res) => {

  const getRates = async()=>{
    await axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`)
    .then(res.status(200))
    .then(res=> res.json())
    .then(console.log(res))
  }


  getRates()
}
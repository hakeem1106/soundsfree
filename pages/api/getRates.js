require('dotenv').config();
const axios = require('axios').default();
const fetch = require('node-fetch')

module.exports = (req, res) => {
 /* res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
  */

  const getRates = async()=>{  

    await axios({
        method: 'get',
        url: `http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`,
        responseType: 'json'
    })
    .then(data=> console.log(data))
/*  
     await fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.rates))
        
        .catch(err =>{
            res.send(err)
        })
 */
      }
 getRates()
 res.end()
}
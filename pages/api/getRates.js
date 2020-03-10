require('dotenv').config();
const fetch = require('node-fetch')

module.exports = (req, res) => {
 /* res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
  */

  const getRates = async(event)=>{  
     
    await fetch(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`)
    .then(res=> res.json())
    .then(data=>console.log(data))
    .catch(err=> console.log(err))
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
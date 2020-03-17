require('dotenv').config();
const fetch = require('node-fetch')

module.exports = (req, res) => {
 /* res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
  */

  const getRates = async()=>{ 
    
     
    await fetch(`http://api.bitcoincharts.com/v1/markets.json`)
    .then(res=>  res.json())
    .then(data=> body.json(data))
    
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
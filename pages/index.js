import React from 'react'
import Head from 'next/head'
import Layout from '../soundsfree/components/layoutents/layout'
import fetch from 'isomorphic-unfetch'



class Home extends React.Component{
constructor(props){
    super(props)
    this.state={}
}

getRates = async()=>{
       await axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`)
       .then(res=> send(res.data))
        .catch(err => send(err))
        
        
    }

 render(){

return(


  <Layout>
      <div>
      works
      </div>
      
    
  </Layout>

)
}


}


  

  


export default Home
import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'




class Home extends React.Component{
constructor(props){
    super(props)
    this.state={
      rates: []
    }
}
async componentDidMount(){
    await fetch(`./api/getRates`)
    .then(res=> res.json())
    .then(data=>{
      this.setState({
        rates: [data]
      },
      console.log(this.state.rates)
      )
      
    })
    .catch(err=> console.log(err))


}


  
 render(){

return(


  <Layout>
      <div>
     {this.state.rates.map(r=>{
        {r}
        
        

     })}
      </div>
      
    
  </Layout>

)
}


}


  

  


export default Home
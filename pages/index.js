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
this.fromBack()
}
fromBack=async()=>{
  await fetch(`./api/getrates`)
    .then(res=> res.json())
    .then(data=>{
      this.setState({
        rates: data.rates
      })
    })
    .catch(err=> console.log(err))
}
 render(){

return(


  <Layout>
      <div>
      {this.state.rates.map(monies=>{
        <div>
        {monies.AED}
        </div>
      })}
      </div>
      
    
  </Layout>

)
}


}


  

  


export default Home
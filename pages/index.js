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
componentDidMount(){
this.fromBack = this.fromBack.bind(this)
}

fromBack=async(event)=>{
    event.preventDefault()
  await fetch(`./api/getRates`)
    .then(res=> res.json())
    .then(data=>{
      this.setState({
        rates: data
      })
    })
    .catch(err=> console.log(err))
}
 render(){

return(


  <Layout>
      <div>
     {this.state.rates}
      </div>
      
    
  </Layout>

)
}


}


  

  


export default Home
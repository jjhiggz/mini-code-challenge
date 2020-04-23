import React from 'react'
import Card from './Card'

const information ={
  dudes:[{name:'jon',motto:'likes dogs'},{name:'jeff', motto:'likes dogs'}],
  chicks:[{name:'jonette',motto:'likes dogs'},{name:'jeffette', motto:'likes dogs'}],
  Kevin:[{name:'Kevin',motto:'likes Kevin'},{name:'Kevin', motto:'Also Likes Kevin'}],
} 
export default class CardList extends React.Component{
  render(){
    console.log('fuckfuck')
    return(
    <div id='card-list'>
      <Card/>
      <Card/>
      <Card/>
    </div>
    )
  }
}
import React from 'react'


export default class Menu extends React.Component{
  
  render(){
    return(
      <div id='menu'>
        <button className='menu-button' onClick={dudeButtonActive}>Cards About Dudes</button>
        <button className='menu-button' onClick={chickButtonActive}>Cards About Chicks</button>
        <button className='menu-button' onClick={kevinButtonActive}>Fuck You Kevin</button>
      </div>
    )
  }
}
function dudeButtonActive(){
  Menu.setState({category:'dudes'})}
function chickButtonActive(){console.log('my function hit')}
function kevinButtonActive(){console.log('my function hit')}
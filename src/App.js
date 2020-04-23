import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList'
import Menu from './components/Menu'
import Card from './components/Menu'

class App extends React.Component {
  render(){
  return (
    < >
      <header>
        <Menu/>
      </header>
      <body>
        <CardList/>
      </body>
    </>
  );}
}

export default App;

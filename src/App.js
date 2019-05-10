import React, { Component } from 'react'
import './App.css'
import Navmenu from './components/navmenu/navmenu.js'
import Title from './components/Title/title.js'
class App extends Component {
  state = {  }
  render() { 
    return (
      <div className="App">
        <Title />
        <Navmenu />
      </div>
    );
  }
}
 
export default App;
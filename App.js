import React from 'react';
import './App.css';
import Die from './die'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      dice: [0]
    }
  }

  render() {
    return(
    <div className="App"> 
    <div className="App-Header">
    <img src="https://cdn11.bigcommerce.com/s-ir15vf9mmx/images/stencil/1280x1280/products/256/1120/01__35812.1571055249.jpg?c=2" alt=""></img>    
      <button onClick={this.addDie}>=</button>
      {
        this.state.dice.map((index) => {
          return <Die key={index}></Die>
        })
      }
      
    </div>
  </div>
  )
}

addDie = () => {
  const newDiceArray = this.state.dice
  newDiceArray.push(newDiceArray.length)
  this.setState({
    dice: newDiceArray
  })
}
}
export default App;

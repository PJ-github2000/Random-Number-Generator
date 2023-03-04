/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  changeNumber = () => {
    const {state} = this.state
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(preCount => ({count: randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="lower-box">
          <h1 className="heading">Random Number 🎲</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.changeNumber} className="button">
            Generate
          </button>
          <p className="value">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

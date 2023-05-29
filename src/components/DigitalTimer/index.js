// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {isPause: false}

  render() {
    const {isPause} = this.state

    return (
      <div className="container">
        <h1>Digital Timer</h1>
        <div className="container2">
          <div className="container3">
            <p>25:00</p>
          </div>
          <div>
            {isPause ? (
              <div className="cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play icon"
                />
                <p>Pause</p>
              </div>
            ) : (
              <div className="cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="start icon"
                />
                <p>Start</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer

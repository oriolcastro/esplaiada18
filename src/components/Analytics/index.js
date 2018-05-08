import React, { Component } from 'react'

class AnalyticsComponent extends Component {
  componentDidMount() {
    this.A2H()
  }

  A2H = () => {
    window.addEventListener('beforeinstallprompt', e => {
      e.userChoice.then(choiceResult => {
        ga('send', 'event', 'A2H', choiceResult.outcome)
        console.log('Information sended to analytics', optionalParams)
      })
    })
  }

  render() {
    return <div />
  }
}

export default AnalyticsComponent

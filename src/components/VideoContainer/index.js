import React from 'react'
import Iframe from 'react-iframe'

class Videocontainer extends React.Component {
  render() {
    return (
      <div className="videocontainer">
        <Iframe
          url="https://www.youtube.com/embed/Zxjcu17V2ZM?rel=0&amp;controls=0&amp;showinfo=0"
          width="100%"
          height="100%"
        />
      </div>
    )
  }
}
export default Videocontainer

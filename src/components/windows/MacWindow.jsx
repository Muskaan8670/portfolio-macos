import React from 'react'
import { Rnd } from 'react-rnd' 
import './macWindow.scss'

const MacWindow = ({children}) => {
  return (
    <div>
      <Rnd>
        <div className="window">
           <div className="nav">
             <div className="dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
             </div>
             <div className="title">nabihahasrat - zsh </div>
           </div>
           <div className="mainContent">
             {children}
           </div>
        </div>
     </Rnd>
    </div>
  )
}

export default MacWindow

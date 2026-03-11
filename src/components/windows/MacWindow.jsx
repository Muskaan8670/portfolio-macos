import React from 'react'
import { Rnd } from 'react-rnd' 
import './macWindow.scss'

const MacWindow = ({children,width='40vw',height='40vh'}) => {
  return (
    <div>
      <Rnd default={{width:width, height:height, x:200, y:100}}>
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

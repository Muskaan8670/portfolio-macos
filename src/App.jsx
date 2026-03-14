import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/Github'
import './github.scss'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'

function App() {
  const [windowState, setwindowState] = useState({
    github: false,
    note: false,
    pdf: false,
    spotify: false,
    cli: false
  })

  return (
    <main>
      <Nav/>
      <Dock windowState={windowState} setwindowState={setwindowState} />
      {windowState.github && <Github windowName='github' setWindowState={setwindowState} /> }
      {windowState.note && <Note windowName='note' setWindowState={setwindowState}/>}
      {windowState.pdf && <Resume windowName='pdf' setWindowState={setwindowState}/>}
      {windowState.spotify && <Spotify windowName='spotify' setWindowState={setwindowState}/>}
      {windowState.cli && <Cli windowName='cli' setWindowState={setwindowState}/>}
    </main>
  )
}

export default App

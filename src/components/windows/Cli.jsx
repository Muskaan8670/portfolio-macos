import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import './cli.scss'

const Cli = ({ windowName, setWindowState }) => {
  const commands = {
    about: {
      description: 'About this portfolio',
      fn: () => 'This is a macOS-style portfolio built with React, showcasing various components and windows.'
    },
    projects: {
      description: 'List projects',
      fn: () => `Projects:
- Portfolio Website: A macOS-inspired web portfolio
- CLI Emulator: Interactive terminal component
- GitHub Integration: Displays GitHub repositories
- Note App: Simple note-taking window
- Resume Viewer: Displays resume in a window`
    },
    contact: {
      description: 'Contact information',
      fn: () => `Contact:
- Email: your.email@example.com
- GitHub: github.com/yourusername
- LinkedIn: linkedin.com/in/yourprofile`
    },
    echo: {
      description: 'Echo back the input',
      fn: (args) => args.join(' ')
    },
    date: {
      description: 'Show current date',
      fn: () => new Date().toLocaleString()
    },
    whoami: {
      description: 'Show user info',
      fn: () => 'You are a visitor exploring this interactive portfolio.'
    }
  }

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <div className="cli-window">
            <Terminal
               commands={commands}
               welcomeMessage={'Welcome to the Portfolio Terminal! Type "help" to see available commands.'}
               promptLabel={'visitor@portfolio:~$'}
               promptLabelStyle={{ color: '#00ff00'}}
            />
        </div>
    </MacWindow>
  )
}

export default Cli

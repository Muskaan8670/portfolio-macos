import React, {useEffect,useState} from 'react'
import markdown from 'react-markdown'
import MacWindow from './MacWindow'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './note.scss'

const Note = ({ windowName, setWindowState }) => {
   const[ markDoown, setMarkdown ] = useState(null)
      useEffect(()=> {
        fetch('/note.txt')
          .then(res => res.text())
          .then(text => setMarkdown(text))
      }, [])
  return (
     <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="note-window">
        {markDoown ? <SyntaxHighlighter language="javascript" style={atelierDuneDark}>{markDoown}</SyntaxHighlighter> : <p>Loading...</p>}
      </div>
     </MacWindow>
  )
}

export default Note

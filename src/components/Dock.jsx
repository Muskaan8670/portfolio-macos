import React from 'react'
import './dock.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Dock = ({setwindowState }) => {
  return (
    <div>
      <footer className='dock'>
        <div
        onClick={()=>{window.open("https://calendar.google.com/calendar/","_blank")}} className='icon calendar'><img src="/dock-icons/calender.svg" alt="" /></div>
        <div 
        onClick={()=>{
           setwindowState(state => ({...state , github:true})) 
        }} className='icon github'><img src="/dock-icons/github.svg" alt="" /></div>
        <div
        onClick={()=>{window.open("https://www.linkedin.com/in/nabiha-hasrat-036b64376/","_blank")}} className='icon link'><img src="/dock-icons/link.svg" alt="" /></div>
        <div
        onClick={()=>{window.open("mailto:hasratnabiha@gmail.com","_blank")}} className='icon mail'><img src="/dock-icons/mail.svg" alt="" /></div>
        <div
         onClick={()=>{
           setwindowState(state => ({...state , note:true})) 
         }}
         className='icon note'><img src="/dock-icons/note.svg" alt="" /></div>
        <div
         onClick={()=>{
           setwindowState(state => ({...state , pdf:true})) 
        }}
         className='icon pdf'><img src="/dock-icons/pdf.svg" alt="" /></div>
        <div
         onClick={()=>{
           setwindowState(state => ({...state , spotify:true})) 
        }}
         className='icon spotify'><img src="/dock-icons/spotify.svg" alt="" /></div>
        <div
         onClick={()=>{
           setwindowState(state => ({...state , cli:true})) 
        }}
         className='icon cli'><img src="/dock-icons/cli.svg" alt="" /></div>
      </footer>
    </div>
  )
}

export default Dock

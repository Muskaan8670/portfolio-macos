import React from 'react'
import githubData from '../assets/github.json'
import MacWindow from './windows/MacWindow'

const GitCard = ({data = {id:1, image:'', title:'', description:'', tags:[], repolink:'', demolink:''}}) => {
    return <div className="card">
       <img src={data.image} alt="" />
       <h1>{data.title}</h1>
       <p className='desc'>{data.description}</p>
       <div className="tags">
        {data.tags.map(tag => <p className='tag'>{tag}</p>)}
       </div>
       <div className="urls">
         <a href={data.repolink}>Repository</a>
         { data.demolink && <a href={data.demolink}>Demo Link</a> }
       </div>
    </div>  
}
const Github = ({windowName, setWindowState}) => {
  return (
    <div>
      <MacWindow windowName={windowName} setWindowState={setWindowState}>
         <div className="cards">
            {githubData.map(project => {
               return <GitCard key={project.id} data={project}/>
            })}
         </div>
      </MacWindow>
    </div>
  )
}

export default Github

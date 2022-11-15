import React from 'react'
import data from '../assets/data.json';


const Timeline = () => {
  return (
    <div id="timeline">
        <div className='timelineBox'>
        
            {
                data.education.map((item,index)=>(
                    
                   
                    <TimelineItems heading={item.title} description={item.description} text={item.date} index={index} key={item.title}/>
                
                ))
            }


        </div>

    </div>

  )
}
const TimelineItems=({heading,text,index,description})=>{
    return (
    <div className={`timelineItems ${index%2===0?"leftTimeline" : "rightTimeline"}`}>
       
        <div>
            <h2>{heading}</h2>
            <p>{description}</p>
            <p>{text}</p>
        </div>
        
    </div>
    )
}

export default Timeline
import React from 'react'

const Testimonials = () => {
  return (
    <div id="testimonials">
        
        <h2>Testimonials</h2>
        <section>
            <TestimonialCard name={"MindRuby"} feedBack={" His skils are so good"}/>
            <TestimonialCard name={"MindRuby"} feedBack={" His skils are so good"}/>
         </section>
    </div>
  )
}
const TestimonialCard=({name,feedBack})=>{
    return (
        <article className='testimonialCard'>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt={name}/>
            <h4>{name}</h4>
            <p>{feedBack}</p>
        </article>
        

    )
}

export default Testimonials
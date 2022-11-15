import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai';


const Header = ({menuOpen ,setMenuOpen}) => {


  return (
    <>
    <nav>
      <NavContent />  
      </nav>
          <button className='navBtn' onClick={()=>setMenuOpen(!menuOpen)}>
          <AiOutlineMenu/>
        </button>
          </>
  )
};

 const NavContent=({setMenuOpen})=>{
    return (<>
    <h2>Mustafa.</h2>
    <div>
        <a href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
        <a href="#work"onClick={()=>setMenuOpen(false)}>Work</a>
        <a href="#timeline"onClick={()=>setMenuOpen(false)}>TimeLine</a>
        <a href="#services"onClick={()=>setMenuOpen(false)}>Tech. Skills</a>
        <a href="#testimonials"onClick={()=>setMenuOpen(false)}>Testimonials</a>
        <a href="#contact"onClick={()=>setMenuOpen(false)}>Contacts</a>
        
    </div>
    <a href="mailto:mustafaabdeali284@gmail.com"><button >Mail</button></a>

    
    </>)
}
export const HeaderPhone = ({setMenuOpen,menuOpen}) => {
  return (
    <div className={`navPhone ${menuOpen?"navPhoneComes":""}`}> 
   <NavContent setMenuOpen={setMenuOpen} />
    </div>
  )
}

export default Header
import React, { useRef } from 'react'
import {animate, motion} from 'framer-motion'
import TypeWriter from'typewriter-effect'
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import logo from '../assets/logo1.png'
const Home = () => {
    const clientCount=useRef(null);
    const projectsCount=useRef(null);
    const animationClientsCount=()=>{
        animate(0,1,{
            duration:1,
            onUpdate:(v)=>clientCount.current.textContent=v.toFixed()

        });
    }
    const animationProjectsCount=()=>{
        animate(0,10,{
            duration:2,
            onUpdate:(v)=>projectsCount.current.textContent=v.toFixed()

        });
    }

    const animation={
        h1:{
            initial:{
                x:"-100%",
                opacity:0,

            },
            whileInView:{
                x:"0",
                opacity:1,

            },
        },
        button:{
            initial:{
                y:"-100%",
                opacity:"0"
            },
            whileInView:{
                y:0,
                opacity:1,

            }

        }
    }
  return (
    <div id="home">
        <section>
            <div>
                <motion.h1 {...animation.h1}>
                Hi, I am <br/>Mustafa Gautampura Wala
                </motion.h1>

                <TypeWriter options={{
                    strings:["A Developer","A Designer","A Creator"],
                    autoStart:true,
                    loop:true,
                    cursor:"",
                    wrapperClassName:"typewriterpara"
                }}/>
                
                <div>
                <a href="mailto:mustafaabdeali284@gmail.com">Hire Me</a>
                <a href="#work">Projects <BsArrowUpRight/></a>
                </div>
                <article>
                <p>+<motion.span whileInView={animationClientsCount} ref={clientCount}>

                    </motion.span></p>
                <span>Clients Worldwide</span>    
                </article>
                
                <aside>
                <article>
                <p>+<motion.span whileInView={animationProjectsCount} ref={projectsCount}></motion.span></p>
                <span>projects Done</span>    
                </article>
                <article data-special>
                <p>Contact</p>
                <span>mustafaabdeali284@gmail.com</span>    
                </article>
                </aside>
            </div>
        </section>
               


        <section>
        <img src={logo} alt={"my logo"}/>
        </section>
        <BsChevronDown/>




    </div>
  )
}

export default Home
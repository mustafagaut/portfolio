import React,{useState} from 'react';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import {addDoc, collection} from 'firebase/firestore';
import { db } from '../fireBase';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [disableBtn, setDisableBtn] = useState(false);

    const animations={
        form:{
            initial:{
                x:"-100%",
                opacity:0,
            },whileInView:{
                x:0,
                opacity:1,
            },

        },
        button:{
            initial:{
                y:"-100%",
                opacity:0,
            },whileInView:{
                y:0,
                opacity:1,
            },
            transition:{
                delay:0.5,
            }

        }
    }
    
    const submitHandler=async(e)=>{
        e.preventDefault();
        const data={
            name,
            email,
            message,
        }
        console.log(data);
       try {
        setDisableBtn(true);
        await addDoc(collection(db,"contacts"),data);
        toast.success("Message Sent");
        setDisableBtn(false);
        setName("");
        setEmail("");
        setMessage("");
       } catch (error) {
        toast.error("Error");
        console.log(error);
        setDisableBtn(false);
        
       }

    }
  return (
    <div id ="contact">
        <section>
            <motion.form onSubmit={submitHandler} {...animations.form}>
                <h2>Contact Me</h2>
                <input type="name" placeholder='Your Name' required value={name} onChange={e=>setName(e.target.value)}/>
                <input type="email" placeholder='Your Email' required value={email} onChange={e=>setEmail(e.target.value)} />
                <input type="text" placeholder='Drop Your Message Here' value ={message} required onChange={e=>setMessage(e.target.value)}/>
                <motion.button type='Submit' 
                {...animations.button}
                className={disableBtn?'disableBtn': ""} 
                disabled={disableBtn}>
                    Send</motion.button>
               </motion.form>
        </section>
        <aside>
<img src={"https://github.com/meabhisingh/react-portfolio/blob/master/src/assets/vg.png?raw=true"}alt={"graphics"}/>
        </aside>
    </div>
  )
}

export default Contact
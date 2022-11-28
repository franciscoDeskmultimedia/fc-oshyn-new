import Image from 'next/image';
import Link from 'next/link';
import Button from './button';
import { motion } from "framer-motion"
import SubNav from './SubNav';
import { useState } from "react";



const Navigation = (props)=>{
    const [toggle,setToggle] = useState(-1)
    const container = {
        hidden:{
            opacity:0,
        },
        show:{
            opacity:1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }
    const itemAnimation = {
        hidden:{
            opacity:0,
            y:-20
        },
        show:{
            opacity:1,
            y:[-20, 0],
            transition:{
                duration: 0.3,
                ease: "linear"
            }        
        }
        
    }

    const manageToggle = (index)=>{
        if(toggle == index){
            setToggle(-1)
        }else{
            setToggle(index)
        }
        
    }
    return(
            <motion.nav  className=" max-w-7xl main-nav w-full flex h-40 items-center m-auto relative z-10 px-9 justify-between md:justify-end">
                <div className='logo w-1/5 min-w-max'>
                    <Link href='/'>
                        <Image src='/oshyn-logo.svg' alt='Oshyn logo' priority width={155} height={65}></Image>
                    </Link>
                    
                </div>
                <motion.ul initial='hidden' animate='show' variants={container} className='menu w-3/5 hidden md:flex'>
                    {props.navItems.map((item,index)=>{
                        return(
                            <motion.li onClick={()=>manageToggle(index)} variants={itemAnimation} key={index} className={`text-white px-3 pt-2 ${toggle == index ? 'toggle-active' : null }`}>
                                <Link href={item.url ? item.url : '#'}>{item.text}</Link>
                                { item.subnav ?
                                    <SubNav subnav={item.subnav} ></SubNav>
                                : null }
                            </motion.li>
                        )
                    })}
            
                    
                </motion.ul>
                <div className=' w-1/3'>
                    <Button url="https://google.com" type='secondary' >Ask a Question</Button>
                </div>
                
            </motion.nav>
        
    )
}

export default Navigation
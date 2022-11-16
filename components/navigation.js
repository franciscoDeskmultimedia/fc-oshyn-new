import Image from 'next/image';
import Link from 'next/link';
import Button from './button';
import { motion } from "framer-motion"


const Navigation = (props)=>{

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
    
    return(
            <motion.nav  className=" max-w-7xl main-nav w-full flex h-40 items-center m-auto relative z-10 md:px-0 px-9">
                <div className='logo w-1/5 min-w-max'>
                    <Link href='/'>
                        <Image src='/oshyn-logo.svg' alt='Oshyn logo' priority width={155} height={65}></Image>
                    </Link>
                    
                </div>
                <motion.ul initial='hidden' animate='show' variants={container} className='menu w-4/5 hidden md:flex'>
                    {props.navItems.map((item,index)=>{
                        return(
                            <motion.li variants={itemAnimation} key={index} className=' text-white px-3 pt-2'>
                                <Link href={item.url ? item.url : '#'}>{item.text}</Link>
                            </motion.li>
                        )
                    })}
            
                    
                </motion.ul>
                <Button url="https://google.com" type='secondary' >Text</Button>
            </motion.nav>
        
    )
}

export default Navigation
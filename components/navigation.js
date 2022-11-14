import Image from 'next/image';
import Link from 'next/link';
import Button from './button';


const Navigation = (props)=>{
    
    return(
        <nav className="main-nav w-full flex h-40 items-center px-4 max-w-7xl m-auto relative z-10">
            <div className='logo w-1/5'>
                <Link href='/'>
                    <Image src='/oshyn-logo.svg' alt='Oshyn logo' priority width={155} height={65}></Image>
                </Link>
                
            </div>
            <ul className='menu flex w-4/5'>
                {props.navItems.map((item,index)=>{
                    return(
                        <li key={index} className=' text-white px-3 pt-2'>
                            <Link href={item.url ? item.url : '#'}>{item.text}</Link>
                        </li>
                    )
                })}
                
                {/* <li className=' text-white px-3 pt-2'>
                    <Link href=''>Work</Link>
                </li>
                <li className=' text-white px-3 pt-2'>
                    <Link href=''>Blog</Link>
                </li>
                <li className=' text-white px-3 pt-2'>
                    <Link href=''>Ebook</Link>
                </li> */}
                
            </ul>
            <Button url="https://google.com" type='secondary' >Text</Button>
        </nav>
    )
}

export default Navigation
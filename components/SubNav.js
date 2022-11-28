import Image from "next/image";
import Button from "./button";
import Link from "next/link";


const SubNav = (props)=>{
    
    console.log(props.subnav)
    const blocks = props.subnav.blocksCollection.items;
    const subnavItems = props.subnav.subnavItemsCollection.items;
    return(
        <div className="subnav flex flex-wrap max-w-4xl w-[70vw]">
            <div className="subnav-featured-content md:w-64 md:block hidden">
                {blocks.map((item,index)=>{
                    if(item.__typename == 'ImageBlock'){
                        return(
                            <div key={index} className="subnav-featured-image">
                                <h3>{item.title}</h3>
                                <Image src={item.image.url} alt={item.image.title} width={item.image.width} height={item.image.height} ></Image>
                            </div>
                        )
                    }
                    if(item.__typename == 'CtaTextBlock'){
                        return(
                            <div key={index} className="subnav-featured-text">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                {item.ctaCollection.items.map((cta,index)=>{
                                    return(
                                        <Button key={index} url={cta.url} type='primary'>{cta.text}</Button>
                                    )
                                })}
                                
                            </div>
                        ) 
                    }
                   
                })}
            </div>
            <div className="subnav-links w-1 flex-1 p-10 text-black">
                <ul className="flex flex-wrap">
                    {subnavItems.map((item,index)=>{
                        return(
                            <li className=" w-full md:w-1/2 flex flex-wrap items-start" key={index}>
                                <Link className="flex flex-wrap items-start" href={item.link}>
                                    <div className="subnav__link-icon w-7">
                                        <Image src={item.icon.url} alt={item.icon.title} width={item.icon.width} height={item.icon.height}></Image>
                                    </div>
                                    <div className="subnav__link-data flex-1 pl-4">
                                        <p className=" font-bold">{item.title}</p>
                                        <p>{item.description}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        </div>
    )
}

export default SubNav
import { useState } from "react";
import LogoCarousel from "./LogoCarousel";

const TabSlider = (props) => {
    const tabs = props.tabs.sliderCollection.items;
    const [active, setActive] = useState(0);
    function toggleState(index){        
        setActive(index);
    } 
    return(
        <div className="tab-slider__inner max-w-7xl mx-auto md:px-0 flex bg-green-900 z-20 relative">
            <div className=" w-1/5">
                <div className="tabs">
                    {tabs.map((item,index)=>{
                        if(index == 0){
                            return(
                                <div key={index} className={`${index == active ? ' font-bold' : null }`} onClick={()=>toggleState(index)}>{item.title} </div>
                            )  
                        }else{
                            return(
                                <div key={index} className={`${index == active ? ' font-bold' : null }`} onClick={()=>toggleState(index)}>{item.title}</div>
                            )
                        }
                        
                    })}
                </div>
                <p>{props.tabs.description}</p>
            </div>
            <div className="tabs-logo__sliders">
                    {tabs.map((item,index)=>{
                        // console.log(item)
                        return(
                            <div className={`${index == active ? ' block' : ' hidden' }`}>
                                <LogoCarousel slider={item.logosCollection}></LogoCarousel>
                            </div>
                        )
                    })}
                    

            </div>
        </div>
    )
}

export default TabSlider;
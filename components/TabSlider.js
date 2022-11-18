import { useState } from "react";
import LogoCarousel from "./LogoCarousel";

const TabSlider = (props) => {
    const tabs = props.tabs.sliderCollection.items;
    const [active, setActive] = useState(0);
    function toggleState(index){        
        setActive(index);
    } 
    return(
        <div className="tab-slider__inner max-w-7xl mx-auto md:px-5 flex rounded-xl z-20 relative px-5 py-3">
            <div className=" w-1/5 ">
                <div className="tabs flex">
                    {tabs.map((item,index)=>{
                        if(index == 0){
                            return(
                                <div key={index} className={`${index == active ? ' font-bold tab-active text-white relative mr-2' : ' text-white mr-2' }`} onClick={()=>toggleState(index)}>{item.title} </div>
                            )  
                        }else{
                            return(
                                <div key={index} className={`${index == active ? ' font-bold tab-active text-white relative' : 'text-white' }`} onClick={()=>toggleState(index)}>{item.title}</div>
                            )
                        }
                        
                    })}
                </div>
                <p className=" mt-3 text-white">{props.tabs.description}</p>
            </div>
            <div className="tabs-logo__sliders w-4/5">
                    {tabs.map((item,index)=>{
                        return(
                            <div key={index} className={`${index == active ? ' block' : ' hidden' }`}>
                                <LogoCarousel key={index} slider={item.logosCollection}></LogoCarousel>
                            </div>
                        )
                    })}
                    

            </div>
        </div>
    )
}

export default TabSlider;
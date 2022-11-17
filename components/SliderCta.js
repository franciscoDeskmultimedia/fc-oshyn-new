import Button from "./button";
import Image from "next/image";

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';

const SliderCta = (props)=>{
    const slider = props.slides.slidesCollection.items;
    return(
        <div className="slider-cta__inner max-w-7xl mx-auto flex flex-wrap items-center">
            <Splide 
                options={{
                    arrows:false,
                    pagination:false,
                    type:'loop'
                }} 
                hasTrack={false} aria-label="My Favorite Images"
            >
                <SplideTrack>
                        {slider.map((item,index)=>{
                            return(
                                <SplideSlide key={index}>
                                    <div  className=" flex flex-wrap items-center">
                                        <div className=" w-full md:w-1/3 pr-11 mb-9">
                                            <h3 className=" text-6xl font-bold font-sora text-white mb-2">{item.title}</h3>
                                            <p className=" text-white mb-8">{item.description.json.content[0].content[0].value}</p>
                                            <Button type="primary" url="item.cta.url">{item.cta.text}</Button>
                                        </div>
                                        <div className=" w-full md:w-2/3">
                                            <Image src={item.image.url} width={item.image.width} height={item.image.height} alt={item.image.title} ></Image>
                                        </div>
                                    </div>
                                </SplideSlide>
                            )
                        })}
                </SplideTrack>  
            </Splide>
        </div>
    )
}

export default SliderCta;
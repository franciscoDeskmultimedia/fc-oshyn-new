import Image from 'next/image';
import Button from './button';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';

const HomepageSlider = (props)=>{
    return(
        <Splide 
            options={{
                arrows:false,
                pagination:false
            }} 
            hasTrack={false} aria-label="My Favorite Images">
            
            <SplideTrack>
                {props.slides.map((slide,index)=>{
                    return(
                        <SplideSlide key={index}>
                            <div className='home-slide flex flex-wrap'>
                                <div className='w-1/2 items-start flex flex-col justify-center pr-9 gap-7'>
                                    <h1 className=' font-bold font-sora text-white'>{slide.title}</h1>
                                    <p className=' text-white'>{slide.description.json.content[0].content[0].value}</p>
                                    <Button url={slide.cta.url} type='primary'>{slide.cta.text}</Button>
                                </div>
                                <div className=' w-1/2'>
                                    <Image alt={slide.image.title} src={slide.image.url} width={slide.image.width} height={slide.image.height} />
                                </div>
                            </div>
                            
                        </SplideSlide>
                    )
                })}
                
            </SplideTrack>  
        </Splide>
    )
}

export default HomepageSlider;
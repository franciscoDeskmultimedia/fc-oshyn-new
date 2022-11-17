import Image from 'next/image';
import Button from './button';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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
                    const body = documentToReactComponents(slide.description.json);
                    return(
                        <SplideSlide key={index}>
                            <div className='home-slide flex flex-wrap'>
                                <div className='md:w-1/2 w-full mb-5 md:mb-0 items-start flex flex-col justify-center pr-9 gap-7'>
                                    <h1 className=' font-bold font-sora text-white'>{slide.title}</h1>
                                    <div className=' text-white'>{ body }</div>
                                    <Button url={slide.cta.url} type='primary'>{slide.cta.text}</Button>
                                </div>
                                <div className='w-full md:w-1/2'>
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
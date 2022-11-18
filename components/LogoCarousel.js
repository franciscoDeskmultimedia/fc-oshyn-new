import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';

const LogoCarousel = (props)=>{
    console.log(props.slider.items)
    return(
        <div className=' logo-slider w-full'>
            <Splide 
                aria-label="Carousel" 
                hasTrack={false}
                options={{
                    perPage:6,
                    type : 'loop',
                    perMove:1,
                    gap:20,
                    pagination:false,
                    arrows:props.arrows ? true : false,
                    breakpoints: {
                        1024: {
                            perPage: 6,
                        },
                        767: {
                            perPage: 3,
                        },
                        640: {
                            perPage: 2,
                        },
                    }
                }}>
                    <SplideTrack>
                        {props.slider.items.map((item)=>{
                            return(
                                <SplideSlide>
                                    <Image src={item.url} width={item.width} height={item.height} alt={item.title}></Image>
                                </SplideSlide>
                            )
                            
                        })}
                        
                    </SplideTrack>
                </Splide>
        </div>
    )
}

export default LogoCarousel
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Image from 'next/image';
import Link from 'next/link';

// Default theme
import '@splidejs/react-splide/css';


const CardSlider = (props)=>{
    return (
        <div className="card-slider max-w-7xl mx-auto md:px-0 ">
            <Splide 
                aria-label="My Favorite Images" 
                options={{
                    perPage:2,
                    type : 'loop',
                    perMove: 1,
                    gap:20,
                    pagination:false,
                    arrows:false,
                    breakpoints: {
                        1024: {
                          perPage: 2,
                         
                        },
                        767: {
                          perPage: 2,
                      
                        },
                        640: {
                          perPage: 1,
                    
                        },
                      },
                }}>
                 {props.cardSlides.map((card,index)=>{
                    if(index % 2 == 0){
                        return (
                            <SplideSlide  key={index}  >
                                <div className=' shadow-md w-full p-10 h-full relative overflow-hidden'>
                                    <Image className=' mb-12' alt={card.featuredImage.title} src={card.featuredImage.url} width={384} height={322}></Image>
                                    <h3 className='font-sora'>{card.title}</h3>
                                    <p>{card.exerpt}</p>
                                    <Link className=' font-bold underline mt-4 block' href={`/services/${card.slug}`}>Learn More</Link>
                                    <div className="stripped-rectangle__decor">
                                        <Image  src='/stripped-rectangle.svg' alt='rectangle stripped decor' priority width={262} height={133}></Image>
                                    </div>
                                </div>
                            </SplideSlide>
                        )
                    }else{
                        return (
                            <SplideSlide key={index}>
                                <div className=' shadow-md w-full p-10 h-full '>
                                    <h3 className=' font-sora'>{card.title}</h3>
                                    <p>{card.exerpt}</p>
                                    <Link className=' font-bold underline mt-4' href={`/services/${card.slug}`}>Learn More</Link>
                                    <Image className=' mt-12 block' alt={card.featuredImage.title} src={card.featuredImage.url} width={384} height={322}></Image>
                                    <div className="stripped-circle__decor">
                                        <Image  src='/stripped-circle.svg' alt='dotted circle decor' priority width={410} height={410}></Image>
                                    </div>
                                </div>
                               
                                
                            </SplideSlide>
                        )
                    }
                    
                })}

            </Splide>
        </div>
    )
}

export default CardSlider;
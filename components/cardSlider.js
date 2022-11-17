import { Splide, SplideSlide } from '@splidejs/react-splide';

import Image from 'next/image';
import Link from 'next/link';

// Default theme
import '@splidejs/react-splide/css';


const CardSlider = (props)=>{
    return (
        <div className="card-slider max-w-7xl mx-auto md:px-0 px-9">
            <Splide 
                aria-label="My Favorite Images" 
                options={{
                    perPage:2,
                    type : 'loop',
                    perMove: 1,
                    gap:20,
                    pagination:false,
                    arrows:false
                }}>
                 {props.cardSlides.map((card,index)=>{
                    if(index % 2 == 0){
                        return (
                            <SplideSlide  key={index}  >
                                <div className=' shadow-md w-full p-10 h-full '>
                                    <Image className=' mb-12' alt={card.featuredImage.title} src={card.featuredImage.url} width={261} height={218}></Image>
                                    <h3 className='font-sora'>{card.title}</h3>
                                    <p>{card.exerpt}</p>
                                    <Link href={`/services/${card.slug}`}>Learn More</Link>
                                </div>
                            </SplideSlide>
                        )
                    }else{
                        return (
                            <SplideSlide key={index}>
                                <div className=' shadow-md w-full p-10 h-full '>
                                    <h3 className=' font-sora'>{card.title}</h3>
                                    <p>{card.exerpt}</p>
                                    <Link href={`/services/${card.slug}`}>Learn More</Link>
                                    <Image className=' mt-12' alt={card.featuredImage.title} src={card.featuredImage.url} width={261} height={218}></Image>
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
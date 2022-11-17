import { Splide, SplideSlide } from '@splidejs/react-splide';

import Image from 'next/image';
import Link from 'next/link';

// Default theme
import '@splidejs/react-splide/css';


const InsightCards = (props)=>{
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
                   
                        return (
                            <SplideSlide key={index}>
                                <div className=' w-full p-10 h-full '>
                                    <Link className='mt-4' href={`/blog/${card.slug}`}>
                                        <Image className=' mt-12 block' alt={card.featuredImage.title} src={card.featuredImage.url} width={261} height={218}></Image>
                                        <div className='author flex items-center mt-4 mb-2'>
                                            <Image className=' rounded-full' src={card.author.picture.url} width={card.author.picture.width} height={card.author.picture.height} alt={card.author.picture.title}></Image>
                                            <p>{ card.author.name }</p>
                                        </div>
                                        <h3 className=' font-sora'>{card.title}</h3>
                                    </Link>
                                </div>
                               
                                
                            </SplideSlide>
                        )
                    
                    
                })}

            </Splide>
        </div>
    )
}

export default InsightCards;
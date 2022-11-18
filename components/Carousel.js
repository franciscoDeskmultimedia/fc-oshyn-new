import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import Image from 'next/image';
import Link from 'next/link';
import Button from './button';

// Default theme
import '@splidejs/react-splide/css';


const Carousel = (props) => {
    return(
        <div className="carousel max-w-7xl mx-auto md:px-0 flex ">
            <Splide 
                aria-label="Carousel" 
                hasTrack={false}
                options={{
                    perPage:2,
                    type : 'loop',
                    perMove: 1,
                    gap:20,
                    pagination:false,
                    arrows:props.arrows ? true : false,
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
                <div className='w-full md:w-2/3 pr-9 order-2 md:order-1'>
                    <SplideTrack>
                        {props.cardSlides.map((card,index)=>{
                            if(props.type == 'service'){
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
                            }
                            if(props.type == 'post'){
                                return (
                                    <SplideSlide key={index}>
                                        <div className=' w-full p-10 h-full '>
                                            <Link className='mt-4' href={`/blog/${card.slug}`}>
                                                <Image className=' mt-12 block' alt={card.featuredImage.title} src={card.featuredImage.url} width={card.featuredImage.width} height={card.featuredImage.height}></Image>
                                                <div className='author flex items-center mt-4 mb-2'>
                                                    <Image className=' rounded-full' src={card.author.picture.url} width={card.author.picture.width} height={card.author.picture.height} alt={card.author.picture.title}></Image>
                                                    <p>{ card.author.name }</p>
                                                </div>
                                                <h3 className=' font-sora'>{card.title}</h3>
                                            </Link>
                                        </div>
                                    </SplideSlide>
                                )
                            }
                        })}
                    </SplideTrack>
                </div>

                <div className=' w-full md:w-1/3 order-1 md:order-2 md:mb-8 mb-8'>
                    {props.arrows ?
                        <div className="splide__arrows relative flex">
                            <button className=" splide__arrow--prev relative block"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"/></svg></button>
                            <button className=" splide__arrow--next relative block"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg></button>
                        </div>
                    : null}
                    <h2 className=' font-sora'>{props.title}</h2>
                    <p>{props.description}</p>
                    <div className='insight-cta flex flex-wrap mt-7'>
                      {props.cta ? 
                        props.cta.map((cta,index)=>{
                            return(
                            <div key={index} className='insight-cta__item mb-4 mr-3'>
                                <Button type='primary'  url={cta.url}>{cta.text}</Button>
                            </div>
                            )
                        }) : null}
                    </div>
                  </div>
            </Splide>
        </div>
    )
}

export default Carousel;
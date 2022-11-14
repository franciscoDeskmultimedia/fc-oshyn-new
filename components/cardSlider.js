import { Splide, SplideSlide } from '@splidejs/react-splide';

import Image from 'next/image';
import Link from 'next/link';

// Default theme
import '@splidejs/react-splide/css';


const CardSlider = (props)=>{
    console.log(props.cardSlides)
    return (
        <div className="card-slider">
            <Splide aria-label="My Favorite Images">
                 {props.cardSlides.map((card,index)=>{
                    if(index % 2 == 0){
                        return (
                            <SplideSlide key={index}>
                                <Image alt={card.featuredImage.title} src={card.featuredImage.url} width={card.featuredImage.width} height={card.featuredImage.height}></Image>
                                <h3>{card.title}</h3>
                                <p>{card.exerpt}</p>
                                <Link href={`/services/${card.slug}`}>Learn More</Link>
                                
                            </SplideSlide>
                        )
                    }else{
                        return (
                            <SplideSlide key={index}>
                                <h3>{card.title}</h3>
                                <p>{card.exerpt}</p>
                                <Link href={`/services/${card.slug}`}>Learn More</Link>
                                <Image alt={card.featuredImage.title} src={card.featuredImage.url} width={card.featuredImage.width} height={card.featuredImage.height}></Image>
                                
                            </SplideSlide>
                        )
                    }
                    
                })}

            </Splide>
        </div>
    )
}

export default CardSlider;

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Image from 'next/image';

const TestimonySlider = (props)=>{

    return(
        <div className="testimony-slider__inner max-w-7xl mx-auto  px-9 flex flex-wrap pt-12 md:pt-48 pb-12 md:pb-28 md:px-20 bg-[#010a27]">
            <div className="stripped-circle__decor hidden md:block">
                    <Image className=' max-w-[255px] h-auto'  src='/stripped-circle.svg' alt='dotted circle decor' priority width={410} height={410}></Image>
            </div>
            <div className="plus__decor hidden md:block">
                    <Image className=' max-w-[406px] h-auto'  src='/plus2.png' alt='dotted circle decor' priority width={410} height={410}></Image>
            </div>
            <div className='w-full md:w-1/3 relative'>
                <h3 className=' text-white font-sora text-h1'>
                    {props.title}
                </h3>
                <p className='text-white text-lg opacity-70 mt-5'>{props.description}</p>
            </div>
            <div className='w-full md:w-2/3 pt-28 md:pt-0'>
            <Splide 
                aria-label="Carousel" 
                hasTrack={false}
                options={{
                    perPage:1,
                    type : 'loop',
                    perMove: 1,
                    gap:10,
                    pagination:false,
                    arrows:true,
                    autoHeight:true
                }} >
                    <div className="splide__arrows relative flex md:pl-9">
                        <button className=" splide__arrow--prev relative block"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"/></svg></button>
                        <button className=" splide__arrow--next relative block"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg></button>
                    </div>
                    <div className='w-full pr-9 order-2 md:pl-9'>
                        <SplideTrack>
                            {props.slides.map((item,index)=>{
                                return(
                                    <SplideSlide key={index} >
                                        <div className='testimony-meta flex items-start'>
                                            <Image className=' max-w-[100px]  ' src={item.testimonyImage.url} alt={item.testimonyImage.title} width={item.testimonyImage.width} height={item.testimonyImage.height}></Image>
                                            <div className='testimony-data ml-5'>
                                                <p className='text-white font-bold'>{item.name}</p>
                                                <div className='testimony-title text-white max-w-xs'>
                                                    <p className=' font-bold'>{item.position}</p> {item.company ? <p>{item.company}</p> : null}
                                                </div>

                                            </div>
                                        </div>
                                        <p className=' text-white text-3xl mt-7 '>{item.testymony}</p>
                                    </SplideSlide>
                                )
                            })}
                        </SplideTrack>
                    </div>
            </Splide>
            </div>
        </div>
    )
}

export default TestimonySlider;
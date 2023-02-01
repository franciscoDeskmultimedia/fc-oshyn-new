import HomepageSlider from "./homepageSlider";
import Image from "next/image";
import TabSlider from "./TabSlider";
import Button from './button';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

 

const HomepageHero = (props)=> {
    return (
        <div className="homepage-hero__inner max-w-7xl mx-auto px-9 mt-10">
            <div className="home">
                <div className="dotted-circle__decor">
                    <Image  src='/dotted-circle.svg' alt='dotted circle decor' priority width={300} height={291}></Image>
                </div>
                <div className="stripped-circle__decor hidden md:block">
                    <Image  src='/stripped-circle.svg' alt='dotted circle decor' priority width={410} height={410}></Image>
                </div>
                <div className="stripped-rectangle__decor">
                    <Image  src='/stripped-rectangle.svg' alt='dotted circle decor' priority width={262} height={133}></Image>
                </div>
            </div>
            <div className="inner-homepage-hero max-w-7xl m-auto relative z-10" >
                {/* <HomepageSlider slides={props.slider}></HomepageSlider> */}
                {props.slider.map((slide,index)=>{
                    if(index == 1){
                        const body = documentToReactComponents(slide.description.json);
                        return(
                            // <div>test</div>
                            <div key={index} className='home-slide flex flex-wrap'>
                                <div className='md:w-1/2 w-full mb-5 md:mb-0 items-start flex flex-col justify-center pr-9 gap-7'>
                                    <h1 className=' font-bold font-sora text-white'>{slide.title}</h1>
                                    <div className=' text-white'>{ body }</div>
                                    <Button url={slide.cta.url} type='primary'>{slide.cta.text}</Button>
                                </div>
                                <div className='w-full md:w-1/2'>
                                    <Image 
                                        priority 
                                        alt={slide.image.title} 
                                        src={slide.image.url} 
                                        width={slide.image.width} 
                                        height={slide.image.height} 
                                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw" />
                                </div>
                            </div>
                        )
                    }
                    
                })}
                
            </div>

            {/* {props.tabSlider ? 
                <div className=" mt-9">
                    <TabSlider tabs={props.tabSlider}></TabSlider>
                </div>
            : null} */}
            
            
         </div>
    )
}

export default HomepageHero;
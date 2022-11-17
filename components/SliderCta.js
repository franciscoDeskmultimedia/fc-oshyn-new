import Button from "./button";
import Image from "next/image";

const SliderCta = (props)=>{
    console.log(props.slides.slidesCollection.items)
    const slider = props.slides.slidesCollection.items;
    return(
        
        <div className="slider-cta__inner max-w-7xl mx-auto flex flex-wrap items-center">
            {slider.map((item)=>{
                return(
                    <div className=" flex flex-wrap items-center">
                        <div className=" w-1/3 pr-11">
                            <h3 className=" text-6xl font-bold font-sora text-white mb-2">{item.title}</h3>
                            <p className=" text-white mb-8">{item.description.json.content[0].content[0].value}</p>
                            <Button type="primary" url="item.cta.url">{item.cta.text}</Button>
                        </div>
                        <div className=" w-2/3">
                            <Image src={item.image.url} width={item.image.width} height={item.image.height}></Image>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default SliderCta;
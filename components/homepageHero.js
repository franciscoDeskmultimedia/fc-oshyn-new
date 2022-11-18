import HomepageSlider from "./homepageSlider";
import Image from "next/image";
import TabSlider from "./TabSlider";

 

const HomepageHero = (props)=> {
    return (
        <div className="homepage-hero__inner max-w-7xl mx-auto px-9">
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
                <HomepageSlider slides={props.slider}></HomepageSlider>
            </div>

            {props.tabSlider ? 
                <div className=" mt-9">
                    <TabSlider tabs={props.tabSlider}></TabSlider>
                </div>
            : null}
            
            
         </div>
    )
}

export default HomepageHero;
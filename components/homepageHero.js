import HomepageSlider from "./homepageSlider";

 

const HomepageHero = (props)=> {
    return (
        <div className="homepage-hero min-h-screen -mt-40 pt-40 w-full bg-background pb-24">
            <div className="homepage-hero__inner max-w-7xl mx-auto md:px-0 px-9">
                <div className="home"></div>
                <div className="inner-homepage-hero max-w-7xl m-auto relative z-10" >
                    <HomepageSlider slides={props.slider}></HomepageSlider>
                </div>
            </div>
        </div>
    )
}

export default HomepageHero;
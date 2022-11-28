import Image from "next/image";


const BasicHero = (props)=> {
    return (
        <div className="basic-hero__inner max-w-7xl mx-auto px-9 mt-10">
            <div className="basic-hero__decor">
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
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            
            
         </div>
    )
}

export default BasicHero;
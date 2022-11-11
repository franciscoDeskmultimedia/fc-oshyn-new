import Link from 'next/link'

const Button = (props)=>{
    return(
        <Link className={`btn btn-cta button-type-${props.type} `} href={props.url} >{props.children}</Link>
    )
}

export default Button;

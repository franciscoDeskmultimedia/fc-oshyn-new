// import { useHubspotForm } from 'next-hubspot';

const HubspotForm = (props)=>{

    // const { loaded, error, formCreated } = useHubspotForm({
    //     portalId: props.portalId,
    //     formId: props.formId,
    //     target: '#hs-'+props.formId
    // });

    return(
        <>
            {/* <div id={`hs-${props.formId}`} ></div> */}
            <form className=" max-w-md m-auto" action="#" method="post">
                <input className=" block w-full " type="text" id="name" name="name" required />
                <label htmlFor='name'>Name *</label>
                <input className=" block w-full " type="text" id="company" name="Company"  required />
                <label htmlFor='company'>Company *</label>
                <input className=" block w-full " type="text" id="wea" name="wea"  required />
                <label htmlFor='wea'>Work Email Address *</label>
                <textarea className=" block w-full " id='message' name='message'></textarea>
                <label htmlFor='message'>Message</label>

                <button className="w-full" type="submit">Send Message</button>
            </form>
        </>
    )
}

export default HubspotForm;
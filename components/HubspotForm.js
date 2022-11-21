import { useHubspotForm } from 'next-hubspot';

const HubspotForm = (props)=>{

    const { loaded, error, formCreated } = useHubspotForm({
        portalId: props.portalId,
        formId: props.formId,
        target: '#hs-'+props.formId
    });

    return(
        <div id={`hs-${props.formId}`} />
    )
}

export default HubspotForm;

import { useState } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import HubspotForm from "./HubspotForm";

const TabSection = (props) =>{
    const [active,setActive] = useState(0)
    const tabsCollection = props.tabs.tabCollection.items;
    return(
        <div className="tab-section__inner max-w-7xl mx-auto flex flex-wrap items-center justify-center ">
            <div className="tabs-selector mb-8">
                <ul className=" flex flex-wrap gap-6 justify-center">
                    {tabsCollection.map((tab,index)=>{
                        return(
                            <li onClick={()=>setActive(index)} className={`${index == active ? 'tab-active font-bold' : '' } font-sora text-2xl`} key={index}>{tab.tabTitle}</li> 
                        )
                    })}
                </ul>
            </div>
            <div className="tab-content w-full">
                {tabsCollection.map((tabItem, index)=>{
                    if(tabItem.tab.__typename == 'Iframe' ){
                        return(
                            <div key={index} className={`${active == index ? ' block ': ' hidden '}`} dangerouslySetInnerHTML={{ __html: `${tabItem.tab.iframe}` }} ></div>
                        )
                    }
                    if(tabItem.tab.__typename == 'Content' ){
                        return(
                            // <div key={index} className={`${active == index ? ' block ': ' hidden '}`} >
                            //    {documentToReactComponents(tabItem.tab.content.json)}
                            // </div>
                            <>
                                <div className="meetings-iframe-container" dataSrc="https://www2.oshyn.com/meetings/oshyn/consult?embed=true"></div>
                                <script defer type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>

                            </>
                        )
                    }
                    if(tabItem.tab.__typename == 'HubspotForm' ){
                        return(
                            <div key={index} className={`${active == index ? ' block ': ' hidden '}`}  >
                               <HubspotForm portalId={tabItem.tab.portalId} formId={tabItem.tab.formId}></HubspotForm>
                            </div>
                        )
                    }
                    
                })}
            </div>
        </div>
    )
}

export default TabSection;
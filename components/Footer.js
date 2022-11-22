import Link from "next/link";
import Image from "next/image";

const Footer = ()=>{
    return(
        <div className="footer w-full bg-[#0e1633] py-20 px-10" >
            <div className="footer-inner max-w-7xl mx-auto flex flex-wrap">
                <div className=" md:w-3/12 w-full">
                    <Link href='/'>
                        <Image src='/oshyn-logo.svg' alt='Oshyn logo' priority width={155} height={65}></Image>
                    </Link>
                </div>
                <div className="footer-quick-links md:w-6/12 w-full flex flex-wrap">
                    <div className="footer-company-links text-white w-full md:w-4/12 pr-7">
                        <p className="font-sora text-xl">Our Company</p>
                        <ul className="text-white opacity-70 font-hind pt-6 text-sm">
                            <li className=" pb-6 font-hind"><Link href="/about">About</Link></li>
                            <li className=" pb-6"><Link href="/solutions">Solutions</Link></li>
                            <li className=" pb-6"><Link href="/work">Work</Link></li>
                            <li className=" pb-6"><Link href="/blog">Blog</Link></li>
                            <li className=" pb-6"><Link href="/ebooks">Ebooks</Link></li>
                            <li className=" pb-6"><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-services-links text-white w-full md:w-8/12 pr-7">
                        <p className=" font-sora text-xl">Our Services</p>
                        <ul className=" flex flex-wrap text-white opacity-70 pt-6 text-sm">
                            <li className="w-full md:w-1/2 pb-6"><Link href="/sitecore-services/build-sitecore-development">Build</Link></li>
                            <li className="w-full md:w-1/2 pb-6"><Link href="/sitecore-services/code-maintenance-enhance">Enhance &amp; Maintain</Link></li>
                            <li className="w-full md:w-1/2 pb-6"><Link href="/sitecore-services/sitecore-design-support">Design Support</Link></li>
                            <li className="w-full md:w-1/2 pb-6"><Link href="/sitecore-services/content-hub">Content Hub</Link></li>
                            <li className="w-full md:w-1/2 pb-6"><Link href="/sitecore-services/sitecore-devops">DevOps</Link></li>
                            <li className="w-full md:w-1/2 pb-6"><Link href="/sitecore-services/commerce">Commerce</Link></li>
                            <li className="w-full md:w-1/2 pb-6"><Link href="/solutions">Sitecore</Link></li>
                            <li className="w-full md:w-1/2 pb-6"><Link href="/sitecore-services/sitecore-marketing-boost">Marketing Boost</Link></li>
                            <li className="w-full md:w-1/2 pb-6"><Link href="/sitecore-services/upgrade-sitecore">Upgrade</Link></li>
                            <li className="w-full md:w-1/2 pb-6"><Link href="/sitecore-services/migrate-sitecore">Migrate</Link></li>
                            <li className="w-full md:w-1/2 pb-6"><Link href="/sitecore-services/technical-sitecore-audit">Technical Audit</Link></li>
                            <li className="w-full md:w-1/2 pb-6"><Link href="/sitecore-services/test-automation">Test Automation</Link></li>
                            <li className="w-full md:w-1/2 pb-6"><Link href="/sitecore-services/Content-Inventory">Content Inventory</Link></li>
                            <li className="w-full md:w-1/2 pb-6"><Link href="/solutions/optimizely">Optimizely</Link></li>
                        </ul>
                        
                    </div>
                    
                </div>
                <div className="footer-social md:w-3/12 w-full self-end">
                    <ul className="social-icons text-white flex gap-3 mb-5 items-center">
                        <li>
                            <Link className="newsletter-icon" href="https://twitter.com/Oshyn_Inc?lang=en">
                                <Image loading="lazy" width={25} height={25} src="/icon_twitter.svg"  alt="Twitter icon" />
                            </Link>
                        </li>
                        <li>
                            <Link className="newsletter-icon" href="https://www.linkedin.com/company/oshyn/">
                                <Image loading="lazy" width={25} height={25} src="/icon_linkedIn.svg"  alt="LinkedIn icon" />
                            </Link>
                        </li>
                        <li>
                            <Link className="newsletter-icon" href="https://www.facebook.com/oshyninc/">
                                <Image loading="lazy" width={25} height={25} src="/icon_facebook.svg"  alt="Facebook icon" />
                            </Link>
                        </li>
                        <li>
                            <Link className="newsletter-icon" href="https://www.glassdoor.com/Overview/Working-at-Oshyn-EI_IE259197.11,16.htm">
                                <Image loading="lazy" width={25} height={25} src="/icon_glassdoor.svg"  alt="Glassdoor icon" />
                            </Link>
                        </li>
                    </ul>
                    <ul className="company-meta text-white opacity-70 text-sm">
                        <li className="address flex gap-2 items-start">
                            <Image className=" min-w-[14px]" src='/icon_location.svg' width={14} height={20} alt='location'></Image>
                            <p>100 W. Broadway, Ste 330Long Beach, CA 90802</p>
                        </li>
                        <li className="phone flex gap-2 items-start mt-4" >
                            <Image className=" min-w-[14px]" src='/icon_phone.svg' width={14} height={20} alt='phone number'></Image>
                            <p>+1 (213) 483-1770</p>
                        </li>
                    </ul>
                </div>
                <div className=" w-full text-white opacity-70 text-sm flex justify-between mt-14 border-t border-white pt-4">
                    <div className="copyright">
                        <p>© 2022 Oshyn. All Rights Reserved.</p>
                    </div>
                    <div className="version">
                        <p>4.0.1.3590</p>
                    </div>
                    <div>
                        <Link href='#'>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
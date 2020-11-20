import React, { useRef } from 'react';
import { ImageGallaryComponent } from './Gallery';
import { AboutUsComponent } from './AboutUs';
import { TabsComponent } from './TabsComponent';
import { ContactUsForm } from './ContactUsForm';

export const SpicyXComponent = (props) => {
    const Home = useRef(null);
    const AboutUs = useRef(null);
    const Menu = useRef(null);
    const ContactUs = useRef(null);
    const handleOnClick = (data) => {
        try {
            const Name = eval(data);
            if (Name.current) {
                Name.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",

                })
            }
            return Name;
        } catch (e) {
            console.log("failed");
        }
    }
    return (
        <div className="parent-container">
            <ImageGallaryComponent ref={{ Home }} galleryData={props.galleryData} headerData={props.headerData} handleOnClick={handleOnClick} />
            <AboutUsComponent ref={{ AboutUs }} aboutUsData={props.aboutUsData} />
            <TabsComponent ref={{ Menu }} fireRequestOnLoad={props.fireRequestOnLoad} tabsData={props.tabsData} />
            <ContactUsForm ref={{ ContactUs }} contactFormData={props.contactFormData} submitContactForm={props.submitContactForm} />
        </div>
    )
}


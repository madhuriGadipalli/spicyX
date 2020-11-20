import React, { useState, useEffect } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './style.css';


export const AboutUsComponent = React.forwardRef((props, ref) => {
    const { AboutUs } = ref;
    const { aboutUsData } = props;
    const [count, updateCount] = useState(0);
    useEffect(() => {
        let interval = null;
        if (aboutUsData.images.length - 1 > count) {
            interval = setInterval(() => {
                updateCount(count => count + 1);
            }, 10000);
        } else {
            updateCount(0);
        }

        return () => clearInterval(interval);
    }, [count]);

    return <React.Fragment>
        <div ref={AboutUs} className="title-container">
            <div className="heading">{'Discover'}</div>
            <div className="subheading">{'About Us'}</div>
        </div>
        <div className="aboutus-container">
            <div className="left-container">
                <div className="description">{aboutUsData.description} </div>
                <ul>
                    {aboutUsData.list && aboutUsData.list.length > 0 && aboutUsData.list.map((item, key) => {
                        return <li key={key}>
                            {item.key}
                        </li>
                    })}
                </ul>
            </div>
            <div className="right-container">
                <img src={aboutUsData.images[count].url} />
            </div>
        </div>
    </React.Fragment>
}
)
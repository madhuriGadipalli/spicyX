import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './style.css';
import { HeaderComponent } from './Header';


export const ImageGallaryComponent = React.forwardRef((props, ref) => {

    return (
        <div className="imageGallery">
            <div className="sliderContainer">
                <HeaderComponent headerData={props.headerData} handleOnClick={props.handleOnClick} ref={ref} />
                <Carousel
                    autoPlay
                    interval="5000"
                    infiniteLoop
                    transitionTime="1000"
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    className="carouselContainer"
                >
                    {props.galleryData.map((item, key) => {
                        return (
                            <div>
                                <img src={item.imageUrl} />
                                <div className="legend">
                                    <h2 className="heading">{item.header}</h2>
                                    <h2 className="subheading">{item.subheader}</h2>
                                    <div className="desc">{item.Description}</div>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    );
}
)

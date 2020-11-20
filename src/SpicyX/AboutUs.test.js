import React from 'react';
import { shallow } from 'enzyme';
import { AboutUs } from './AboutUs';
let aboutUsData = {
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam minus aliquid, itaque illum assumenda repellendus dolorem, dolore numquam totam saepe, porro delectus, libero enim odio quo. Explicabo ex sapiente sit eligendi, facere voluptatum! Quia vero rerum sunt porro architecto corrupti eaque corporis eum, enim soluta, perferendis dignissimos, repellendus, beatae laboriosam.",
    list: [
        {
            key: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            key: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            key: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia."
        },
        {
            key: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            key: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            key: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            key: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia."
        },
    ],
    images: [
        {
            url: "https://www.free-css.com/assets/files/free-css-templates/preview/page237/spicyx/assets/img/about-us/abtus-img-2.png"
        },
        {
            url: "https://www.free-css.com/assets/files/free-css-templates/preview/page237/spicyx/assets/img/about-us/abtus-img-6.png"
        },
        {
            url: "https://www.free-css.com/assets/files/free-css-templates/preview/page237/spicyx/assets/img/about-us/abtus-img-4.png"
        },

        {
            url: "https://www.free-css.com/assets/files/free-css-templates/preview/page237/spicyx/assets/img/about-us/abtus-img-1.png"
        },
    ]
}

describe('AboutUs', () => {
    it('should mount without errors', () => {
        shallow(<AboutUs aboutUsData={aboutUsData} />);
    });
});

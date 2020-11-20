import { fireRequestOnLoad } from './Actions';
const axios = require('axios');
jest.mock('axios');




jest.mock("/api/breakfast", () => {
    const response = {
        "breakfast": [
            {
                "title": "English Breakfast",
                "imgSrc": "https://www.free-css.com/assets/files/free-css-templates/preview/page237/spicyx/assets/img/menu/item-1.jpg",
                "url": "https://www.free-css.com/free-css-templates",
                "price": "$15.85",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nulla aliquid praesentium dolorem commodi illo."
            },
            {
                "title": "English Breakfast",
                "imgSrc": "https://www.free-css.com/assets/files/free-css-templates/preview/page237/spicyx/assets/img/menu/item-1.jpg",
                "url": "https://www.free-css.com/free-css-templates",
                "price": "$15.85",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nulla aliquid praesentium dolorem commodi illo."
            },
            {
                "title": "Chines Breakfast",
                "imgSrc": "https://www.free-css.com/assets/files/free-css-templates/preview/page237/spicyx/assets/img/menu/item-2.jpg",
                "url": "https://www.free-css.com/free-css-templates",
                "price": "$11.95",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nulla aliquid praesentium dolorem commodi illo."
            },
            {
                "title": "Chines Breakfast",
                "imgSrc": "https://www.free-css.com/assets/files/free-css-templates/preview/page237/spicyx/assets/img/menu/item-2.jpg",
                "url": "https://www.free-css.com/free-css-templates",
                "price": "$15.85",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nulla aliquid praesentium dolorem commodi illo."
            },
            {
                "title": "Indian Breakfast",
                "imgSrc": "https://www.free-css.com/assets/files/free-css-templates/preview/page237/spicyx/assets/img/menu/item-1.jpg",
                "url": "https://www.free-css.com/free-css-templates",
                "price": "$15.85",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nulla aliquid praesentium dolorem commodi illo."
            },
            {
                "title": "Indian Breakfast",
                "imgSrc": "https://www.free-css.com/assets/files/free-css-templates/preview/page237/spicyx/assets/img/menu/item-1.jpg",
                "url": "https://www.free-css.com/free-css-templates",
                "price": "$15.85",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nulla aliquid praesentium dolorem commodi illo."
            }
        ]
    }
    return {
        getData: jest.fn(() => Promise.resolve(response))
    };
});
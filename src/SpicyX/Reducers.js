import { combineReducers } from "redux";

const initialData = {
    HeaderOption: ['Home', 'AboutUs', 'Menu', 'ContactUs']
}
const galleryData =
    [
        {
            imageUrl: "https://picsum.photos/700/400?img=1",
            header: "The Real",
            subheader: "Green foods",
            Description: "blablabla"
        },
        {
            imageUrl: "https://picsum.photos/700/400?img=2",
            header: "The Real",
            subheader: "Green foods",
            Description: "blablabla"
        },
        {
            imageUrl: "https://picsum.photos/700/400?img=3",
            header: "The Real",
            subheader: "Green foods",
            Description: "blablabla"
        }
    ]

const aboutUsData = {
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
const contactData = {
    address: {
        title: "Office Address",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia temporibus corporis ea non consequatur porro corrupti hic voluptatibus assumenda, doloribus.",
        phoneNo: "(850) 457 6688",
        email: "contact@markups.io",
        location: "368 St. Panama City, Florida, USA",
        timings: {

        }
    },
    fields: {
        yourName: '',
        email: '',
        subject: '',
        msg: ''
    },
    fieldsConfig: [
        { id: 1, label: 'Your Name', fieldName: 'yourName', type: 'text', placeholder: 'Your Name', isRequired: true, klassName: 'first-name-field' },
        { id: 2, label: 'Email Address', fieldName: 'email', type: 'email', placeholder: ' Your Email', isRequired: true, klassName: 'email-field' },
        { id: 3, label: 'subject', fieldName: 'subject', type: 'text', placeholder: 'subject', isRequired: true, klassName: 'last-name-field' },
        { id: 4, label: 'Message', fieldName: 'msg', type: 'textarea', placeholder: 'Write something.....', isRequired: true, klassName: 'message-field' }
    ]
}

export const headerData = (state = initialData, action) => {
    return state;
}

export const GalleryData = (state = galleryData, action) => {
    return state;
}
export const AboutUsData = (state = aboutUsData, action) => {
    return state;
}

export const tabsData = (state = {}, action) => {
    if (action.type = "FIREREQUEST") {
        let upDatedState = { ...state }
        upDatedState[action.tab] = action.response && action.response.data && action.response.data[action.tab];
        return upDatedState;
    }
    return state;
}

export const contactUsData = (state = contactData, action) => {
    return state;
}
export const CombineReducers = combineReducers({
    headerData,
    GalleryData,
    AboutUsData,
    tabsData,
    contactUsData
});
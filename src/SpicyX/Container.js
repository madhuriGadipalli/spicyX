import { connect } from 'react-redux';
import { SpicyXComponent } from './index';
import { fireRequestOnLoad, submitContactForm } from './Actions';

export const mapStateToProps = (state) => {
    return {
        headerData: state.headerData,
        galleryData: state.GalleryData,
        aboutUsData: state.AboutUsData,
        tabsData: state.tabsData,
        contactFormData: state.contactUsData
    }
}

export const mapDispatchtoAction = {
    fireRequestOnLoad: fireRequestOnLoad,
    submitContactForm: submitContactForm
}

export const ConnectJsx = connect(mapStateToProps, mapDispatchtoAction)(SpicyXComponent)
import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./style.css";


export const ContactUsForm = React.forwardRef((props, ref) => {
    const { ContactUs } = ref;
    const [formData, setFormData] = useState({});
    const handleFormSubmit = e => {
        props.submitContactForm(formData);
    };

    const handleChange = (e, field) => {
        let value = e.target.value;
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const { fieldsConfig, address } = props.contactFormData;
    return (
        <div ref={ContactUs} className="contact-form">
            <div className="title-container">
                <div className="heading">{'Get in touch'}</div>
                <div className="subheading">{'Contact Us'}</div>
            </div>
            <div className="contactUs">
                <div className="contactform-container">
                    <div>
                        <form action="#">
                            {fieldsConfig &&
                                fieldsConfig.map(field => {
                                    return (
                                        <React.Fragment key={field.id}>
                                            {field.type !== "textarea" ? (
                                                <React.Fragment>
                                                    <label>{field.label}</label>
                                                    <input
                                                        type={field.type}
                                                        className={field.klassName}
                                                        placeholder={field.placeholder}
                                                        value={field.name}
                                                        onChange={e => handleChange(e, field.fieldName)}
                                                    />
                                                </React.Fragment>
                                            ) : (
                                                    <React.Fragment>
                                                        <label>{field.label}</label>
                                                        <textarea className={field.klassName} placeholder={field.placeholder} onChange={e => handleChange(e, field.fieldName)} value={field.name} />
                                                    </React.Fragment>
                                                )}
                                        </React.Fragment>
                                    );
                                })}
                            <input type="submit" onClick={e => handleFormSubmit(e)} value="Submit" />
                        </form>
                    </div>
                </div>
                <div className="address">
                    <h3 className="add-title">{address.title}</h3>
                    <div className="add-desc">
                        <div className="add-desc">{address.description}</div>
                        <div className="add-desc">{address.phoneNo}</div>
                        <div className="add-desc">{address.email}</div>
                        <div className="add-desc">{address.location}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
)

//propTypes for the component
ContactUsForm.propTypes = {
    config: PropTypes.object.isRequired
};
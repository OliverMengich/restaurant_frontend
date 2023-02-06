import React from 'react';
import formStyles from './ContactMessage.module.css';
function ContactMessageComponent() {
    return (
        <>
            <form className={formStyles["form-container"]}>
                <div className={formStyles["form-input-body"]}>
                    <div className={formStyles.form_el}>
                        <label htmlFor="name">Name*</label>
                        <input type="text" id="name" />
                    </div>
                    <div className={formStyles.form_el}>
                        <label htmlFor="name">Email*</label>
                        <input type="text" id="name" />
                    </div>
                    <div className={formStyles.form_el}>
                        <label htmlFor="subject">Subject*</label>
                        <input type="text" required id="subject" />
                    </div>
                    <div className={formStyles.form_el}>
                        <label htmlFor="phoneno">PhoneNumber</label>
                        <input type="text" id="phoneno" />
                    </div>
                </div>
                <div className={formStyles.text_message}>
                    <label htmlFor="message">Message*</label>
                    <textarea name="message" required id="message"></textarea>
                </div>
                <div className={formStyles.form_action}>
                    <input type="submit" value="Submit Message" />
                </div>
            </form>
        </>
    );
}

export default ContactMessageComponent;
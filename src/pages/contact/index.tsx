import React from 'react';
import CenterFindComponent from '@/components/CenterFind/CenterFind.component';
import PageInfoComponent from '@/components/PageInfo/PageInfo.component';
import ContactMessageComponent from '@/components/ContactMessage/ContactMessage.component';
import FooterComponent from '@/components/footer/Footer.component';
const ContactUs = () => {
    return (
        <div>
            <PageInfoComponent path='contact' title='Contact Page' />
            <ContactMessageComponent/>
            <FooterComponent/>
        </div>
    );
};

export default ContactUs;
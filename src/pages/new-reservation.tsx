import React from 'react';
import PageInfoComponent from '@/components/PageInfo/PageInfo.component';
function Reservation() {
    return (
        <div>
            {/* <h1>This is a The Reservations Page</h1> */}
            <PageInfoComponent title='New Reservation' path='reservation' />
        </div>
    );
}

export default Reservation;
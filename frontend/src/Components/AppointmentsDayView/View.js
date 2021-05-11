import React from 'react';
import {View as ViewAppointment } from '../Appointment/View';

export const View = ({ id, appointments }) => {
    return(
        <div id={id}>
            {appointments.map((appointment, index) => {   
               return <ViewAppointment key={index} customer={appointment}/>
            })}
        </div>
    );
}
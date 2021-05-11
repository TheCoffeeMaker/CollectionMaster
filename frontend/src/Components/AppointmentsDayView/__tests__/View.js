import React from 'react';
import ReactDOM from 'react-dom';
import { View as AppointmentsDayView } from '../View';


describe('AppointmentsDayView', () => {

    let container;
    let appointmentsList;
    
    const render = component => ReactDOM.render(component, container);


    beforeEach(() => {
        container = document.createElement('div');
        appointmentsList = [
            { name: 'Alex', lastName:'Pop', phoneNumber:'00000'},
            { name: 'Pisica', lastName:'Andreea', phoneNumber:'00001'},
         ];
    })


    it('test the tests', () => {
        expect(1).toEqual(1);
    })

    it('should render the div with the right id', () => {
        render(<AppointmentsDayView id={'apointmentsDayView'} appointments={appointmentsList}/>);
        expect(container.querySelector('div#apointmentsDayView')).not.toBeNull();
    })

    it('should render name  from a list of appointments', () => {
        render(<AppointmentsDayView id={'apointmentsDayView'} appointments={appointmentsList}/>);
        expect(container.textContent).toMatch('Alex');
    })

    it('should render lastName  from a list of appointments', () => {
        render(<AppointmentsDayView id={'apointmentsDayView'} appointments={appointmentsList}/>);
        expect(container.textContent).toMatch('Alex');
    })

    it('should render from a list of appontsmens', () => {
        render(<AppointmentsDayView id={'apointmentsDayView'} appointments={appointmentsList}/>);
        expect(container.textContent).toMatch('Pop');
    })

    it('should render phoneMumber from a list of appointsmens', () => {
        render(<AppointmentsDayView id={'apointmentsDayView'} appointments={appointmentsList}/>);
        expect(container.textContent).toMatch('00000');
    })


    it('should render another name  from a list of appointments', () => {
        render(<AppointmentsDayView id={'apointmentsDayView'} appointments={appointmentsList}/>);
        expect(container.textContent).toMatch('Pisica');
    })

    it('should render another lastName  from a list of appointments', () => {
        render(<AppointmentsDayView id={'apointmentsDayView'} appointments={appointmentsList}/>);
        expect(container.textContent).toMatch('Andreea');
    })

    it('should render another phoneMumber from a list of appointsmens', () => {
        render(<AppointmentsDayView id={'apointmentsDayView'} appointments={appointmentsList}/>);
        expect(container.textContent).toMatch('00001');
    })
    

})
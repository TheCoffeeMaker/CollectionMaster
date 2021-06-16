
import React from 'react';
import ReactDOM from 'react-dom';
import { View as AppointmentView} from '../View';

describe('Appointment', () => {
    let customer;
    let container;
    const render = component => ReactDOM.render(component, container);

    beforeEach(() => {
        container = document.createElement('div');
    });

    it('tests the tests', () => {
        expect(1).toEqual(1);
    })

    it('renders the customers name', () => {
        customer = {name: 'Alex', lastName: 'Pop', phoneNumber:'1234567'};
        render(<AppointmentView customer={customer}/>)
        expect(container.textContent).toMatch('Alex');
    })

    it('renders another customer name', () => {
        customer = {name: 'Alina', lastName: 'Pop', phoneNumber:'1234567'};
        render(<AppointmentView customer={customer}/>)
        expect(container.textContent).toMatch('Alina');
    })

    it('renders the customers last name', () => {
        customer = {name: 'Alex', lastName: 'Pop', phoneNumber:'1234567'};
        render(<AppointmentView customer={customer}/>)
        expect(container.textContent).toMatch('Pop');
    })

    it('it another customer last name', () => {
        customer = {name: 'Florin', lastName: 'Berceam', phoneNumber:'092435'};
        render(<AppointmentView customer={customer}/>)
        expect(container.textContent).toMatch('Berceam');
    })

    it('renders the customers phone number', () => {
        customer = {name: 'Alex', lastName: 'Pop', phoneNumber:'1234567'};
        render(<AppointmentView customer={customer}/>)
        expect(container.textContent).toMatch('1234567');
    })

    it('renders another customer phone number', () => {
        customer = {name: 'Florin', lastName: 'Berceam', phoneNumber:'092435'};
        render(<AppointmentView customer={customer}/>)
        expect(container.textContent).toMatch('092435');
    })
});
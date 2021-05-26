import RestHelper from './RestHelper';

export const getCustomers = () =>  RestHelper.get('/customers');
export const getCustomer = (customer_id) => RestHelper.get(`/customers/${customer_id}`);
export const saveCustomer = (customer_id, data) => RestHelper.put(`/customers/${customer_id}`, data);
    


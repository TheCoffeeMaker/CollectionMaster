import RestHelper from './RestHelper';

export const getInvoices = () => RestHelper.get('/invoices');
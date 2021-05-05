import RestHelper from './RestHelper';

export const getSuppliers = () => RestHelper.get('/suppliers');
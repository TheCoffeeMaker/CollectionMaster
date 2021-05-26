import RestHelper from './RestHelper';

export const saveProduct = (productID, data) => RestHelper.put(`/products/${productID}`, data);
export const getProducts = () => RestHelper.get(`/products`);
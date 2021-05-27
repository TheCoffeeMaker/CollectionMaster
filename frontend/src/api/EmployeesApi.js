import RestHelper from './RestHelper';

export const saveEmployee = (employeeID, data) =>  RestHelper.put(`/employees/${employeeID}`, data);
export const getEmployess = () => RestHelper.get(`/employees`);
export const getEmployee = (employee_id) => RestHelper.get(`/employees/${employee_id}`);
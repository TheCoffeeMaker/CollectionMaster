import RestHelper from './RestHelper';

export const saveEmployee = (employeeID, data) =>  RestHelper.put(`/employees/${employeeID}`, data);
import React from 'react';
import { NavLink } from "react-router-dom";
import './index.scss';

const Sidebar = () => {
    return (
        <div className='sidebar-component'>
                <NavLink to='/customers'>Customers</NavLink>
                <NavLink to='/employees'>Empoyeees</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/invoices'>Invoices</NavLink>
                <NavLink to='/orders'>Orders</NavLink>
                <NavLink to='/suppliers'>Suppliers</NavLink>
        </div>
    );
}
export default Sidebar;
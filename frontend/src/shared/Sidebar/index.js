import React from 'react';
import { NavLink } from "react-router-dom";
import Search from '../../Components/Search';
import { SearchContext } from '../../Layout/MainContainer';
import './index.scss';

const Sidebar = () => {
    return (
        <SearchContext.Consumer>
            {context =>
            <div className='sidebar-component'>
                    <div className='search-container'>
                        <Search type="text" onChange={(text) => {context.setSearchText(text)}}/>
                    </div>
                    <NavLink to='/customers'>Customers</NavLink>
                    <NavLink to='/employees'>Empoyeees</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/invoices'>Invoices</NavLink>
                    <NavLink to='/orders'>Orders</NavLink>
                    <NavLink to='/suppliers'>Suppliers</NavLink>
            </div>}
        </SearchContext.Consumer>
    );
}
export default Sidebar;
import React from 'react';
import { NavLink } from "react-router-dom";
import Search from '../../Components/Search';
import { useTranslation  } from 'react-i18next';
import { SearchContext } from '../../Layout/MainContainer';
import './index.scss';

const Sidebar = () => {

    const { t } = useTranslation();

    return (
        <SearchContext.Consumer>
            {context =>
            <div className='sidebar-component'>
                    {/* <div className='search-container'>
                        <Search type="text" onChange={(text) => {context.setSearchText(text)}}/>
                    </div> */}
                    <NavLink to='/customers'>{t("customers")}</NavLink>
                    <NavLink to='/employees'>{t("employees")}</NavLink>
                    <NavLink to='/products'>{t("products")}</NavLink>
                    <NavLink to='/invoices'>{t("invoices")}</NavLink>
                    <NavLink to='/orders'>{t("orders")}</NavLink>
                    <NavLink to='/suppliers'>{t("suppliers")}</NavLink>
            </div>}
        </SearchContext.Consumer>
    );
}
export default Sidebar;
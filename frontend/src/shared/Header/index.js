import React, { useState} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useHistory } from "react-router-dom";
import { useTranslation  } from 'react-i18next';
import profilePhoto from '../../resources/alex.jpg';
import logo from '../../resources/logo.png';
import './index.scss';

const menuStatuses = {
    OPEN:'open',
    CLOSED:'closed'
};

const Header = () => {
    const history = useHistory();
    const { i18n }  = useTranslation();

    const [menuStatus, setMenuStatus] = useState(menuStatuses.CLOSED);

    const openMenu = () => {
        setMenuStatus(menuStatuses.OPEN);
    }

    const closeMenu = () =>  {
        setMenuStatus(menuStatuses.CLOSED);
    }

    const handleLogOut = () => {
      localStorage.removeItem('loggedIn');
      history.push('/');
    }

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
            <div className="app-header">
                <div className="login-container">
                    <img src={logo} alt="TheCoffeeMaker Logo"/>
                </div>
                <div className="profile-menu">
                        <div className="language-selector">
                            <select onChange={handleLanguageChange}>
                                <option>EN</option>
                                <option>RO</option>
                                <option>DE</option>
                            </select>
                        </div>
                    <div className="profile-picture">
                        <div className="image-container" onClick={openMenu}>
                            <img src={profilePhoto} alt='Profile'/>
                        </div>
                        {menuStatus === menuStatuses.OPEN ?
                            <ClickAwayListener onClickAway={closeMenu}>
                                <div className="menu">
                                    <div className="menu-item">View Profile</div>
                                    <div className="menu-item">Settings</div>
                                    <div className="menu-item" onClick={handleLogOut}>Log Out</div>
                                </div>
                            </ClickAwayListener> : null }
                    </div>
                    <div className="profile-menu-wrapper-info">
                        <div>Nicolae Alexandru</div>
                        <div>Super Admin</div>
                    </div>
                </div>
            </div>
    );
}

export default Header;
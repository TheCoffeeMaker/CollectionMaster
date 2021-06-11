import React, { useState} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useHistory } from "react-router-dom";
import { SearchContext } from '../../Layout/MainContainer';
import Search from '../../Components/Search';

import profilePhoto from '../../resources/alex.jpg';
import './index.scss';

const menuStatuses = {
    OPEN:'open',
    CLOSED:'closed'
};

const Header = () => {

    const [menuStatus, setMenuStatus] = useState(menuStatuses.CLOSED);
    const history = useHistory();

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


    return (
            <div className="app-header">
                <div className="profile-menu">
                    <div className="profile-picture">
                        <div className="image-container" onClick={openMenu}>
                            <img src={profilePhoto} alt='Profile Picture'/>
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
import React from 'react';
import './Header.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FaceIcon from '@material-ui/icons/Face';

const Header = () => {
    return (
        <>
            <div className="header">
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt="logo"
                />
                <div className="header__center">
                    <input type="text" />
                    <SearchOutlinedIcon/>

                </div>
                <div className='header__right'>
                    <p>Become a host</p>
                     <LanguageIcon /> 
                    <ExpandMoreIcon />
                    <FaceIcon/>
                </div>
            </div>





        </>

    )
}

export default Header;
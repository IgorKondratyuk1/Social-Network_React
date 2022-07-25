import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return(
        <header className={s.header}>
            <img alt='logo' src='https://chymebot.com/wp-content/uploads/2017/01/facebook-chat-logo-png-19.png' />
            <div className={s.login_block}>
                { props.isAuth 
                    ? <>
                        {props.login}
                        <button onClick={props.logout}>Logout</button>
                      </>
                    : <NavLink to={"/login"}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header; 
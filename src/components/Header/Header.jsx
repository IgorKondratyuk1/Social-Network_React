import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {

    const onLogout = async () => {
        await props.logout();
        window.location.href = '/';
    }

    return(
        <header className={s.header}>
            <img alt='logo' src='https://chymebot.com/wp-content/uploads/2017/01/facebook-chat-logo-png-19.png' />
            <div className={s.login_block}>
                { props.isAuth 
                    ? <>
                        {props.login}
                        <button onClick={onLogout}>Logout</button>
                      </>
                    : <NavLink to={"/login"}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header; 
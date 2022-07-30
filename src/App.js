import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { initializeApp } from "./redux/appReducer";
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/reduxStore";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <NavbarContainer />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/" element={<Navigate to={"/profile"} />} />
                        <Route path="/profile/">
                            <Route path=":userId" element={<ProfileContainer />} />
                            <Route path="" element={<ProfileContainer />} />
                        </Route>
                        <Route path="/dialogs/*" element={<DialogsContainer />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Login />} />
                    </Routes>
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return ({
        isInitialized: state.app.isInitialized
    });
}

let AppContainer = compose(
    connect(mapStateToProps, { initializeApp })
)(App);

const SocialNetworkApp = () => {
    return (    
        <Router>
            <React.StrictMode>
            <Provider store={store}>
                <AppContainer />
            </Provider>
            </React.StrictMode>
        </Router>
    );
}

export default SocialNetworkApp;
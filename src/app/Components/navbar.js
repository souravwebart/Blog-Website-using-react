import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSignedIn,
    selectUserData,
    setSearchInput,
    setSignedIn,
    setUserData,
} from "../../features/userSlice";

import '../css/Navbar.css';

const Navbar = () => {
    const [inputValue, setSearchInputValue] = useState();
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    };

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setSearchInput(inputValue));
    };

    return (
        <div className="navbar">
            <div className="col-lg-3">
                <h1 className="navbar__header">SouravBlog ✌️</h1>
            </div>

            <div className="col-lg-6">
                {isSignedIn && (
                    <div className="blog__search">
                        <input
                            className="search"
                            placeholder="Search for a blog"
                            value={inputValue}
                            onChange={(e) => setSearchInputValue(e.target.value)}
                        />
                        <button className="submit" onClick={handleClick}>
                            Search
                        </button>
                    </div>
                )}
            </div>

            <div className="col-lg-3">
                {isSignedIn ? (
                    <div className="navbar__user__data">
                        <Avatar
                            className="user"
                            src={userData?.imageUrl}
                            alt={userData?.name}
                        />
                        <h1 className="signedIn">{userData?.givenName}</h1>
                        <GoogleLogout
                            clientId="57529085775-fk8rn8hren1q8o5ja2idq4m7hug5aong.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <button
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    className="logout__button"
                                >
                                    Logout 😦
                                </button>
                            )}
                            onLogoutSuccess={logout}
                        />
                    </div>
                ) : (
                    <h1 className="notSignedIn">User not available 😞</h1>
                )}

            </div>
        </div>
    );
};

export default Navbar;
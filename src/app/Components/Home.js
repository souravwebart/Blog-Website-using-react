import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSignedIn,
    setSignedIn,
    setUserData,
} from "../../features/userSlice";
import '../css/Home.css';


const Home = () => {
    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();
    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    return (
        <div className="home__page col-lg-12" style={{ display: isSignedIn ? "none" : "" }}>
                    {!isSignedIn ? (
                        <div className="login__message">
                            <img src="./img/1.png" alt="login"></img>
                            <h1>Welcome to Sourav Blog!</h1>
                            <p>
                                We provide high quality online resource for reading blogs. Just sign
                                up and start reading some quality blogs.
                            </p>
                            <GoogleLogin
                                clientId="813667768953-kcu6jfp1226qa71lvtrd12v2mk7hjdcu.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <button
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        className="login__button"
                                    >
                                        Login with Google
                                    </button>
                                )}
                                onSuccess={login}
                                onFailure={login}
                                isSignedIn={true}
                                cookiePolicy={"single_host_origin"}
                                
                                
                            />
                        </div>
                    ) : (
                        ""
                    )}
        </div>
    );
};

export default Home;
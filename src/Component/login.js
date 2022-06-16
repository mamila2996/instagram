import React from "react";
//import { FaFacebook } from "react-icons/fa";
import image1 from "../images/smartphone.png";
import fbimage from "../images/logofb.ico";
import appstore from "../images/appstore.png";
import playstore from "../images/playstore.png";
import { Link } from "react-router-dom";
function Loginpage() {
    return (
        <div className="backgroundC">
            <div className="coponentDisplay">
                <div className="displayMobile mt-5">
                    <img src={image1} className="smartPhoneImage" alt="smartphone" />
                </div>
                <div className="loginsecandsignup">
                    <div className="loginSection mt-4 mb-2 border loginSectionBg">
                        <h1 className="display-5 text-center text-dark fw-bold mt-4">Instagram</h1>
                        <form action="">
                            <div class="mb-2 mt-5 text-center">
                                <label for="" class="visually-hidden">Email address</label>
                                <input type="email" class="" placeholder="Phone number, username, or email" />
                            </div>
                            <div class="mb-3 text-center">
                                <label for="exampleInputPassword1" class="form-label visually-hidden">Password</label>
                                <input type="password" class="" placeholder="Password" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-4 d-grid tex-center loginDiv">
                                <button type="submit" class="btn btn-primary btn-sm disabled fw-bold text-light">Log In</button>
                            </div>
                            <div class="line-3 mb-4">
                                <hr className="lines" />
                                <p className="pfont mt-3">OR</p>
                                <hr className="lines" />
                            </div>
                            <div className="loginwith">
                                <img src={fbimage} alt="logoicon" />
                                <p className="loginwithfb"><a>Log in with Facebook</a></p>
                            </div>
                            <div className="forgotPass">
                                <p className="forgotfont"><a href="#">Forgot Password?</a></p>
                            </div>
                        </form>
                    </div>
                    <div className="signupsection border">
                        <p className="text-center mt-3 donthave">Don't have an account?</p>
                        <Link className="signuplink" to="/signup">Sign up</Link>

                    </div>
                    <div className="text-center mt-3 getapp">
                        <p>Get the app.</p>
                    </div>
                    <div className="text-center storeimages">
                        <a href="https://apps.apple.com/us/app/instagram/id389801252"><img src={appstore} height={42} width={150} alt="appstorepic" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en&gl=US"><img src={playstore} height={42} width={150} alt="playstore" /></a>
                    </div>
                </div>



            </div>
        </div>

    );

}
export default Loginpage;
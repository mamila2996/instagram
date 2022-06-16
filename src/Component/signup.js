import React from "react";
import appstore from "../images/appstore.png";
import playstore from "../images/playstore.png";
import { Link } from "react-router-dom";

function Signuppage() {
    return (
        <div className="signuppage">
            <div className="">
                <div className="form-section border text-center mb-2 mt-5">
                    <h1 className="display-5 text-center text-dark fw-bold mt-4">Instagram</h1>
                    <h5 className="Sgnup-info-display text-center text-secondary text-gradient mt-3 mb-3">Sign up to see photos and videos from your friends. </h5>

                    <div class="mb-4 d-grid tex-center loginDiv">
                        <button type="submit" class="btn btn-primary btn-sm fw-bold text-light">Log in with Facebook</button>
                    </div>
                    <div class="line-3 mb-4">
                        <hr className="lines" />
                        <p className="pfont mt-3">OR</p>
                        <hr className="lines" />
                    </div>


                </div>
                <div className="signupsection border">
                    <p className="text-center mt-3 donthave">Have an account?</p>
                    <Link className="signuplink" to="/">Log in</Link>

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

    );
}
export default Signuppage;
import React from "react";

function InstagramPage() {
    return (
        <div className="backgroundC">
            <div className="coponentDisplay">
                <div className="displayMobile mt-5">
                    <img src="./images/smartphone.png" className="smartPhoneImage" alt="smartphone" />
                </div>

                <div className="loginSection mt-5 border loginSectionBg">
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
                        <div class="line-3">
                            <hr className="lines"/>
                            <p className="fs-xxl">OR</p>
                            <hr className="lines"/>   
                            
                        </div>


                    </form>
                </div>
            </div>
        </div>

    );

}
export default InstagramPage;
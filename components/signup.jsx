import React, { useState, useEffect } from "react";
import '../prettify.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from "axios";

function Signup() {

    const handleGithubClick = () => {
        console.log('handlegithub clicked!')
        fetch('/auth')
        .then((data) => console.log(data))
        .catch((err) => console.log('err', err))
            // .then(() => next())
            // .catch((err) => next(err))
    };

    return (
        <form>
            <h1 className="loginheader">Sign Up</h1>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter email" />
                <div className="separate"></div>
                <input type="password" className="form-control" placeholder="Enter username" />
                <div className="separate"></div>
                <input type="email" className="form-control" placeholder="Enter password" />
                <div className="separate"></div>
                <input type="password" className="form-control" placeholder="Re-enter password" />
                <div className="separate"></div>
                <button type="submit" className="btn btn-primary btn-large w-100">Sign Up</button>
                <div className="separate"></div>
            </div>
            <p className="or">OR</p>
            <div className="form-group">
                <Link to="/auth">
                    <button type="button" className="btn btn-warning btn-large w-100">
                        Sign up with GitHub 
                    </button>
                </Link>
                <div className="separate"></div>

                <button type="button" className="btn btn-warning btn-large w-100" onClick={handleGithubClick()}>
                    Placeholder for Google OAuth
                </button>

                <div className="separate"></div>
            </div>
            <div className="separate"></div>
            <p className="forgot-password text-right">
                Already have an account? | <Link to="/">Log in here.</Link>
            </p>
        </form>
    );
}


export default Signup;
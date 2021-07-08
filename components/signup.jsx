import React, { Component } from "react";
import '../prettify.scss';
import axios from 'axios';

class Signup extends Component {

    // handleGithubClick = () => {
    //     axios.get('/auth')
    //         .then(() => next())
    // }

    render() {
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
                    <input type="password" className="form-control" placeholder="Renter password" />
                    <div className="separate"></div>
                    <button type="submit" className="btn btn-primary btn-large w-100">Sign Up</button>
                    <div className="separate"></div>
                </div>
                <p className="or">OR</p>
                <div className="form-group">
                    <button type="button" className="btn btn-warning btn-large w-100">Sign up with GitHub OAuth</button>
                    <div className="separate"></div>
                    <button type="button" className="btn btn-warning btn-large w-100">Placeholder for Google OAuth</button>
                    <div className="separate"></div>
                    <div className="separate"></div>
                </div>
                <div className="separate"></div>
                <div className="separate"></div>
                <div className="separate"></div>
                <p className="forgot-password text-right">
                    Already have an account? | <a href="#">Log in here.</a>
                </p>
            </form>
        );
    }
}


export default Signup;
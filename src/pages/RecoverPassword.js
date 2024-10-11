import React from "react";
import LoginSlider from "../Component/LoginSlider";
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { UserOctagon } from 'iconsax-react';
import { Link } from "react-router-dom";

const RecoverPassword = () => {

    return (
        <div className="login">
            <div className="container-fluid">
                <div className="row" style={{ minHeight: "100vh" }}>
                    <div className="col-lg-6 col-md-6 col-sm-12 pl pr">
                        <LoginSlider />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 pl pr">
                        <div className="loginText">
                            <div className="logo">
                                <img src="./image/logo.png" alt="logo" />
                            </div>
                            <div className="textSection">
                                <h2>Recover Password?</h2>
                                <p>Good supply chain management keeps companies out of the headlines and away from expensive recalls and lawsuits.</p>
                                <div className="formSection">
                                    <div className="formInput">
                                        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                            <InputLabel htmlFor="input">Business Email</InputLabel>
                                            <FilledInput
                                                id="input" type="email"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <UserOctagon />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </div>
                                    <Link to="/verify-OTP"><button>Send OTP</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecoverPassword;
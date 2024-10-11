import React from "react";
import { Lock1, UserOctagon, Message, Call } from 'iconsax-react';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Link } from "react-router-dom";

const Reg = () => {
    return (
        <>
            <div className="loginText  customTopBottomSpacing">
                <div className="logo">
                    <img src="./image/logo.png" alt="logo" />
                </div>
                <div className="textSection">
                    <h2>Admin Login</h2>
                    <p>Good supply chain management keeps companies out of the headlines and away from expensive recalls and lawsuits.</p>
                    <div className="formSection">
                        <div className="formInput">
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                <InputLabel htmlFor="input">Full Name</InputLabel>
                                <FilledInput
                                    id="input"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <UserOctagon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>


                        <div className="formInput">
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                <InputLabel htmlFor="input">Business Email</InputLabel>
                                <FilledInput
                                    id="input"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Message />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>


                        <div className="formInput">
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                <InputLabel htmlFor="input">Mobile Number</InputLabel>
                                <FilledInput
                                    id="input"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Call />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>

                        <div className="formInput">
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                <FilledInput id="filled-adornment-password" endAdornment={
                                    <InputAdornment position="end">
                                        <Lock1 />
                                    </InputAdornment>
                                }
                                />
                            </FormControl>
                        </div>
                        <div className="formInput">
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
                                <FilledInput id="filled-adornment-password" endAdornment={
                                    <InputAdornment position="end">
                                        <Lock1 />
                                    </InputAdornment>
                                }
                                />
                            </FormControl>
                        </div>


                        <Link to="/SuccessPage">
                        <button>Yes, sign me up!</button>
                        </Link>
                        <span>Already have an account?<Link to="/"> Login</Link></span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Reg;

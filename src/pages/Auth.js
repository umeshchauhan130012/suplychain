import React, {useState, useEffect} from "react";
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Lock1, UserOctagon } from 'iconsax-react';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/userAuth";
import LoginSlider from "../Component/LoginSlider";
import { toast } from 'react-toastify';

const Auth = () => {

    const dispatch = useDispatch();
    const status = useSelector((state) => state);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState('admin');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const {register, handleSubmit, formState: {errors}, } = useForm({defaultValues: {email: '', password: '',}});

    if(errors === null) {
        setLoader(false);
    }

    const onSubmit = (data) => {
        setLoader(true);
        let apiData = {
            email: data.email,
            password: data.password,
            role: value,
        };
        dispatch(userLogin(apiData));
    };

    useEffect(() => {
        if (status.login.data !== "") {
            if (status.login.data.status === 200) {
                setTimeout(() => {
                    let path = `/dashboard`;
                    navigate(path);
                    window.location.reload();
                  }, 2500);
                
            } else {
                if (status.login.data.response != null) {
                toast.error(status.login.data.response.data.error ? status.login.data.response.data.error : status.login.data.response.data,{
                    position: "bottom-right",
                    theme: "colored",
                  });
                  setLoader(false);
                }else{
                    toast.error(status.login.data.message,{
                        position: "bottom-right",
                        theme: "colored",
                    });
                    setLoader(false);
                    }
                }
            }
        }, [status]);


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
                                <h2>Admin Login</h2>
                                <p>Good supply chain management keeps companies out of the headlines and away from expensive recalls and lawsuits.</p>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="formSection">
                                        <div className="formInput">
                                            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                                <InputLabel htmlFor="input">Business Email</InputLabel>
                                                <FilledInput 
                                                    id="outlined-error-helper-text"
                                                    type="text" 
                                                    name="email"
                                                    {...register("email", {required: "required", pattern: /\S+@\S+\.\S+/})}
                                                    endAdornment={
                                                    <InputAdornment position="end">
                                                        <UserOctagon />
                                                    </InputAdornment>
                                                    } 
                                                />
                                            </FormControl>
                                            {errors.email && errors.email.type === "required" && (
                                            <label className="error-message">This is required field</label>
                                            )}
                                            {errors.email && errors.email.type === "pattern" && (
                                            <label className="error-message">Enter a valid email</label>
                                            )}
                                        </div>
                                        <div className="formInput">
                                            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                                <FilledInput 
                                                    type={showPassword ? 'text' : 'password'} 
                                                    name="password"
                                                    {...register("password", {required: "required", minLength: 5})}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                                                {showPassword ? <Lock1 /> : <Lock1 />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                                {errors.password && errors.password.type === "required" && (
                                                <label className="error-message">This is required field</label>
                                                )}
                                                {errors.password && errors.password.type === "minLength" && (
                                                <label className="error-message">
                                                Minimum characters 5 required
                                                </label>
                                                )}
                                            </FormControl>
                                        </div>
                                        <div className="formInput bulletssel">
                                            <FormControl>
                                                <RadioGroup
                                                    type="radio"
                                                    name="controlledUser"
                                                    value={value}
                                                    onChange={handleChange}
                                                >
                                                    <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                                                    <FormControlLabel value="super admin" control={<Radio />} label="Super Admin" />
                                                </RadioGroup>
                                            </FormControl>
                                            {
                                                value && value.length > 0 ? '' : <label className="error-message">This is required field</label>
                                            }
                                            
                                        
                                        </div>
                                        <h3><Link to="/recover-password">Recover Password?</Link></h3>
                                        <div className="buttonholder">
                                        <button type="submit">Login {loader && loader ? <img src="./image/button-loader.gif" alt="loader" /> : '' }</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;
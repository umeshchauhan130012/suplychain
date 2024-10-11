import React, { useEffect, useState } from "react";
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Lock1, UserOctagon, Message, Location } from 'iconsax-react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { useForm } from "react-hook-form";
import { country, role, states, userSignup } from "../redux/actions/userAuth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const CreateNewUser = () => {

    const dispatch = useDispatch();
    const status = useSelector((state) => state);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [selectCountry, setSelectCountry] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [countryName, setCountryName] = useState('');
    const [stateName, setStateName] = useState('');
    const [state, setState] = useState('');
    const [userRole, setUserRole] = useState('');


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const {register, handleSubmit, formState: {errors}, reset} = useForm({defaultValues: {name: '', gender: '', password: '', address: '', countryCode: '', email: '', phone: '', dateOfBirth: '', role: '', profileImageId: '', state: '', country: '',}});
    const onSubmit = (data) => {
        let apiData = {
            name: data.name,
            gender: "male",
            password: data.password,
            address: data.address,
            countryCode: data.countryCode,
            email: data.email,
            phone: data.phone,
            dateOfBirth: "1998-10-05",
            role: data.role,
            profileImageId: 1,
            state: data.state,
            country: countryName,
        };
        // console.log(apiData);
        dispatch(userSignup(apiData));
    };

    

    useEffect(() => {
        const apiData = {};
        dispatch(country(apiData));
    }, []);

    useEffect(() => {
        const apiData = {};
        dispatch(role(apiData));
    }, []);

    useEffect(() => {
        const apiParams = {
            apiParams: 1,
        };
        dispatch(states(apiParams));
    }, []);

    useEffect(() => {
        if (status.country.data !== "") {
          if (status.country.data.status === 200) {
            setSelectCountry(status.country.data.data);
          }
        }
      }, [status]);

    //   console.log(status.country.data);


      useEffect(() => {
        if (status.signUp.data !== "") {
            if (status.signUp.data.status === 201) {
                toast.success("Successfully Registered", {
                    position: "bottom-right",
                    theme: "colored",
                  });
                reset();
                setState('');
                setStateName('');
                setTimeout(() => {
                    let path = `/dashboard/successfully-add-new`;
                    navigate(path);
                    window.location.reload();
                  }, 2000);
            }
        } else {
            if (status.signUp.data.response != null) {
            toast.error(status.signUp.data.response.data.error ? status.signUp.data.response.data.error : status.signUp.data.response.data,{
                position: "bottom-right",
                theme: "colored",
              });
            }else{
                toast.error(status.signUp.data.message,{
                    position: "bottom-right",
                    theme: "colored",
                });
                }
            }
      }, [status]);

      useEffect(() => {
        if (status.states.data !== "") {
            if (status.states.data.status === 200) {
                setStateName(status.states.data.data);
            }
        } else {
            if (status.states.data.response != null) {
            toast.error(status.states.data.response.data.error ? status.states.data.response.data.error : status.states.data.response.data,{
                position: "bottom-right",
                theme: "colored",
              });
            }else{
                toast.error(status.states.data.message,{
                    position: "bottom-right",
                    theme: "colored",
                });
                }
            }
      }, [status]);

      useEffect(() => {
        if (status.userRole.data !== "") {
            if (status.userRole.data.status === 200) {
                setUserRole(status.userRole.data.data.userRoles);
            }
        } else {
            if (status.userRole.data.response != null) {
            toast.error(status.userRole.data.response.data.error ? status.userRole.data.response.data.error : status.userRole.data.response.data,{
                position: "bottom-right",
                theme: "colored",
              });
            }else{
                toast.error(status.userRole.data.message,{
                    position: "bottom-right",
                    theme: "colored",
                });
                }
            }
      }, [status]);

      console.log(userRole);

    return (
        <>
            <div className="SuccessADDbg">
                <h6>Create New User</h6>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="formSection">
                        <div className="formInput formInputSelect">
                            <TextField
                                id="filled-select-role"
                                select
                                label="Select Role"
                                defaultValue="--Select--"
                                name="role"
                                {...register("role", {required: "required",})}
                                SelectProps={{ native: true, }} variant="filled" >
                                    <option key="" value=""></option>
                                {userRole && userRole.map((option, key) => (
                                    <option key={key} value={option}> {option} </option>
                                ))}
                            </TextField>
                            {errors.role && errors.role.type === "required" && (
                            <label className="error-message">This is required field</label>
                            )}
                        </div>
                        <div className="formInput">
                            <FormControl variant="filled">
                                <InputLabel htmlFor="input">Full Name</InputLabel>
                                <FilledInput 
                                id="input2" 
                                name="name"
                                {...register("name", {required: "required",})}
                                endAdornment={<InputAdornment position="end"> <UserOctagon /> </InputAdornment>} 
                                />
                            </FormControl>
                            {errors.name && errors.name.type === "required" && (
                            <label className="error-message">This is required field</label>
                            )}
                        </div>

                        <div className="formInput">
                            <FormControl variant="filled">
                                <InputLabel htmlFor="input">Business Email </InputLabel>
                                <FilledInput 
                                id="input3" 
                                type="email" 
                                name="email"
                                {...register("email", {required: "required", pattern: /\S+@\S+\.\S+/})}
                                endAdornment={<InputAdornment position="end"> <Message /> </InputAdornment>} 
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
                            <FormControl variant="filled">
                                <InputLabel htmlFor="input">Number</InputLabel>
                                <FilledInput 
                                id="phonenum" 
                                type="number"
                                name="phone"
                                {...register("phone", {required: "required",})}
                                endAdornment={<InputAdornment position="end"> <UserOctagon /> </InputAdornment>} 
                                />
                            </FormControl>
                            {errors.name && errors.name.type === "required" && (
                            <label className="error-message">This is required field</label>
                            )}
                        </div>

                        <div className="formInput">
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                <FilledInput
                                    id="filled-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    {...register("password", {required: "required",})}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                                {showPassword ? <Lock1 /> : <Lock1 />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            {errors.password && errors.password.type === "required" && (
                            <label className="error-message">This is required field</label>
                            )}
                        </div>

                        <div className="formInput">
                            <FormControl variant="filled">
                                <InputLabel htmlFor="input">Address </InputLabel>
                                <FilledInput 
                                id="input4" 
                                type="text"
                                name="address"
                                {...register("address", {required: "required",})}
                                endAdornment={<InputAdornment position="end"> <Location /> </InputAdornment>} 
                                />
                            </FormControl>
                            {errors.address && errors.address.type === "required" && (
                            <label className="error-message">This is required field</label>
                            )}
                        </div>
                        <div className="formInput formInputSelect">
                            <TextField
                                id="filled-select-country"
                                select 
                                label="Country" 
                                defaultValue=""
                                name="countryCode"
                                {...register("countryCode", {required: "required",})}
                                value={countryCode}
                                onChange={(e) => {setCountryCode(e.target.value); setCountryName(e.target[e.target.selectedIndex].text)}}
                                SelectProps={{ native: true, }} variant="filled" >
                                <option value="" selected></option>
                                {selectCountry && selectCountry.map((option, ind) => 
                                    <option key={ind}  value={option.countryCode}> {option.country} </option>)
                                }
                            </TextField>
                            {errors.countryCode && errors.countryCode.type === "required" && (
                            <label className="error-message">This is required field</label>
                            )}
                        </div>
                        <div className="formInput formInputSelect">
                            <TextField
                                id="filled-select-state" 
                                select 
                                label="State" 
                                defaultValue=""
                                name="state"
                                {...register("state", {required: "required",})}
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                SelectProps={{ native: true, }} variant="filled" >
                                <option value="" selected></option>
                                {stateName && stateName.map((stateItem, key) => (
                                    <option value={stateItem.state} key={key}> {stateItem.state} </option>
                                ))}
                            </TextField>
                            {errors.state && errors.state.type === "required" && (
                            <label className="error-message">This is required field</label>
                            )}
                        </div>
                        <button type="submit">Generate a New User</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateNewUser;
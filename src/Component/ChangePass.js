import React, { useEffect, useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Lock1 } from 'iconsax-react';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import { useForm } from "react-hook-form";
import { changePassword } from "../redux/actions/userAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const ChangePass = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [newShowPassword, setNewShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false);
    const [enterNewPass, setEnterNewPass] = useState('');
    const [enterConPass, setEnterConPass] = useState('');
    const [passwordNotMatch, setPasswordNotMatch] = useState('');

    const OldPassword = () => setShowPassword((show) => !show);
    const NewPassword = () => setNewShowPassword((show) => !show);
    const handleClickShowPassword = () => setConfirmShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const {register, handleSubmit, formState: {errors}, reset } = useForm({defaultValues: {oldPassword: '', newPassword: '',}});
    const onSubmit = (data) => {
        if(enterNewPass !== enterConPass){
            setPasswordNotMatch("Boath password are not match");
            return;
        }
        setPasswordNotMatch("");
        let apiData = {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
        };
        dispatch(changePassword(apiData));
    };


    useEffect(() => {
        if(enterNewPass === enterConPass){
            setPasswordNotMatch("");
        }
      }, [enterConPass]);

      useEffect(() => {
        if (status.userChangePassword.data !== "") {
          if (status.userChangePassword.data.status === 200) {
            toast.success("Password change success", {
                position: "bottom-right",
                theme: "colored",
              });
            reset();
            setEnterNewPass("");
            setEnterConPass("");
            setTimeout(() => {
                let path = `/dashboard/general-settings`;
                navigate(path);
                window.location.reload();
              }, 4000);
            
          } else {
            if (status.userChangePassword.data.response != null) {
            toast.error(status.userChangePassword.data.response.data.error ? status.userChangePassword.data.response.data.error : status.userChangePassword.data.response.data,{
                position: "bottom-right",
                theme: "colored",
              });
            }else{
                toast.error(status.userChangePassword.data.message,{
                    position: "bottom-right",
                    theme: "colored",
                });
                }
            }
          
        //   else {
        //     toast.error(status.userChangePassword.data.response.data.error, {
        //         position: "bottom-right",
        //         theme: "colored",
        //       });
        //   }
        }
        
      }, [status]);

    return (
        <>
            <div className="Change-password">
                <h6>Change Password</h6>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formSection">
                    <div className="formInput">
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Old Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-old-password"
                                type={showPassword ? 'text' : 'password'}
                                name="oldPassword"
                                {...register("oldPassword", {required: "required",})}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton aria-label="toggle password visibility" onClick={OldPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                            {showPassword ? <Lock1 /> : <Lock1 />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        {errors.oldPassword && errors.oldPassword.type === "required" && (
                        <label className="error-message">This is required field</label>
                        )}
                    </div>
                    <div className="formInput">
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">New Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-new-password"
                                type={newShowPassword ? 'text' : 'password'}
                                value={enterNewPass}
                                name="newPassword"
                                {...register("newPassword", {required: "required",})}
                                onChange={(e) => setEnterNewPass(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton aria-label="toggle password visibility" onClick={NewPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                            {newShowPassword ? <Lock1 /> : <Lock1 />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        {errors.newPassword && errors.newPassword.type === "required" && (
                        <label className="error-message">This is required field</label>
                        )}
                    </div>
                    <div className="formInput">
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-confirm-password"
                                type={confirmShowPassword ? 'text' : 'password'}
                                value={enterConPass}
                                onChange={(e) => setEnterConPass(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                            {confirmShowPassword ? <Lock1 /> : <Lock1 />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        {passwordNotMatch && passwordNotMatch ? <label className="error-message">{passwordNotMatch}</label> : ''}
                        
                    </div>

                   <button type="submit">Update Password</button>
                </div>
                </form>
            </div>
        </>
    )
}

export default ChangePass;
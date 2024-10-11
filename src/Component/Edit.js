import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { country, profileUpdate, states } from "../redux/actions/userAuth";
import { toast } from 'react-toastify';

const Edit = () => {

    const dispatch = useDispatch();
    const status = useSelector((state) => state);
    const [profileData, setProfileData] = useState('');
    const [countryStore, setCountryStore] = useState('');
    const [stateName, setStateName] = useState('');
    const [countryCode, setCountryCode] = useState('');

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [address, setAddress] = useState("");
    const [selectCountryName, setSelectCountryName] = useState("");
    const [selectState, setSelectState] = useState("");

    useEffect(() => {
        const apiData = {};
        dispatch(country(apiData));
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
            setCountryStore(status.country.data.data);
          } else {
            if (status.country.data.response != null) {
            toast.error(status.country.data.response.data.error ? status.country.data.response.data.error : status.country.data.response.data,{
                position: "bottom-right",
                theme: "colored",
              });
            }else{
                toast.error(status.country.data.message,{
                    position: "bottom-right",
                    theme: "colored",
                });
                }
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
        if (status.userProfile.data !== "") {
            if (status.userProfile.data.status === 200) {
                setProfileData(status.userProfile.data.data);
            } else {
                if (status.userProfile.data.response != null) {
                toast.error(status.userProfile.data.response.data.error ? status.userProfile.data.response.data.error : status.userProfile.data.response.data,{
                    position: "bottom-right",
                    theme: "colored",
                  });
                }else{
                    toast.error(status.userProfile.data.message,{
                        position: "bottom-right",
                        theme: "colored",
                    });
                    }
                }
            }
        }, [status]);


    const handleSubmit = (e) => {
        e.preventDefault();
        let apiData = { 
            name: fullName?fullName:profileData.name,
            email: email?email:profileData.email,
            phone: mobileNumber?mobileNumber:profileData.phone,
            address: address?address:profileData.address,
            country: selectCountryName?selectCountryName:profileData.country,
            state: selectState?selectState:profileData.state,
            countryCode: countryCode?countryCode:profileData.country,
            profileImageId: profileData.userId,
        };
        console.log(apiData);
        dispatch(profileUpdate(apiData));
      };

    
    return(
        <>
        <div className="edit">
            <h6>Edit Profile</h6>
            <form onSubmit={handleSubmit}>
            <div className="formSection">
                    <div className="formInput">
                        <div className="forminputcustom">
                            <label>Full Name</label>
                            <input type="text" name="Dob" onChange={(e) => setFullName(e.target.value === "" ? 'null' : e.target.value) } defaultValue={profileData.name} />
                            <div className="righticinp">
                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.08 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 11a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 11ZM16 16.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="formInput">
                        <div className="forminputcustom">
                            <label>Business Email</label>
                            <input type="text" name="Dob" onChange={(e) => setEmail(e.target.value === "" ? 'null' : e.target.value) } defaultValue={profileData.email} />
                            <div className="righticinp">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.996 11h.01M11.995 11h.01M7.995 11h.008" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="formInput">
                        <div className="forminputcustom">
                            <label>Mobile No.</label>
                            <input type="text" name="Dob" onChange={(e) => setMobileNumber(e.target.value === "" ? 'null' : e.target.value) } defaultValue={profileData.phone} />
                            <div className="righticinp">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="formInput">
                        <div className="forminputcustom">
                            <label>Address</label>
                            <input type="text" name="Dob" onChange={(e) => setAddress(e.target.value === "" ? 'null' : e.target.value) } defaultValue={profileData.address} />
                            <div className="righticinp">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z" stroke="currentColor" strokeWidth="1.5"></path><path d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z" stroke="currentColor" strokeWidth="1.5"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="formInput formInputSelect">
                        <div className="forminputcustom">
                            <label>Country</label>
                            <select onChange={(e) => {setCountryCode(e.target.value); setSelectCountryName(e.target[e.target.selectedIndex].text)}} >
                            <option value="" key="">{profileData.country}</option>
                            {countryStore !== "" &&
                                countryStore.map((data, index) => (
                                <option value={data.countryId} key={index}>{data.country}</option>
                            ))}
                            </select>
                            <div className="righticinp">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="formInput formInputSelect">
                        <div className="forminputcustom">
                            <label>State</label>
                            <select onChange={(e) => setSelectState(e.target.value === "" ? 'null' : e.target.value)}>
                            <option value="" key="">{profileData.state}</option>
                            {stateName !== "" &&
                                stateName.map((data, index) => (
                                <option value={data.state} key={index}>{data.state}</option>
                            ))}
                            </select>
                            <div className="righticinp">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"></path></svg>  
                            </div>
                        </div>
                    </div>
                    <button type="submit">Update Profile</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Edit;
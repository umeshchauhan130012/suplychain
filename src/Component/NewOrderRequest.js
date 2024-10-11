import React from "react";
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { TruckFast, Calendar, AddCircle } from 'iconsax-react';
import { Link } from "react-router-dom";
import FilledInput from '@mui/material/FilledInput';

const NewOrderRequest = () =>
{
    return(
        <>
        <div className="NewOrderRequest">
            <h6>New Order Request</h6>

            <div className="formSection">
                    <div className="formInput">
                        <FormControl>
                            <InputLabel htmlFor="input">Order Date</InputLabel>
                            <FilledInput id="input" endAdornment={  <InputAdornment position="end"> <Calendar /></InputAdornment> }/>
                        </FormControl>
                    </div>
                    <div className="formInput">
                        <FormControl>
                            <InputLabel htmlFor="input">Dealer Name</InputLabel>
                            <FilledInput  id="input" endAdornment={ <InputAdornment position="end"> <TruckFast /> </InputAdornment> } />
                        </FormControl>
                    </div>

                    <div className="formInput">
                        <FormControl>
                            <InputLabel htmlFor="input">Expected Delivery date </InputLabel>
                            <FilledInput id="input"  endAdornment={ <InputAdornment position="end"> <Calendar /> </InputAdornment>  } />
                        </FormControl>
                    </div>

                    <h6>Products</h6>
                    <div className="TwoInput">
                    <div className="formInput">
                        <FormControl>
                            <InputLabel htmlFor="input">Name </InputLabel>
                            <FilledInput id="input"  endAdornment={ <InputAdornment position="end"></InputAdornment>  } />
                        </FormControl>
                    </div>
                    <div className="formInput">
                        <FormControl>
                            <InputLabel htmlFor="input">Quantity</InputLabel>
                            <FilledInput id="input"  endAdornment={ <InputAdornment position="end"></InputAdornment>  } />
                        </FormControl>
                    </div> 
                    </div>
                    <div className="Description"><Link to="/"><AddCircle />Add Description</Link></div>
                    <Link to="/Order-Success"><button>Create Order and Generate QR Code</button></Link>
                </div>
        </div>
        </>
    )
}

export default NewOrderRequest;
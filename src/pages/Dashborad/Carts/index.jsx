import React, { Component } from 'react'
import './carts.css'
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';


const top100Films = [
    { label: 'Yes' },
    { label: 'No' }];

class Carts extends Component {
    render() {
        return (
            <>
                <main>
                <h1 className='topic' style={{color:"rgb(7, 146, 128)",position:"relative",left:"90px",top:"10px"}}>Cart Manage</h1>
                    <section className='CartManageSection'>
                        <div className='Section'>
                            <Box style={{ position: 'relative', textAlign: 'center', top: '60px', left: '90px' }}>
                                <Autocomplete 
                                 size="small" sx={{ width: '40ch'}}
                                    style={{ width: '70%' }}
                                    id="combo-box-demo"
                                    options={top100Films}

                                    sx={{ width: 260 }}
                                    renderInput={(params) => <TextField
                                        {...params} label="Need a driver or not?" />}
                                />
                            </Box>

                            <Box style={{ position: 'relative', textAlign: 'center', top: '80px', left: '90px' }}>
                                <Autocomplete 
                                 size="small" sx={{ width: '40ch'}}
                                    style={{ width: '70%' }}
                                    id="combo-box-demo"
                                    options={top100Films}

                                    sx={{ width: 260 }}
                                    renderInput={(params) => <TextField
                                        {...params} label="Need a driver or not?" />}
                                />
                            </Box>



                        </div>
                        <div className='Section2'>
                            <TextField
                                style={{ position: 'relative', width: '70%', textAlign: 'center', top: '60px', left: '90px' }}
                                id="date"
                                label="Date"
                                type="date"
                                defaultValue="LocalizationProvider"

                                InputLabelProps={{
                                    shrink: true,
                                }}
                                 size="small" sx={{ width: '40ch'}}
                            />

                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '80px',left:"10px" }}>
                                <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Address" style={{ width: '70%' }}

                                />
                            </Box>

                        </div>
                            
                        <button  style={{position: "relative",top:"250px",width:"190px",height:"40px",left:"20px",backgroundColor:"green",border:"none",borderRadius:"5px",color:"white"}}>Save</button>
                        {/* <button className='btnClear'>Clear</button> */}

                    </section>
                </main>
            </>
        );
    }
}

export default Carts;
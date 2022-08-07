import React, { Component } from 'react';
import './products.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import user1 from '../../../assets/img/User1.png';

const top100Films = [
    { label: 'Yes' },
    { label: 'No' }];

class Products extends Component {
    render() {
        return (
            <>
                <main>
                  
                <h1 className='topic' style={{color:"rgb(7, 146, 128)",position:"relative",left:"50px",top:"10px"}}>Products Manage</h1>
                    <section className='productsManageSection'>
                        <div className='ManageSection'>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                                <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Address" style={{ width: '70%' }}

                                />
                            </Box>
                            <Box style={{ position: 'relative', textAlign: 'center', top: '60px', left: '70px' }}>
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

                            <Box style={{ position: 'relative', textAlign: 'center', top: '160px',left:"870px",top:"-70px" }}>

                                <input
                                    type="file"
                                    name="file"

                                />
                            </Box>
                            <img src={user1} style={{position: "relative",width:"120px",left:"1010px",top:"-230px"}}/>

                        </div>
                        <div className='ManageSection2'>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                                <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Address" style={{ width: '70%' }}

                                />
                            </Box>

                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' ,backgroundColor:"transparent"}}>
                                <TextareaAutosize
                                 size="small" sx={{ width: '40ch'}} 
                                    style={{ width: '70%' }}
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Minimum 3 rows"
                                />
                            </Box>
                        </div>

                        <button  style={{position: "relative",top:"300px",width:"190px",height:"40px",left:"-880px",backgroundColor:"green",border:"none",borderRadius:"5px",color:"white"}}>Save</button>
                        {/* <button className='btnClear'>Clear</button> */}
                    </section>
                    
                </main>
            </>
        );
    }
}

export default Products;
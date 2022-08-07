import React, { Component } from 'react';
import './user.css'
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

// import createUserService from '../../../service/createUser';


import { TextField } from '@mui/material';


class Users extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       AdminFormData: {
    //         admin_Id: '',
    //         type: '',
    //         userName: '',
    //         password: '',
    //         // userLogin:{
    //         //     user_Id:'',
    //         //     type:'',
    //         //     user_Name:'',
    //         //     password:''
    
    //         //   }
    //       },
    //       adminData: []
    
    //     }
    //   }
    
    //   deleteAdmin = async (id) => {
    //     let params = {
    //       admin_Id: id
    
    //     }
    
    //     // let res = await adminService.deleteAdmin(params)
    
    //     if (res.status === 200) {
    //       this.setState({
    //         alert: true,
    //         message: res.data.message,
    //         severity: 'success'
    //       });
    //       this.loadData();
    //     } else {
    //       this.setState({
    //         alert: true,
    //         message: res.data.message,
    //         severity: 'error'
    //       });
    //     }
    
    //   }
    
    
    //   exampleForMap = () => {
    //     this.state.data.map((value, index) => {
    //       console.log(value.index)
    //     });
    //   }
    
    //   loadData = async () => {
    //     console.log("load method Calling")
    //     let res = await adminService.GetAdmin();
    //     // console.log("admin data " + res.data.data);
    
    //     if (res.status === 200) {
    //       this.setState({
    //         data: res.data.data
    //       });
    //     }
    //     console.log(this.state.data);
    
    //     this.exampleForMap();
    //   }
    
    //   componentDidMount() {
    //     this.loadData();
    //   }




    render() {
        return (
            <>

<h1 className='topic' style={{color:"rgb(7, 146, 128)",position:"relative",left:"50px",top:"10px"}}>User Registration</h1>
<section className='mainSection'>
                    
                    <div className='firstSection'>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                            <TextField size="small" sx={{ width: '40ch'}}  id="outlined-name" label="First Name" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '40px' }}>
                            <TextField size="small" sx={{ width: '40ch'}}  id="outlined-name" label="Email" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Password" style={{width:'70%'}}

                            />
                        </Box>
                    
                    </div>




                    <div className='secondSection'>
                        
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '80px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Street" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '100px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Zip Code " style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '120px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Long Value" style={{width:'70%'}}

                            />
                        </Box>
                    </div>






                    <div className='thirdSection'>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Last Name" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '40px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="User Name" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="City" style={{width:'70%'}}

                            />
                        </Box>
                       
                    </div>





                    <div className='forthSection'>
                        
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '80px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Street No" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '100px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Lat Value" style={{width:'70%'}}

                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '120px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Mobile No" style={{width:'70%'}}

                            />
                        </Box>
                    </div>






                    {/* <button className='btnSave'><b><Link to= "/DashBoard">Save</Link></b></button> */}
                    {/* <button className='btnClear'>Clear</button> */}
                </section>



                <section className='userTable'>

                    <TableContainer component={Paper} style={{position:"relative",left:"-60px"}}>
                        <Table sx={{ minWidth: 900 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>FirstName</TableCell>
                                    <TableCell align="center">LastName</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">UserName</TableCell>
                                    <TableCell align="center">Password</TableCell>
                                    <TableCell align="center">City</TableCell>
                                    <TableCell align="center">Street</TableCell>
                                    <TableCell align="center">StreetNo</TableCell>
                                    <TableCell align="center">ZipCode</TableCell>
                                    <TableCell align="center">LastValue</TableCell>
                                    <TableCell align="center">LongValue</TableCell>
                                    <TableCell align="center">MobilNo</TableCell>
                                    <TableCell align="center">Action</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                            

                            </TableBody>
                        </Table>
                    </TableContainer>

                </section>

            </>
        );
    }
}

export default Users;
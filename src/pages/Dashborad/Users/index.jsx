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
import createUserService from '../../../service/createUser';

import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

import { TextField } from '@mui/material';


class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',

            UserFormData: {
                email: '',
                username: '',
                password: '',
                name: {
                    firstname: '',
                    lastname: ''
                },
                address: {
                    city: '',
                    street: '',
                    number: '',
                    zipcode: '',
                    geolocation: {
                        lat: '',
                        long: ''
                    }
                },
                phone: ''

            },
            data: []


        }

    }

    deleteUser = async (id) => {


        let res = await createUserService.deleteCreateUser(id)

        if (res.status === 200) {
            // this.setState({
            //     alert: true,
            //     // message: res.data.message,
            //     severity: 'success'
            // });
            this.loadData();
        } else {
            // this.setState({
            //     alert: true,
            //     // message: res.data.message,
            //     severity: 'error'
            // });
        }

    }
    clearFields = () => {
        this.setState({
            UserFormData: {
                email: '',
                username: '',
                password: '',
                name: {
                    firstname: '',
                    lastname: ''
                },
                address: {
                    city: '',
                    street: '',
                    number: '',
                    zipcode: '',
                    geolocation: {
                        lat: '',
                        long: ''
                    }
                },
                phone: ''

            }
        })
    }


    updateUser = (data) => {
        console.log(data);
        this.setState({

            id: data.id,

            UserFormData: {
                email: data.email,
                username: data.username,
                password: data.password,
                name: {
                    firstname: data.name.firstname,
                    lastname: data.name.lastname
                },
                address: {
                    city: data.address.city,
                    street: data.address.street,
                    number: data.address.number,
                    zipcode: data.address.zipcode,
                    geolocation: {
                        lat: data.address.geolocation.lat,
                        long: data.address.geolocation.long
                    }
                },
                phone: data.phone

            }
        })

    }

    updateUsers = async () => {
        let formData = this.state.UserFormData;
        let res = await createUserService.PutCreateUser(formData, this.state.id);
        if (res.status === 200) {
            this.setState({
                alert: true,

            });
            this.loadData();
            this.clearFields();

        } else {
            this.setState({

            });
        }
    }


    // exampleForMap = () => {
    //     this.state.data.map((value, index) => {
    //         console.log(value.index)
    //     });
    // }

    loadData = async () => {
        console.log("load method Calling")
        let res = await createUserService.GetCreateUser();
        // console.log("rental data " + res.data.data);

        if (res.status === 200) {
            this.setState({
                data: res.data
            });
        }
        console.log(this.state.data);

        // this.exampleForMap();
    }

    componentDidMount() {
        this.loadData();
        console.log(this.loadData);
    }





    render() {
        return (
            <>

                <h1 className='topic' style={{ color: "rgb(7, 146, 128)", position: "relative", left: "50px", top: "10px" }}>User Registration</h1>
                <section className='mainSection'>

                    <div className='firstSection'>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                            <TextField size="small" sx={{ width: '40ch' }} id="outlined-name" label="First Name" style={{ width: '70%' }}
                                value={this.state.UserFormData.name.firstname}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.name.firstname = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '40px' }}>
                            <TextField size="small" sx={{ width: '40ch' }} id="outlined-name" label="Email" style={{ width: '70%' }}
                                value={this.state.UserFormData.email}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.email = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' }}>
                            <TextField size="small" sx={{ width: '40ch' }} id="outlined-name" label="Password" style={{ width: '70%' }}
                                value={this.state.UserFormData.password}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.password = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>

                    </div>




                    <div className='secondSection'>

                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '80px' }}>
                            <TextField size="small" sx={{ width: '40ch' }} id="outlined-name" label="Street" style={{ width: '70%' }}
                                value={this.state.UserFormData.address.street}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.address.street = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '100px' }}>
                            <TextField size="small" sx={{ width: '40ch' }} id="outlined-name" label="Zip Code " style={{ width: '70%' }}
                                value={this.state.UserFormData.address.zipcode}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.address.zipcode = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '120px' }}>
                            <TextField size="small" sx={{ width: '40ch' }} id="outlined-name" label="Long Value" style={{ width: '70%' }}
                                value={this.state.UserFormData.address.geolocation.long}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.address.geolocation.long = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                    </div>






                    <div className='thirdSection'>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                            <TextField size="small" sx={{ width: '40ch' }} id="outlined-name" label="Last Name" style={{ width: '70%' }}
                                value={this.state.UserFormData.name.lastname}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.name.lastname = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '40px' }}>
                            <TextField size="small" sx={{ width: '40ch' }} id="outlined-name" label="User Name" style={{ width: '70%' }}
                                value={this.state.UserFormData.username}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.username = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' }}>
                            <TextField size="small" sx={{ width: '40ch' }} id="outlined-name" label="City" style={{ width: '70%' }}
                                value={this.state.UserFormData.address.city}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.address.city = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>

                    </div>





                    <div className='forthSection'>

                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '80px' }}>
                            <TextField size="small" sx={{ width: '40ch' }} id="outlined-name" label="Street No" style={{ width: '70%' }}
                                value={this.state.UserFormData.address.number}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.address.number = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '100px' }}>
                            <TextField size="small" sx={{ width: '40ch' }} id="outlined-name" label="Lat Value" style={{ width: '70%' }}
                                value={this.state.UserFormData.address.geolocation.lat}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.address.geolocation.lat = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '120px' }}>
                            <TextField size="small" sx={{ width: '40ch' }} id="outlined-name" label="Mobile No" style={{ width: '70%' }}
                                value={this.state.UserFormData.phone}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.phone = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                    </div>






                    <button onClick={this.updateUsers} className='btnUserUpdate'><b>Update</b></button>
                   
                </section>



                <section className='userTable'>

                    <TableContainer component={Paper} style={{ position: "relative", left: "-100px" }}>
                        <Table sx={{ minWidth: 1450 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>FIRST NAME</TableCell>
                                    <TableCell align="center">LAST NAME</TableCell>
                                    <TableCell align="center">EMAIL</TableCell>
                                    <TableCell align="center">User Name</TableCell>
                                    <TableCell align="center">PASSWORD</TableCell>
                                    <TableCell align="center">CITY</TableCell>
                                    <TableCell align="center">STREET</TableCell>
                                    <TableCell align="center">STREET NO</TableCell>
                                    <TableCell align="center">ZIP CODE</TableCell>
                                    <TableCell align="center">LASTVALUE</TableCell>
                                    <TableCell align="center">LONG VALUE</TableCell>
                                    <TableCell align="center">MOBILE NO</TableCell>
                                    <TableCell align="center">ACTION</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>


                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell>{row.name.firstname}</TableCell>
                                            <TableCell align="right">{row.name.lastname}</TableCell>
                                            <TableCell align="right">{row.email}</TableCell>

                                            <TableCell align="right">{row.username}</TableCell>
                                            <TableCell align="right">{row.password}</TableCell>
                                            <TableCell align="right">{row.address.city}</TableCell>
                                            <TableCell align="right">{row.address.street}</TableCell>
                                            <TableCell align="right">{row.address.number}</TableCell>

                                            <TableCell align="right">{row.address.zipcode}</TableCell>
                                            <TableCell align="right">{row.address.geolocation.lat}</TableCell>
                                            <TableCell align="right">{row.address.geolocation.long}</TableCell>
                                            <TableCell align="right">{row.phone}</TableCell>

                                            <TableCell align="right">

                                                <Tooltip title="Delete"><IconButton
                                                    onClick={() => {
                                                        this.deleteUser(row.id);
                                                    }}
                                                ><DeleteIcon color="error" /></IconButton>
                                                </Tooltip>

                                                <Tooltip title="Edit"><IconButton
                                                    onClick={() => {
                                                        console.log("edit icon clicked!")
                                                        this.updateUser(row);
                                                    }}
                                                ><EditIcon color='primary' /></IconButton>
                                                </Tooltip>

                                            </TableCell>
                                        </TableRow>
                                    ))


                                }


                            </TableBody>
                        </Table>
                    </TableContainer>

                </section>

            </>
        );
    }
}

export default Users;

{/* <Tooltip title="Delete"><IconButton
                                                    onClick={() => {
                                                        this.deletecreateUser(row.id)
                                                    }}
                                                ><DeleteIcon color="error" /></IconButton>
                                                </Tooltip> */}

{/* <Tooltip title="Edit"><IconButton
                                        onClick={() => {
                                            console.log("edit icon clicked!")
                                            this.updateRentalRate(row);
                                        }}
                                    ><EditIcon color='primary'/></IconButton>
                                    </Tooltip> */}
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import "./user.css"
import { TextField } from '@mui/material';
import CreateUserService from '../../service/createUser';

class CreateUser extends Component {

    constructor(props){
        super(props);

        this.state = {
            UserFormData:{
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
            alert: false,
                message: "",
                severity: "",
                btnLabelCreateUser:'save',
         
  
        }

    }


    clearCreateUserTextFeild = (e) => {
        this.setState({
            UserFormData:{
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



    submitCreateUserData = async () =>{
      console.log("load method Calling")
      let UserFormData = this.state.UserFormData;
      console.log("form data : " + JSON.stringify(UserFormData))
      let resUser = await CreateUserService.postCreateUser(UserFormData);
      console.log(resUser)
      if (resUser.status === 201) {
        this.setState({
            alert: true,
            message: resUser.data.message,
            severity: "success"
        });
        // this.clearCreateUserTextFeild();
    } else {
        this.setState({
            // alert: true,
            // message: resUser.response.data.message,
            // severity: "error"
        });
    }
   
    }







    render() {
        return (

            <main>
                <h1 className='topic' style={{color:"rgb(7, 146, 128)",position:"relative",left:"555px",top:"30px"}}>User Registration</h1>
                <section className='registration_section'>
                    
                    <div className='first_registration_form'>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                            <TextField size="small" sx={{ width: '40ch'}}  id="outlined-name" label="First Name" style={{width:'70%'}}
                                value={this.state.UserFormData.name.firstname}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.name.firstname = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '40px' }}>
                            <TextField size="small" sx={{ width: '40ch'}}  id="outlined-name" label="Email" style={{width:'70%'}}
                                 value={this.state.UserFormData.email}
                                 onChange={(e) => {
                                     let UserFormDatas = this.state.UserFormData
                                     UserFormDatas.email = e.target.value
                                     this.setState({ UserFormDatas })
                                 }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Password" style={{width:'70%'}}
                                value={this.state.UserFormData.password}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.password = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '80px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Street" style={{width:'70%'}}
                                value={this.state.UserFormData.address.street}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.address.street = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '100px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Zip Code " style={{width:'70%'}}
                                value={this.state.UserFormData.address.zipcode}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.address.zipcode = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '120px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Long Value" style={{width:'70%'}}
                                value={this.state.UserFormData.address.geolocation.long}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.address.geolocation.long = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                    </div>



                    <div className='second_registration_form'>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Last Name" style={{width:'70%'}}
                                value={this.state.UserFormData.name.lastname}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.name.lastname = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '40px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="User Name" style={{width:'70%'}}
                                value={this.state.UserFormData.username}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.username = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="City" style={{width:'70%'}}
                                value={this.state.UserFormData.address.city}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.address.city = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '80px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Street No" style={{width:'70%'}}
                                value={this.state.UserFormData.address.number}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.address.number = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '100px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Lat Value" style={{width:'70%'}}
                                value={this.state.UserFormData.address.geolocation.lat}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.address.geolocation.lat = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                        <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '120px' }}>
                            <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Mobile No" style={{width:'70%'}}
                                value={this.state.UserFormData.phone}
                                onChange={(e) => {
                                    let UserFormDatas = this.state.UserFormData
                                    UserFormDatas.phone = e.target.value
                                    this.setState({ UserFormDatas })
                                }}
                            />
                        </Box>
                    </div>


                    <button label={this.state.btnLabelCreateUser}  type='submit' onClick={this.submitCreateUserData} className='btnSave'><b><Link to= "/DashBoard">Save</Link></b></button>
                    <button className='btnClear' onClick={this.clearCreateUserTextFeild}>Clear</button>
                    {/* <Link to= "/DashBoard">Save</Link> */}
                </section>

            </main>
        );
    }
}

export default CreateUser;
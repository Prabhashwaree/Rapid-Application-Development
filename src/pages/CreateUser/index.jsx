import React, { Component } from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import "./user.css"
import { TextField } from '@mui/material';
// import CreateUserService from '../../service/createUser';

class CreateUser extends Component {

    constructor(props){
        super(props);

        this.state = {
          CustomerFormData:{
            nic_Number:'',
            license_Id:'',
            cus_Name:'',
            address:'',
            contact_No:'',
            email:'',
            userName:'',
            password:'',
            nicImg:'',
            licenseImg:'',
          },
          alert: false,
          message: "",
          severity: "",
          btnLabelCreateUser:'save',
  
        }

    }


    clearCustomerTextFeild = (e) => {
        this.setState({
            CustomerFormData:{
                nic_Number:'',
                license_Id:'',
                cus_Name:'',
                address:'',
                contact_No:'',
                email:'',
                userName:'',
                password:''
          }
        })
    }



    // submitCustomerData = async () =>{
    //   console.log("load method Calling")
    //   let CustomerFormData = this.state.CustomerFormData;
    //   console.log("form data : " + JSON.stringify(CustomerFormData))
    //   let resCustomer = await CreateUserService.postCustomer(CustomerFormData);
    //   console.log(resCustomer)
    //   if (resCustomer.status === 201) {
    //     this.setState({
    //         alert: true,
    //         message: resCustomer.data.message,
    //         severity: "success"
    //     });
    //     this.clearCustomerTextFeild();
    // } else {
    //     this.setState({
    //         alert: true,
    //         message: resCustomer.response.data.message,
    //         severity: "error"
    //     });
    // }
   
    // }







    render() {
        return (

            <main>
                <h1 className='topic' style={{color:"rgb(7, 146, 128)",position:"relative",left:"555px",top:"30px"}}>User Registration</h1>
                <section className='registration_section'>
                    
                    <div className='first_registration_form'>
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



                    <div className='second_registration_form'>
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


                    <button label={this.state.btnLabelCreateUser}  className='btnSave'><b><Link to= "/DashBoard">Save</Link></b></button>
                    {/* <button className='btnClear'>Clear</button> */}
                </section>

            </main>
        );
    }
}

export default CreateUser;
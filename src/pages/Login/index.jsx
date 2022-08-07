import React, { Component } from 'react';
import './login.css'
import carLogo from '../../assets/img/carLogo.png';
import linkPhone from '../../assets/img/linkPhone.png';
import googel from '../../assets/img/googel.png';
import facebook from '../../assets/img/facebook.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
// import loginService from '../../service/login';
import { Link } from 'react-router-dom';



class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
          SignInFormData:{
            user_Id:'',
              user_Name:'',
              password:''
          },
          alert: false,
          message: "",
          severity: "",
  
          btnLabelSave:'save',
      }
    }


//     clearSignInTextFeild = (e) => {
//       this.setState({
//         SignInFormData:{
//           user_Id:'',
//           user_Name:'',
//           password:''
          
//         }
        
//       })
//   }


//   submitSignIn = async () =>{
//     console.log("load method Calling")
//     let SignInFormData = this.state.SignInFormData;
//     console.log("form data : " + JSON.stringify(SignInFormData))
//     let resSignIn = await loginService.postSignIn(SignInFormData);
//     console.log(resSignIn)
//     if (resSignIn.status === 201) {
//       this.setState({
//           alert: true,
//           message: resSignIn.data.message,
//           severity: "success"
//       });
//       this.clearSignInTextFeild();
//   } else {
//       this.setState({
//           alert: true,
//           // message: resSignIn.response.data.message,
//           severity: "error"
//       });
//   }
//   }


      
    render(){
      return (
  
        <>

        {/* --------------------------loging----------------------- */}
         <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitSignIn} >
        <section>

            <div id="navivar"></div>

            {/* <img src={carLogo} style={{position: "absolute",left:"80px",top:"1.9%",zIndex:"1",width:"40px",height:"40px"}} /> */}
          {/* <h1 style={{position: "absolute",left:"1360px",top:"2.8%",zIndex:"1",width:"40px",height:"40px",fontSize:"20px",fontWeight:"100",color:"white"}}>Back</h1> */}
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{position: "absolute",left:"130px",top:"2.5%",zIndex:"1",color:"white"}}>
            <b>EXPERDIA Car Rental</b>
            </Typography> */}

            <div id="loginSection">
                <h1>Sign in</h1>
                {/* <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="User Id" variant="outlined" style={{position: "relative",top:"55px",zIndex:"1",width:"380px"}}
                value={this.state.SignInFormData.user_Id}
                onChange={(e) => {
                    let SignInFormDatas = this.state.SignInFormData
                    SignInFormDatas.user_Id = e.target.value
                    this.setState({ SignInFormDatas })
                }}
                validators={['required']} 
                /><br/> */}
                <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="User Name" variant="outlined" style={{position: "relative",top:"45px",zIndex:"1",width:"380px"}}
                value={this.state.SignInFormData.user_Name}
                onChange={(e) => {
                    let SignInFormDatas = this.state.SignInFormData
                    SignInFormDatas.user_Name = e.target.value
                    this.setState({ SignInFormDatas })
                }}
                validators={['required']} 
                /><br/>
                <TextValidator
                 size="small" sx={{ width: '40ch'}} 
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"

                    value={this.state.SignInFormData.password}
                onChange={(e) => {
                    let SignInFormDatas = this.state.SignInFormData
                    SignInFormDatas.password = e.target.value
                    this.setState({ SignInFormDatas })
                  }}
                  validators={['required']} 
                    style={{position: "relative",top:"38px",zIndex:"1",width:"380px"}}
                    /><br/>
                <Button label={this.state.btnLabelSave} type="submit" variant="Continue with account" style={{position: "relative",top:"50px",backgroundColor:"lightBlue" ,zIndex:"1",width:"380px"}}><Link to = "/DashBoard">Continue with account</Link></Button><br/>
                <div style={{position: "relative",top:"88px",zIndex:"1",width:"98.5px",height:"1px",left:"485px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                <p style={{color:"black",position: "relative",top:"70px"}}>or use one of these options</p>
                <div style={{position: "relative",top:"66px",zIndex:"1",width:"98.5px",height:"1px",left:"778px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                
                <img src={facebook} style={{position: "relative",top:"65px",zIndex:"1",width:"98.5px",height:"1px",left:"-10px",zIndex:"1",width:"50px",height:"50px",cursor:"pointer"}}/>
                <img src={googel} style={{position: "relative",top:"75px",zIndex:"1",width:"98.5px",height:"1px",left:"2px",zIndex:"1",width:"100px",height:"70px",cursor:"pointer"}}/>
                <img src={linkPhone} style={{position: "relative",top:"65px",zIndex:"1",width:"98.5px",height:"1px",left:"9px",zIndex:"1",width:"50px",height:"48px",cursor:"pointer"}}/>
                <p style={{color:"rgb(25, 60, 173)",top:"70px",cursor:"pointer"}}><Button variant="Continue with account" style={{backgroundColor:"transparent"}}><b><Link to = "/CreateUser">Create a New Account</Link></b></Button></p>
                <div style={{position: "relative",top:"73px",zIndex:"1",width:"380px",height:"1px",left:"485px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                <p style={{position: "relative",fontSize:"14px",top:"80px"}}>By signing in or creating an account, you agree with our <b style={{color:"rgb(58, 87, 255)",cursor:"pointer"}}>Terms &<br/> conditions and Privacy statement</b></p>
                <div style={{position: "relative",top:"89px",zIndex:"1",width:"380px",height:"1px",left:"485px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                <p style={{position: "relative",fontSize:"14px",top:"100px"}}>All rights reserved.<br/>Copyright (2022 - 2023) - Booking.com™</p>
            </div>

        </section>
        </ValidatorForm>
       
        </>
  
      );
  
    }


}
export default Login;

import React, { Component } from 'react'
import './carts.css'
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import CartService from '../../../service/cart.js';
import CreateUserService from '../../../service/createUser';
import ProductService from '../../../service/products';


const top100Films = [
    { label: 'Yes' },
    { label: 'No' }];

class Carts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            FormData: {
                id: '',
                userId: '',
                date: "",
                products: [
                    {
                        productId: '',
                        quantity: ''
                    },
                    {
                        productId: '',
                        quantity: ''
                    }
                ]
            },
            userNameData: [],
            productTitleData: [],

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

            ProductFormData: {
                title: '',
                price: '',
                description: '',
                image: '',
                category: ''

            },

        }

    }




    clearCreateUserTextFeild = (e) => {
        this.setState({
            FormData: {
                userNameData: [],
                productTitleData: [],
                date: "",
                products: [
                    {
                        productId: '',
                        quantity: ''
                    },
                    {
                        productId: '',
                        quantity: ''
                    }
                ]
            }

        })
    }



    submitCartData = async () => {
        let FormData = this.state.FormData;   
        let res = await CartService.postCart(FormData);
        if (res.status === 201) {
            this.setState({
                alert: true,
                message: res.data.message,
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


    getUserName = async() => {
        let res = await CreateUserService.GetCreateUser();
        let userNames = [];
        res.data.map((value) => {
            userNames.push(value.username)

        })
        this.setState({
            userNameData:userNames
        })
    }


    getProductTitle = async() => {
        let res = await ProductService.GetProducts();
        let title = [];
        res.data.map((value) => {
            title.push(value.title)

        })
        this.setState({
            productTitleData:title
        })
    }


    async componentDidMount() {
        await this.getUserName();
        await this.getProductTitle();
    }



    render() {
        return (
            <>
                <main>
                    <h1 className='topic' style={{ color: "rgb(7, 146, 128)", position: "relative", left: "90px", top: "10px" }}>Cart Manage</h1>
                    <section className='CartManageSection'>
                        <div className='Section'>
                            <Box style={{ position: 'relative', textAlign: 'center', top: '60px', left: '90px' }}>
                                <Autocomplete
                                    size="small" sx={{ width: '40ch' }}
                                    style={{ width: '70%' }}
                                    id="combo-box-demo"


                                    value={this.state.UserFormData.username}
                                    onChange={(event, newValue) => {
                                        this.setState(Object.assign(this.state.UserFormData, { username: newValue }));
                                    }}
                                    options={this.state.userNameData}
                                   
                                    sx={{ width: 260 }}
                                    renderInput={(params) => <TextField
                                        {...params} label="User Name" />}

                                    
                                />
                            </Box>

                            <Box style={{ position: 'relative', textAlign: 'center', top: '80px', left: '90px' }}>
                                <Autocomplete
                                    size="small" sx={{ width: '40ch' }}
                                    style={{ width: '70%' }}
                                    id="combo-box-demo"
                                   

                                    value={this.state.ProductFormData.title}
                                    onChange={(event, newValue) => {
                                        this.setState(Object.assign(this.state.ProductFormData, { title: newValue }));
                                    }}
                                    options={this.state.productTitleData}

                                    sx={{ width: 260 }}
                                    renderInput={(params) => <TextField
                                        {...params} label="Product Title" />}
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

                                value={this.state.FormData.date}
                                onChange={(e) => {
                                    let formData = this.state.FormData
                                    formData.date = e.target.value
                                    this.setState({ formData })
                                }}

                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size="small" sx={{ width: '40ch' }}
                            />

                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '80px', left: "10px" }}>
                                <TextField size="small" sx={{ width: '40ch' }} id="outlined-name" label="QTY" style={{ width: '70%' }}
                                    value={this.state.FormData.products.quantity}
                                    onChange={(e) => {
                                        let formData = this.state.FormData
                                        formData.products.quantity = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Box>

                        </div>

                        <button style={{ position: "relative", top: "250px", width: "190px", height: "40px", left: "20px", backgroundColor: "green", border: "none", borderRadius: "5px", color: "white" }} type="submit" onClick={this.submitCartData}>Save</button>
                        {/* <button className='btnClear'>Clear</button> */}

                    </section>
                </main>
            </>
        );
    }
}

export default Carts;
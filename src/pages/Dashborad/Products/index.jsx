import React, { Component } from 'react';
import './products.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import user1 from '../../../assets/img/User1.png';
import ProductService from '../../../service/products';



class Products extends Component {

    
    constructor(props){
        super(props);

        this.state = {
            ProductFormData:{
                title: '',
                price: '',
                description: '',
                image: '',
                category: ''

            },
            // alert: false,
            // message: "",
            // severity: "",
            // btnLabelProduct:'save',
            categoryData:[],
           
         
  
        }

    }


    getCategory = async() => {
        let responce = await ProductService.GetProducts();
        let categorys = [];

        if(responce.status === 200){
            responce.data.map((value) => {
                categorys.push(value.category)
    
            })
            let unique = categorys.filter((val,id,array) => array.indexOf(val) === id);

            this.setState({ categoryData:unique});
        }

        

        console.log("heeeeee"+categorys);
    }

    async componentDidMount(){
        await this.getCategory();
        console.log(this.state.categoryData);
    }


    clearProductTextFeild = (e) => {
        this.setState({
            ProductFormData:{
                title: '',
                price: '',
                description: '',
                image: '',
                category: ''

            }
         
        })
    }



    submitProductData = async () =>{
      console.log("load method Calling")
      let ProductFormData = this.state.ProductFormData;
      console.log("form data : " + JSON.stringify(ProductFormData))
      let res = await ProductService.postProducts(ProductFormData);
      console.log(res)
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








    render() {
        return (
            <>
                <main>
                  
                <h1 className='topic' style={{color:"rgb(7, 146, 128)",position:"relative",left:"50px",top:"10px"}}>Products Manage</h1>
                    <section className='productsManageSection'>
                        <div className='ManageSection'>
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '20px' }}>
                                <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Title" style={{ width: '70%' }}
                                         value={this.state.ProductFormData.title}
                                         onChange={(e) => {
                                             let ProductFormDatas = this.state.ProductFormData
                                             ProductFormDatas.title = e.target.value
                                             this.setState({ProductFormDatas })
                                         }}
                                />
                            </Box>
                            <Box style={{ position: 'relative', textAlign: 'center', top: '60px', left: '70px' }}>
                                <Autocomplete
                                 value={this.state.ProductFormData.category}
                                 onChange={(event, newValue) => {
                                     this.setState(Object.assign(this.state.ProductFormData, { category: newValue }));
                                 }}
                                    options={this.state.categoryData}
                                    

                                 size="small" sx={{ width: '40ch'}} 
                                    style={{ width: '70%' }}
                                    id="combo-box-demo"
                                    
                                    sx={{ width: 260 }}
                                    renderInput={(params) => <TextField
                                        {...params} label="Category" />}

                                      
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
                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative',left:"10px", textAlign: 'center', top: '20px' }}>
                                <TextField size="small" sx={{ width: '40ch'}} id="outlined-name" label="Price" style={{ width: '70%'}}
                                   value={this.state.ProductFormData.price}
                                   onChange={(e) => {
                                       let ProductFormDatas = this.state.ProductFormData
                                       ProductFormDatas.price = e.target.value
                                       this.setState({ProductFormDatas })
                                   }}   
                                />
                            </Box>

                            <Box component="form" noValidate autoComplete="off" style={{ position: 'relative', textAlign: 'center', top: '60px' ,backgroundColor:"transparent"}}>
                                <TextareaAutosize
                                 size="small" sx={{ width: '40ch'}} 
                                    style={{ width: '70%' }}
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Description"

                                    value={this.state.ProductFormData.description}
                                    onChange={(e) => {
                                        let ProductFormDatas = this.state.ProductFormData
                                        ProductFormDatas.description = e.target.value
                                        this.setState({ProductFormDatas })
                                    }}  
                                
                                />
                            </Box>
                        </div>

                        <button  label={this.state.btnLabelProduct}  type='submit' onClick={this.submitProductData} style={{position: "relative",cursor:"pointer" ,top:"300px",width:"190px",height:"40px",left:"-780px",backgroundColor:"green",border:"none",borderRadius:"5px",color:"white"}}>Save</button>
                        <button className='btnClear' onClick={this.clearProductTextFeild} style={{position: "relative",top:"300px",width:"190px",cursor:"pointer" ,height:"40px",left:"-760px",backgroundColor:"gray",border:"none",borderRadius:"5px",color:"white"}}>Clear</button>
                    </section>
                    
                </main>
            </>
        );
    }
}

export default Products;
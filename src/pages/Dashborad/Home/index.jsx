import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import './home.css'
import backHome from '../../../assets/img/backHome.jpg';


class Home extends Component {
    render() {
        return (
            <>
                <section>

                        <div>
                            
                        <img src={backHome} className='homeSection1'/>
                        <h1 style={{ position: "relative",left:"250px",zIndex:"2",top:"-70px"}}>Product 10</h1>

                        </div>


                        <div>
                            
                        <img src={backHome} className='homeSection2'/>
                        <h1 style={{ position: "relative",left:"680px",zIndex:"2",top:"-400px"}}>Cart 12</h1>

                        </div>


                        <div>
                            
                        <img src={backHome} className='homeSection3'/>
                        <h1 style={{ position: "relative",left:"1100px",zIndex:"2",top:"-735px"}}>Users 49</h1>

                        </div>



                </section>
            </>
        );
    }
}

export default Home;
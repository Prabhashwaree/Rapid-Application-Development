import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import './home.css'

class Home extends Component {
    render() {
        return (
            <>
                <section>
                    <div className='cardSection'>
                        <Card sx={{ maxWidth: 345 }} style={{ position: "relative", top: "120px",border:'1px solid red' }}>
                            <CardActionArea>
                                <CardContent>

                                </CardContent>
                                <h1>Our Customers Always 100% Satisfied</h1>

                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 345 }} style={{ position: "relative", top: "120px" ,border:'1px solid red'}}>
                            <CardActionArea>
                                <CardContent>

                                </CardContent>
                                <h1>We Provide Easier & Faster Bookings</h1>

                            </CardActionArea>
                        </Card>


                        <Card sx={{ maxWidth: 345 }} style={{ position: "relative", top: "120px",border:'1px solid red'}}>
                            <CardActionArea>
                                <CardContent>

                                </CardContent>
                                <h1>Your Choice of Any Pickup Location</h1>

                            </CardActionArea>
                        </Card>

                    </div>
                </section>
            </>
        );
    }
}

export default Home;
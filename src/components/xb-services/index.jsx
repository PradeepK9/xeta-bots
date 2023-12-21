import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import services1 from '../../assets/services1.jpg';
import services2 from '../../assets/services2.jpg';
import services3 from '../../assets/services3.jpg';
import services4 from '../../assets/services4.jpg';
import services5 from '../../assets/services5.jpg';

import './styles.css'

export default function MediaCard() {
    return (
        <div className='ServicesContainer' id='services'>
            <h1 className='ServicessHeading'>Our Services</h1>
            <div className='Services'>
                <Card className='Card'>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={services1}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Custom Software Development
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            End-to-end development of customized software solutions tailored to the unique requirements of clients.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='Card'>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={services2}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            IT Consulting
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Expert advice and guidance on technology strategies, implementation, and optimization to align with business goals.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='Card'>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={services3}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Managed IT Services
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Ongoing management and maintenance of IT infrastructure, including network monitoring, security updates, and tech support.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='Card'>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={services4}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='Card'>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={services1}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='Card'>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={services5}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='Card'>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={services3}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

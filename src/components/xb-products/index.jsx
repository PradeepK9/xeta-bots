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

export default function XBProducts() {
    return (
        <div className='ProductsContainer' id='products'>
            <h1 className='ServicessHeading'>Our Products</h1>
            <div className='Services'>
                <Card className='Card'>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={services5}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Custom Software Solutions
                        </Typography>
                        <p variant="body2" color="text.secondary">
                            Tailored software applications designed to meet specific business needs
                        </p>
                        <Typography variant="body2" color="text.secondary">
                            Examples: CRM systems, inventory management software, and project management tools.
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
                            AI-Powered Applications
                        </Typography>
                        <p>Innovative applications leveraging artificial intelligence and machine learning for automation and intelligent decision-making.</p>
                        <Typography variant="body2" color="text.secondary">
                            Examples: AI-driven chatbots, predictive analytics, and recommendation engines.
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
                            Cybersecurity Products
                        </Typography>
                        <p>Robust cybersecurity solutions to protect against threats, including antivirus software, firewalls, and intrusion detection systems.</p>
                        <Typography variant="body2" color="text.secondary">
                            Examples: cybersecurity application, compliences, and cybersecurity engines
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
                            Cloud Services
                        </Typography>
                        <p>Cloud-based products facilitating data storage, scalability, and accessibility</p>
                        <Typography variant="body2" color="text.secondary">
                            Examples: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).
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
                            Blockchain Applications
                        </Typography>
                        <p>Secure and transparent blockchain solutions for enhancing trust and efficiency in various processes.</p>
                        <Typography variant="body2" color="text.secondary">
                            Examples: Smart contracts, decentralized applications (DApps), and blockchain-based supply chain management.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

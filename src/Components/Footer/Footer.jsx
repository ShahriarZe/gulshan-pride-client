import { Container, Typography, Grid, Link, Divider } from '@mui/material';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (

        <Container sx={{ borderTop: '2px solid #d32f2f', backgroundColor: '#f3f4f6' }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <img
                        className="w-1/2 md:w-1/3 lg:w-1/4 mx-auto"
                        src={logo}
                        alt="Building Management Platform"
                    />
                    <Typography variant="body2" className="text-center">
                        Building Management Platform<br />
                        Copyright © SHAHRIAR AHMMED - All rights Reserved
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ my: 2, borderColor: '#d32f2f' }} />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6" className="footer-title">
                        Services
                    </Typography>
                    <Link className="link link-hover" sx={{ display: 'block', marginBottom: 1 }}>Apartment</Link>
                    <Link className="link link-hover" sx={{ display: 'block', marginBottom: 1 }}>Rooms</Link>
                    <Link className="link link-hover" sx={{ display: 'block', marginBottom: 1 }}>Payment</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6" className="footer-title">
                        Company
                    </Typography>
                    <Link className="link link-hover" sx={{ display: 'block', marginBottom: 1 }}>About us</Link>
                    <Link className="link link-hover" sx={{ display: 'block', marginBottom: 1 }}>Contact</Link>
                    <Link className="link link-hover" sx={{ display: 'block', marginBottom: 1 }}>Jobs</Link>
                    <Link className="link link-hover" sx={{ display: 'block', marginBottom: 1 }}>Press kit</Link>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6" className="footer-title">
                        Legal
                    </Typography>
                    <Link className="link link-hover" sx={{ display: 'block', marginBottom: 1 }}>Terms of use</Link>
                    <Link className="link link-hover" sx={{ display: 'block', marginBottom: 1 }}>Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6" className="footer-title">
                        Social
                    </Typography>
                    <Link className="link link-hover" sx={{ display: 'block', marginBottom: 1 }} rel="noopener noreferrer">
                        Facebook
                    </Link>
                    <Link className="link link-hover" sx={{ display: 'block', marginBottom: 1 }} rel="noopener noreferrer">
                        Twitter
                    </Link>
                    <Link className="link link-hover"  rel="noopener noreferrer">
                        YouTube
                    </Link>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Footer;

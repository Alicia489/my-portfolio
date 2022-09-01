import * as React from 'react';
import "./footer.scss";
import Grid from '@mui/material/Grid';
import ContactMe from '../ContactMe';
import Container from '@mui/material/Container';

const Footer = () => {
    return (
        <div className='footer-container' id='contactMe'>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs="12" sm="6">
                        <img src='img/pngwing.com.png' style={{width: '100%'}}/>
                    </Grid>
                    <Grid item xs="12" sm="6">
                        <ContactMe />
                    </Grid>
                </Grid>
            </Container>
            <p class="copy-right">© Alisha Sultana 2022</p>
        </div>
    )
}

export default Footer;
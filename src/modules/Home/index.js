import { React } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LayersIcon from '@mui/icons-material/Layers';
import Avatar from '@mui/material/Avatar';

import "./home.scss";
import Tile from './tile';
import { tileData, portfolioData, companyData } from "./tileData"
import PortfoliTile from './porfolioTile';

export default function Home() {
    return (
        <div className='home-container'>
            {/* Section 1 */}
            <div className='section-1'>
                <Container maxWidth="lg">
                    <div className='content-container'>
                        <p>Hi there, I'm</p>
                        <h1>Alisha<br></br> Sultana</h1>
                        <h2>Web developer</h2>
                    </div>

                </Container>

            </div>

            {/* Section 2 - Services */}
            <div className='section-2'>
                <Container maxWidth="lg">
                    <h2>Hi, I'm Alisha. Nice to meet you</h2>
                    <p>
                        Since beginning my journey as a web developer, over 5 years ago, I've created websites for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one website at a time.
                    </p>

                    <Grid container className='tiles-container'>
                        {
                            tileData.map((item, index) => {
                                return (
                                    <Grid item xs="12" sm="4">
                                        <Tile data={item} />
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </Container>

            </div>

            {/* Section 3 - Projects */}
            <div className='section-3' id='projects'>
                <Container maxWidth="lg">
                    <h2>Portfolio projects</h2>

                    <Grid container spacing={2}>
                        {
                            portfolioData.map((item, index) => {
                                return (
                                    <Grid item xs="12" sm="4">
                                        <PortfoliTile data={item} />
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </Container>

            </div>

            {/* Section 4 - Collaborations */}
            <div className='section-4'>
                <Container maxWidth="lg">
                    <h2>I'm proud to have collaborated with</h2>

                    <Grid container className='tiles-container'>
                        <Grid item xs="12" sm="6">
                            <Grid container spacing={2}>
                                {
                                    companyData.map((item, index) => {
                                        return (
                                            <Grid item xs="12" sm="6" className='company-logo-container'>
                                                <img src={`img/${item.imgUrl}`} alt={item.alt}
                                                    className='company-logos' />
                                            </Grid>

                                        )
                                    })
                                }

                            </Grid>
                        </Grid>

                        <Grid item xs="12" sm="6">
                            {/* space for contact me form */}
                        </Grid>
                    </Grid>


                </Container>

            </div>


        </div>
    )
}
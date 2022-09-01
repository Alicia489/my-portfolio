import { React } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';

export default function PortfoliTile(props) {
    const { imgUrl, title, website } = props.data;

    const goToWebsite = () => {
        window.open(website, '_blank')
    }

    return (
        <div className='portfolio-tile'>
            <img src={imgUrl} alt="bg" />

            <div className='details-container'>
                <p>{title}</p>


                <Button variant="outlined" endIcon={<ChevronRightIcon />} onClick={() => goToWebsite()}>
                    Visit website
                </Button>
            </div>
        </div>
    )
}
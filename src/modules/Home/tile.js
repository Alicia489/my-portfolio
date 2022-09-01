import { React } from 'react';
import LayersIcon from '@mui/icons-material/Layers';
import Avatar from '@mui/material/Avatar';


export default function Tile(props) {
    const {icon, title, desc} = props.data;

    return (
        <div className='tile'>
            <Avatar className="icon-container ">
                {icon}
            </Avatar>

            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}
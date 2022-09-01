import React from 'react';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useForm, ValidationError } from '@formspree/react';
import "./contactme.scss";


export default function ContactMe(props) {
    const [projectType, setProjectType] = React.useState('');

    const handleChange = (event) => {
        setProjectType(event.target.value);
    };

    const [state, handleSubmit] = useForm("xyyolajb");
    if (state.succeeded) {
        return(
            <div className="contact-us-form-container min-height">
                <h2>Thank you!</h2>
            </div>
        )
    }

    return (
        <div className="contact-us-form-container">
            <h2>Make your ideas come alive</h2>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs="12" sm="12">
                        <TextField id="name" label="Name" name="name" variant="outlined" />
                    </Grid>
                    <Grid item xs="12" sm="6">
                        <TextField id="email" label="Email" name="email" variant="outlined" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </Grid>
                    <Grid item xs="12" sm="6">
                        <TextField id="phone" label="Phone" variant="outlined" name="phone" />
                    </Grid>
                    <Grid item xs="12" sm="12">
                        <TextField id="company" label="Company" variant="outlined" name="company" />
                    </Grid>
                    <Grid item xs="12" sm="12">
                        <TextField id="desc" label="Short description" variant="outlined" name="desc" />
                    </Grid>
                </Grid>
                <Button type="submit" variant="outlined" disabled={state.submitting} className="submit-button">
                    Submit
                </Button>
            </form>
        </div>
    )
}

import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Form } from './components/Form'
import { List } from './components/List'

export default function App() {

    useEffect(() => {
        axios.get('https://citas-reactive.herokuapp.com/citasReactivas')
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Form />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: 4, paddingRight: 3 }}>
                <List />
            </Grid>
        </Grid>
    )
}

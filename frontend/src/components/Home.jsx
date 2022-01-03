import React from 'react'
import { Grid } from '@mui/material'
import { Form } from './Form'
import { List } from './List'

export const Home = () => {

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Form />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginTop: 4, paddingRight: 3 }}>
                    <List />
                </Grid>
            </Grid>
        </div>
    )
}

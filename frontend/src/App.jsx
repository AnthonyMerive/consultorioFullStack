import { Grid } from '@mui/material'
import React from 'react'
import { Form } from './components/Form'
import { List } from './components/List'

export default function App() {
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

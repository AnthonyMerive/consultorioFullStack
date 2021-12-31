import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import React from 'react'

export const Form = () => {
    return (
        <Box
            sx={{
                marginTop: 6,
                marginLeft: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant="h5" color="text.secondary" align="center">
                AGREGAR CITA
            </Typography>

            <Grid sx={{ marginTop: 2 }} container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        id="nombreMedico"
                        label="Nombre Medico"
                        variant="standard" />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="apellidosMedico"
                        label="Apellidos Medico"
                        variant="standard" />
                </Grid>
            </Grid>
            <Grid sx={{ marginTop: 2 }} container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        id="nombrePaciente"
                        label="Nombre Paciente"
                        variant="standard" />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="apellidosPaciente"
                        label="Apellidos Paciente"
                        variant="standard" />
                </Grid>
            </Grid>
            <Grid sx={{ marginTop: 2 }} container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        id="fechaReservaCita"
                        label="Fecha Reserva"
                        variant="standard" />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="horaReservaCita"
                        label="Hora Reserva"
                        variant="standard" />
                </Grid>

            </Grid>

            <Button sx={{ marginTop: 4 }} variant="contained" endIcon={<SendIcon />}>
                Enviar
            </Button>

        </Box>
    )
}

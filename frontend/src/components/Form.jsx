import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import React from 'react'
import { useForm } from '../hooks/useForm'
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { postAsync } from '../actions/citasAction';


export const Form = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        nombreMedico: '',
        apellidosMedico: '',
        nombrePaciente: '',
        apellidosPaciente: '',
        fechaReservaCita: '',
        horaReservaCita: '',
        idPaciente: uuid(),
        estadoReservaCita: true
    })

    const {
        nombreMedico,
        apellidosMedico,
        nombrePaciente,
        apellidosPaciente,
        fechaReservaCita,
        horaReservaCita,
        idPaciente,
        estadoReservaCita
    } = values;

    const handleSend = (e) => {
        e.preventDefault();
        dispatch(postAsync(values))
        reset();
    }

    return (

        <form onSubmit={handleSend}>
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
                            sx={{ width: 250 }}
                            id="nombreMedico"
                            label="Nombres Medico"
                            variant="standard"
                            name="nombreMedico"
                            value={nombreMedico}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            sx={{ width: 250 }}
                            id="apellidosMedico"
                            label="Apellidos Medico"
                            variant="standard"
                            name="apellidosMedico"
                            value={apellidosMedico}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
                <Grid sx={{ marginTop: 2 }} container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            sx={{ width: 250 }}
                            id="nombrePaciente"
                            label="Nombres Paciente"
                            variant="standard"
                            name="nombrePaciente"
                            value={nombrePaciente}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            sx={{ width: 250 }}
                            id="apellidosPaciente"
                            label="Apellidos Paciente"
                            variant="standard"
                            name="apellidosPaciente"
                            value={apellidosPaciente}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
                <Grid sx={{ marginTop: 4 }} container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            id="date"
                            label="Fecha Reserva"
                            type="date"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="fechaReservaCita"
                            value={fechaReservaCita}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            id="time"
                            label="Hora Reserva"
                            type="time"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300,
                            }}
                            sx={{ width: 180 }}
                            name="horaReservaCita"
                            value={horaReservaCita}
                            onChange={handleInputChange}
                        />
                    </Grid>

                </Grid>

                <Button
                    type="submit"
                    sx={{ marginTop: 4 }}
                    variant="contained"
                    endIcon={<SendIcon />}
                >
                    Enviar
                </Button>

            </Box>

        </form>
    )
}

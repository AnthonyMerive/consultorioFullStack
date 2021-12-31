import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getAsync } from '../actions/citasAction';

export const List = () => {

    const rows = useSelector(store => store.citas.citasGET)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAsync())
    }, [dispatch])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nombreMedico', headerName: 'Nombre Medico', width: 80 },
        { field: 'apellidosMedico', headerName: 'Apellidos Medico', width: 130 },
        { field: 'nombrePaciente', headerName: 'Nombre Paciente', width: 80 },
        { field: 'apellidosPaciente', headerName: 'Apellidos Paciente', width: 130 },
        { field: 'fechaReservaCita', headerName: 'Fecha Cita', width: 130 },
        { field: 'horaReservaCita', headerName: 'Hora', width: 130 },
    ];

    return (
        <div style={{ height: 400, width: '100%' }} >
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                
            />
        </div >
    )
}

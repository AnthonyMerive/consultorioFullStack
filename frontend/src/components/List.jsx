import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

export const List = () => {

    const [rows, setRows] = useState([])
    useEffect(() => {
        axios.get('https://citas-reactive.herokuapp.com/citasReactivas')
            .then(function (response) {
                console.log(response.data);
                setRows(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nombreMedico', headerName: 'Nombre Medico', width: 130 },
        { field: 'apellidosMedico', headerName: 'Apellidos Medico', width: 130 },
        { field: 'nombrePaciente', headerName: 'Nombre Paciente', width: 130 },
        { field: 'apellidosPaciente', headerName: 'Apellidos Paciente', width: 130 },
        { field: 'fechaReservaCita', headerName: 'Fecha Cita', width: 130 },
        { field: 'horaReservaCita', headerName: 'Hora', width: 130 },
    ];

    // rows = [
    //     { id: 1, nombreMedico: 'Snow', apellidosMedico: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];

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

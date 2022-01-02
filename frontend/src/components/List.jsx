import * as React from 'react';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
    useGridApiRef,
    DataGridPro,
    GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync, getAsync, putAsync } from '../actions/citasAction';


export const List = () => {

    const rows = useSelector(store => store.citas.citasGET)

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getAsync())
    }, [dispatch])

    const apiRef = useGridApiRef();

    const handleRowEditStart = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleRowEditStop = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleCellFocusOut = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleEditClick = (id) => (event) => {
        event.stopPropagation();
        apiRef.current.setRowMode(id, 'edit');
    };

    const handleSaveClick = (id) => (event) => {
        event.stopPropagation();
        apiRef.current.commitRowChange(id);
        apiRef.current.setRowMode(id, 'view');
        const row = apiRef.current.getRow(id);
        dispatch(putAsync(row))
    };

    const handleDeleteClick = (id) => (event) => {
        event.stopPropagation();
        dispatch(deleteAsync(id))
    };

    const handleCancelClick = (id) => (event) => {
        event.stopPropagation();
        apiRef.current.setRowMode(id, 'view');

        const row = apiRef.current.getRow(id);
        if (row.isNew) {
            apiRef.current.updateRows([{ id, _action: 'delete' }]);
        }
    };

    const columns = [

        {
            field: 'nombreMedico',
            headerName: 'Nombre Medico',
            width: 150,
            editable: true,
        },
        {
            field: 'apellidosMedico',
            headerName: 'Apellidos Medico',
            width: 150,
            editable: true
        },
        {
            field: 'nombrePaciente',
            headerName: 'Nombre Paciente',
            width: 150,
            editable: true
        },
        {
            field: 'apellidosPaciente',
            headerName: 'Apellidos Paciente',
            width: 150,
            editable: true
        },
        {
            field: 'fechaReservaCita',
            headerName: 'Fecha Cita',
            width: 100,
            editable: false
        },
        {
            field: 'horaReservaCita',
            headerName: 'Hora',
            width: 70,
            editable: false
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Acciones',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = apiRef.current.getRowMode(id) === 'edit';

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            onClick={handleSaveClick(id)}
                            color="primary"
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        <Box
            sx={{
                height: 500,
                width: '100%',
                '& .actions': {
                    color: 'text.secondary',
                },
                '& .textPrimary': {
                    color: 'text.primary',
                },
            }}
        >
            <DataGridPro
                rows={rows}
                columns={columns}
                apiRef={apiRef}
                editMode="row"
                onRowEditStart={handleRowEditStart}
                onRowEditStop={handleRowEditStop}
                onCellFocusOut={handleCellFocusOut}
                componentsProps={{
                    toolbar: { apiRef },
                }}
            />
        </Box>
    );
}

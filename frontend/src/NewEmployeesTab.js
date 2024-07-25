// NewEmployeesTab.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import PeopleIcon from '@mui/icons-material/People';


export default function NewEmployeesTab({ newEmployeesCount }) {
    return ( <
        Box sx = {
            { mt: 3 } } >
        <
        Paper sx = {
            {
                width: 269,
                height: 88,
                backgroundColor: '#CAC4C4',
                borderRadius: 4,
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        } >
        <
        PeopleIcon sx = {
            { fontSize: 48, marginRight: 1 }
        }
        /> <
        Typography variant = "h6"
        component = "div" >
        Nhân viên mới: { newEmployeesCount } <
        /Typography> <
        /Paper> <
        /Box>
    );
}
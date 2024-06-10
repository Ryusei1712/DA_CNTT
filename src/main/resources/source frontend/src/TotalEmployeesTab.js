import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';

const TotalEmployeesTab = () => {
    const [totalEmployees, setTotalEmployees] = useState(0);

    useEffect(() => {
        const fetchTotalEmployees = async () => {
            try {
                const response = await fetch('/api/employees');
                const data = await response.json();
                // Assuming the API returns an array of employees
                // You can count the length of the array to get the total number of employees
                setTotalEmployees(data.length);
            } catch (error) {
                console.error('Error fetching total employees:', error);
            }
        };

        fetchTotalEmployees();
    }, []);

    return (
        <Box sx={{ mt: 3 }}>
            <Paper sx={{
                width: 269,
                height: 88,
                backgroundColor: '#CAC4C4',
                borderRadius: 4,
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <PeopleIcon sx={{ fontSize: 48, marginRight: 1 }} />
                <Typography variant="h6" component="div">
                    Tổng nhân viên: {totalEmployees}
                </Typography>
            </Paper>
        </Box>
    );
};

export default TotalEmployeesTab;

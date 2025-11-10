import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Users: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                User Management
            </Typography>
            <Button variant="contained" color="primary">
                Add User
            </Button>
            {/* Additional user management functionalities will be implemented here */}
        </Container>
    );
};

export default Users;
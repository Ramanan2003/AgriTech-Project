import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddLoanPage = () => {
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleAddLoan = () => {
    // Implement logic to add the new loan to the database or API
    console.log('Adding new loan...');
    console.log('Loan Type:', loanType);
    console.log('Loan Amount:', loanAmount);
    console.log('Status:', status);
    // You can use APIs or other methods to save the loan details to your backend
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Add Loan
      </Typography>

      <TextField
        label="Loan Type"
        variant="outlined"
        fullWidth
        margin="normal"
        value={loanType}
        onChange={(e) => setLoanType(e.target.value)}
      />

      <TextField
        label="Loan Amount"
        variant="outlined"
        fullWidth
        margin="normal"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
      />

      <TextField
        label="Status"
        variant="outlined"
        fullWidth
        margin="normal"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ marginTop: '20px' }}
        onClick={handleAddLoan}
      >
        Add Loan
      </Button>
    </Container>
  );
};

export default AddLoanPage;

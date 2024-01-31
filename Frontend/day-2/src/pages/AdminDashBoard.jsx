// AdminDashboard.jsx

import React, { useState } from 'react';
import '../assets/css/AdminDashboardStyles.css';
import AdminNavbar from '../assets/Components/AdminNavBar';
const AdminDashboard = () => {
  const [agricultureLoans, setAgricultureLoans] = useState([
    { id: 1, farmer: 'John Doe', amount: 5000, status: 'Pending' },
    { id: 2, farmer: 'Jane Smith', amount: 8000, status: 'Pending' },
    { id: 3, farmer: 'Alice Johnson', amount: 6500, status: 'Pending' },
    { id: 4, farmer: 'Bob Williams', amount: 7200, status: 'Pending' },
    { id: 5, farmer: 'Emily Davis', amount: 5500, status: 'Pending' },
    // Add more sample data as needed
  ]);

  const handleApprove = (loanId) => {
    setAgricultureLoans((loans) =>
      loans.map((loan) =>
        loan.id === loanId ? { ...loan, status: 'Approved' } : loan
      )
    );
  };

  const handleReject = (loanId) => {
    setAgricultureLoans((loans) =>
      loans.map((loan) =>
        loan.id === loanId ? { ...loan, status: 'Rejected' } : loan
      )
    );
  };

  return (
    <>
    <AdminNavbar/>
    <div className="admin-color">
    <div className="admin-dashboard-container">
      <h2>Agriculture Loan Management Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Farmer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {agricultureLoans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.farmer}</td>
              <td>${loan.amount}</td>
              <td>{loan.status}</td>
              <td>
                {loan.status === 'Pending' && (
                  <>
                    <button onClick={() => handleApprove(loan.id)}>
                      Approve
                    </button>
                    <button onClick={() => handleReject(loan.id)}>
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="admin-stats">
        <h3>Admin Statistics</h3>
        <div className="stat-item">
          <p>Total Loans Processed:</p>
          <span>{agricultureLoans.length}</span>
        </div>
        <div className="stat-item">
          <p>Approved Loans:</p>
          <span>{agricultureLoans.filter((loan) => loan.status === 'Approved').length}</span>
        </div>
        <div className="stat-item">
          <p>Rejected Loans:</p>
          <span>{agricultureLoans.filter((loan) => loan.status === 'Rejected').length}</span>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default AdminDashboard;

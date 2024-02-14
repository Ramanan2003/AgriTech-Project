import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/DashboardStyle.css';
import Navbar from '../assets/Components/NavBar';
import axios from 'axios'; // Import Axios for making HTTP requests

const DashboardPage = () => {
  const [loanId, setLoanId] = useState('');
  const [loanDetails, setLoanDetails] = useState(null);
  const [dashboardItems, setDashboardItems] = useState([]);

  useEffect(() => {
    // Fetch dashboard items when component mounts
    fetchDashboardItems();
  }, []);

  const fetchDashboardItems = () => {
    // Simulated data, replace with actual API call to fetch dashboard items
    const dashboardData = [
      {
        name: "Seasonal Crop Loan",
        image: "src/assets/images/seasonal_crop.jpg",
        description: "This scheme provides financial assistance to farmers for seasonal agricultural operations, including the purchase of seeds, fertilizers, and other inputs.",
        route: "/seasonal-crop-loan"
      },
      {
        name: "Farm Equipment Loan",
        image: "src/assets/images/farm_equ.avif",
        description: "Obtain funding for the purchase of modern farm equipment to enhance efficiency and productivity.",


        route: "/farm-equipment-loan"
      },
      {
        name: "Livestock Development Loan",
        image: "src/assets/images/lifestock.avif",
        description: "Support for farmers involved in animal husbandry, including the purchase and care of livestock.",
        route: "/livestock-development-loan"
      },
      {
        name: "Microenterprise Loan",
        image: "src/assets/images/micro.jpg",
        description: "Financial support for small businesses and entrepreneurs to help them grow and succeed.",
        route: "/microenterprise-loan"
      },
      // Add more items as needed
    ];

    setDashboardItems(dashboardData);
  };

  const handleSearch = () => {
    // Make API call to fetch loan details based on loanId
    axios.get(`http://localhost:8081/loanApplicants/${loanId}`)
      .then(response => {
        setLoanDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching loan details:', error);
        // Handle error, maybe display a message to the user
      });
  };

  return (
    <>
      <Navbar />

      <div>
        <h2 className="dashboard-title">Welcome to Your Dashboard, User</h2>
        <div className="dashboard-container">
          <h1 className="dashboard-title">Loan Schemes</h1>
          <div className="dashboard-list">
            {dashboardItems.map((item, index) => (
              <div className="dashboard-item" key={index}>
                <Link to={item.route} className="dashboard-button">
                  <h2 className="dashboard-name">{item.name}</h2>
                </Link>
                <img src={item.image} alt={item.name} />
                <p className="dashboard-description">{item.description}</p>
                <div className="dashboard-buttons">
                  <Link to="/loans" className="apply-now-button">
                    Apply Now
                  </Link>
                  <Link to="/" className="know-more-button">Know More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="loan-status-container">
          <h2 className="loan-status-title">Loan Status</h2>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search by loan ID"
              value={loanId}
              onChange={(e) => setLoanId(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
          </div>
          {loanDetails && (
            <div className="loan-details">
              {/* Display loan details */}
              <p>Loan ID: {loanDetails.id}</p>
              <p>Loan Type: {loanDetails.loanType}</p>
              <p>Applicant Name: {loanDetails.applicantName}</p>
              <p>Applicant Address: {loanDetails.applicantAddress}</p>
              <p>Applicant Mobile: {loanDetails.applicantMobile}</p>
              <p>Applicant Email: {loanDetails.applicantEmail}</p>
              <p>Applicant Aadhaar: {loanDetails.applicantAadhaar}</p>
              <p>Applicant Pan: {loanDetails.applicantPan}</p>
              <p>Applicant Salary: {loanDetails.applicantSalary}</p>
              <p>Loan Amount Required: {loanDetails.loanAmountRequired}</p>
              <p>Loan Repayment Months: {loanDetails.loanRepaymentMonths}</p>
              <p>Status: {loanDetails.status}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

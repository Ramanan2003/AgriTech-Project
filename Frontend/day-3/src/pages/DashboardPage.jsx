// pages/DashboardPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/DashboardStyle.css';
import Navbar from '../assets/Components/Navbar';

const DashboardPage = () => {
  const dashboardItems = [
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

  return (
    <>
    <Navbar/>
  
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
    </div>
    </>
  );
};

export default DashboardPage;

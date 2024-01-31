import React from 'react';
import '../assets/css/UserProfileStyle.css';

const UserProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
      </div>
      <div className="profile-info">
        <div className="profile-picture">
          {/* You can replace the placeholder URL with the actual profile picture */}
          <img src="src\assets\images\soorya.png" alt="Profile" />
        </div>
        <div className="profile-details">
          <h3>Soorya .S </h3>
          <p>Email: Soorya7@gmail.com</p>
          <p>Phone: 91+ 8921567393</p>
          <p>Address: 13 alanganalur Lane,Madurai</p>
        </div>
      </div>
      <div className="loan-details">
        <h3>Loan Information</h3>
        <p>Loan Type: Seasonal Crop Loan</p>
        <p>Loan Amount: $10,000</p>
        <p>Status: Approved</p>
        <p>Next Payment Due: 2024-03-01</p>
      </div>
    </div>
  );
};

export default UserProfile;

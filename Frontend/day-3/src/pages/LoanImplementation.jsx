// // pages/LoanImplementation.jsx

// import React, { useState } from 'react';
// import '../assets/css/LoanImplementationStyles.css';

// const LoanImplementation = () => {
//   const [loanDetails, setLoanDetails] = useState({
//     farmerName: '',
//     cropType: '',
//     loanAmount: '',
//     duration: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoanDetails({
//       ...loanDetails,
//       [name]: value,
//     });
//   };

//   const handleLoanSubmission = (e) => {
//     e.preventDefault();
//     // Add logic for loan submission or API call here
//     console.log('Loan details submitted:', loanDetails);
//   };

//   return (
//     <div className="loan-implementation-container">
//       <h1 className="loan-title">Loan Implementation</h1>
//       <form className="loan-form" onSubmit={handleLoanSubmission}>
//         <div className="form-group">
//           <label htmlFor="farmerName">Farmer's Name:</label>
//           <input
//             type="text"
//             id="farmerName"
//             name="farmerName"
//             value={loanDetails.farmerName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="cropType">Crop Type:</label>
//           <input
//             type="text"
//             id="cropType"
//             name="cropType"
//             value={loanDetails.cropType}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="loanAmount">Loan Amount:</label>
//           <input
//             type="number"
//             id="loanAmount"
//             name="loanAmount"
//             value={loanDetails.loanAmount}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="duration">Loan Duration (in months):</label>
//           <input
//             type="number"
//             id="duration"
//             name="duration"
//             value={loanDetails.duration}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit" className="submit-button">Submit Loan Application</button>
//       </form>
//     </div>
//   );
// };

// export default LoanImplementation;


// pages/LoanImplementation.jsx

// pages/LoanImplementation.jsx

import React, { useState } from 'react';
import '../assets/css/LoanImplementationStyles.css';

const LoanImplementation = () => {
  const [loanDetails, setLoanDetails] = useState({
    farmerName: '',
    cropType: '',
    loanAmount: '',
    duration: '',
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails({
      ...loanDetails,
      [name]: value,
    });
  };

  const handleLoanSubmission = (e) => {
    e.preventDefault();
    // Add logic for loan submission or API call here
    console.log('Loan details submitted:', loanDetails);
  };

  const handleSearch = () => {
    // Add logic for searching loan status based on searchQuery
    console.log('Searching for loan status:', searchQuery);
  };

  return (
    <div className="loan-implementation-container">
      <h1 className="loan-title">Loan Implementation</h1>
      <form className="loan-form" onSubmit={handleLoanSubmission}>
        <div className="form-group">
          <label htmlFor="farmerName">Farmer's Name:</label>
          <input
            type="text"
            id="farmerName"
            name="farmerName"
            value={loanDetails.farmerName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cropType">Crop Type:</label>
          <input
            type="text"
            id="cropType"
            name="cropType"
            value={loanDetails.cropType}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount:</label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={loanDetails.loanAmount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Loan Duration (in months):</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={loanDetails.duration}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Loan Application</button>
      </form>

      <div className="loan-status-container">
        <h2 className="loan-status-title">Loan Status</h2>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search by farmer name or application ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
        {/* Display loan status based on the search results */}
        {/* ... */}
      </div>
    </div>
  );
};

export default LoanImplementation;



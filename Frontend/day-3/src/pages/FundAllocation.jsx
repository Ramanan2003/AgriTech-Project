// FundAllocationPage.jsx

import React, { useState } from 'react';
import '../assets/css/FundAllocationPage.css';
import Navbar from '../assets/Components/Navbar';

const FundAllocationPage = () => {
  const [allocation, setAllocation] = useState({
    seeds: 0,
    fertilizers: 0,
    equipment: 0,
    labor: 0,
  });

  const handleAllocationChange = (category, value) => {
    setAllocation({
      ...allocation,
      [category]: value,
    });
  };

  return (
    <>
   <Navbar/>
    <div className="scenary">

    <div className="fund-allocation-page">
      <div className="header-section">
        <h1 className="h1">Fund Allocation for Agriculture</h1>
        <p className="subtitle">Optimizing resources for a bountiful harvest</p>
      </div>
      <div className="allocation-form">
        <div className="allocation-item">
          <label className="label">Seeds:</label>
          <input
            className="input"
            type="number"
            value={allocation.seeds}
            onChange={(e) => handleAllocationChange('seeds', e.target.value)}
            />
        </div>
        <div className="allocation-item">
          <label className="label">Fertilizers:</label>
          <input
            className="input"
            type="number"
            value={allocation.fertilizers}
            onChange={(e) => handleAllocationChange('fertilizers', e.target.value)}
            />
        </div>
        <div className="allocation-item">
          <label className="label">Equipment:</label>
          </div>
          <input
            className="input"
            type="number"
            value={allocation.equipment}
            onChange={(e) => handleAllocationChange('equipment', e.target.value)}
          />
        </div>
        <div className="allocation-item">
          <label className="label">Labor:</label>
          <input
            className="input"
            type="number"
            value={allocation.labor}
            onChange={(e) => handleAllocationChange('labor', e.target.value)}
          />
        </div>
      </div>
      <div className="total-allocation">
        <h2 className="h2">Total Allocation: ${Object.values(allocation).reduce((acc, val) => acc + parseInt(val), 0)}</h2>
      </div>
      <div className="additional-info">
        <h3 className="h3">Additional Information</h3>
        <p className="p"> 
          Make informed decisions by allocating funds strategically. Adjust the allocation based on crop types, seasonal
          variations, and market demands.
        </p>
      </div>
    </div>
    </>
  );
};

export default FundAllocationPage;

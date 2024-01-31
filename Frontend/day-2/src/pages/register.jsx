// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/registration.css'; // Import your CSS file

// const Registration = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistered, setIsRegistered] = useState(false);

//   const handleRegistration = (e) => {
//     e.preventDefault();
//     // Simulating a registration process
//     setIsRegistered(true);
//     // You might want to add additional logic for handling registration in a real application
//   };

//   return (
//     <div className="content-container">
//       {isRegistered ? (
//         <div>
//           <p>Registration successful, {username}!</p>
//           {/* You might want to redirect the user to the login page or any other page after registration */}
//           <p>Already have an account? <Link to="/login">Login here</Link></p>
//         </div>
//       ) : (
//         <div>
//           <h2 className="h2">Register</h2>
//           <form onSubmit={handleRegistration}>
//             <label>
//               Username:
//               <input className="input"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </label>
//             <br />
//             <label>
//               Email:
//               <input className="input"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </label>
//             <br />
//             <label>
//               Password:
//               <input className='input'
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </label>
//             <br />
//             <button type="submit">Register</button>
//           </form>
//           <p>Already have an account? <Link to="/login">Login here</Link></p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Registration;

// 2 this is the new codde


import  { useState } from 'react';
import {Link} from "react-router-dom";
import '../assets/css/Registration.css';
function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-color">

    <div className="registration-form-container">
      <h2>Agriculture Loan Registration</h2>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            />
        </label>

        <label className="label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </label>

        <label className="label">
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label className="label">
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </label>

        <button type="submit">Submit</button>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
      </form>
            </div>
    </div>
  );
}
export default RegistrationForm;
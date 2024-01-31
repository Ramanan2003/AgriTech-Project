import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Navbar from "./components/Navbar";
import LoginPage from "./pages/login";
import Registration from "./pages/register";
import FundAllocationPage from "./pages/FundAllocation";
import Scheme from "./pages/scheme";
import LoanImplementation from "./pages/LoanImplementation";
import DashboardPage from "./pages/DashboardPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashBoard";
import UserProfile from "./pages/UserProfile";
function App()
{
  return(
    <Router>
    
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/fund allocation" element={<FundAllocationPage/>}/>
        <Route path="/schemes" element={<Scheme/>}/>
        <Route path="/loans" element={<LoanImplementation/>}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/admin/login"element={<AdminLogin/>}/>
        <Route path="/admin/dashboard"element={<AdminDashboard/>}/>
        <Route path="/profile"element={<UserProfile/>}/>
        <Route path="/about us" element={<About/>}/>
        {/* <Route path="/admin/dashboard" element={<AdminDashboard/>}/> */}
        <Route path="/" element={<Home/>}/>
      
      </Routes>
    </Router>
  )
}
export default App;
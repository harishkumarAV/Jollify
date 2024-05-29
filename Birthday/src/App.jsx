import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Contact from './components/Contact';
import Explore from './components/Explore';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import FAQ from './components/FAQ';
import ForgotPassword from './components/ForgotPassword';
import BookingForm from './components/BookingForm';
import InfoSection from './components/InfoSection';
import Find from './components/Find';
import Spinner from './components/Spinner';
import Recipe from './components/Recipe';
import Confirm from './components/Confirm';
import YourOrders from './components/YourOrders';
import MenuPage from './components/MenuPage';
import ButtonAppBar from './components/NavBar';
import Sidebar from './pages/Admin/Sidebar';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminAddTheme from './pages/Admin/AdminAddTheme';
import AdminAddFood from './pages/Admin/AdminAddFood';
import AdminAddones from './pages/Admin/AdminAddones';
import EditTheme from './pages/Admin/EditTheme';
import EditFood from './pages/Admin/EditFood';
import EditAddons from './pages/Admin/EditAddons';

export default function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Welcome/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Signup/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Explore" element={<Explore/>} />
        <Route path="/Terms" element={<TermsAndConditions/>} />
        <Route path="/Privacy" element={<PrivacyPolicy/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/BookingForm" element={<BookingForm/>} />
        <Route path="/Info" element={<InfoSection/>} />
        <Route path="/find" element={<Find/>} />
        <Route path="/Spinner" element={<Spinner/>} />
        <Route path="/Recipe" element={<Recipe/>} />
        <Route path="/Confirm" element={<Confirm/>} />
        <Route path="/Orders" element={<YourOrders/>} />
        <Route path="/Menu" element={<MenuPage/>} />
        <Route path="/Nav" element={<ButtonAppBar/>} />
        <Route path="/Sidebar" element={<Sidebar/>} />
        <Route path="/AdminDashboard" element={<AdminDashboard/>} />
        <Route path="/AdminAddTheme" element={<AdminAddTheme/>} />
        <Route path="/AdminAddFood" element={<AdminAddFood/>} />
        <Route path="/AdminAddones" element={<AdminAddones/>} />
        <Route path="/EditTheme" element={<EditTheme/>} />
        <Route path="/EditFood" element={<EditFood/>} />
        <Route path="/EditAddons" element={<EditAddons/>} />
        </Routes>
    </BrowserRouter>
  );
}

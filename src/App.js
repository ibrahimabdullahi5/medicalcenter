import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Component/Home/Home';
import Aboutus from './Component/About/Aboutus';
import Departments from './Component/Departments/Departments';
import ConsultantClinics from './Component/Consultant/ConsultantClinics';
import Contact from './Component/Contacts/Contacts';
import NavBar from './Component/Navbar/NavBar';
import Footer from './Component/Footer/Footer';
import Admin from './Component/Admin/Admin';
import Values from './Component/value/Values';
import ClinicalServices from './Component/Clinical/ClinicalServices';

import Pharmacy from './Component/Pharmacy/Pharmacy';
import Laboratory from './Component/Laboratory/Laboratory';
import Radiology from './Component/Radiology/Radiology';
import ENT from './Component/ENT/ENT';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/about' element={<Aboutus />} />
                <Route path='/departments' element={<Departments />} />
                <Route path='/ConsultantClinics' element={<ConsultantClinics />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/pharmacy' element={<Pharmacy />} />
                <Route path='/laboratory' element={<Laboratory />} />
                <Route path='/radiology' element={<Radiology />} />
                <Route path="/ent" element={<ENT />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';

import Contact from './pages/Contact';
import Home from './pages/home';
import Blogs from './pages/Blogs';
import Form from './pages/Form';
import Footer from './pages/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Shoes,Cars} from './pages/Product';


function App() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={<Cars />} />

        <Route path="home" element={<Home />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Form" element={<Form />} />
        <Route path="Product" element={<Shoes />}/>
        <Route path="Footer" element={<Footer />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


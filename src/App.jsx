import { useLocation } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './assets/Components/Landing';
import Navbar from './assets/Components/Navbar';
import AboutUs from './assets/Components/AboutUs';
import Contact from './assets/Components/Contact';
import Recent from './assets/Components/Recent';
import Project from './assets/Components/ProjectName'

function App() {
  const location = useLocation();
  const hideNavAndFooterRoutes = ['/'];

  return (
    <>
      {/* Conditionally render Navbar based on the route */}
      {!hideNavAndFooterRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/About-Us' element={<AboutUs/>}/>
        {/* <Route path='/Recent-Project' element={<Recent/>} /> */}
        <Route path="/Project" element={<Project/>}/>

        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
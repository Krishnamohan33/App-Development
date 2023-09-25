import Notification from './component/Notification';
import  RegistrationForm from './component/RegistrationForm';
import { Dashboard } from './component/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./component/Login";
import Terms from "./ComponentS/Terms";
import PrivacyPolicy from "./ComponentS/privacy";
import FaqSection from "./ComponentS/Faq";
import Home from '@mui/icons-material/Home';
import About from './ComponentS/About';
import IncidentReportingForm from './component/IncidentReporting';
import LandingPage from './ComponentS/LandingPage';
import FileUploadForm from './component/UniqueFileUpload';
import StatusPage from './component/status';
import Cases from './component/Crimesolved';
import Chat from './component/Message';
import Contact from './ComponentS/Contact';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/privacy" element={<PrivacyPolicy/>}/>
      <Route path="/faq" element={<FaqSection/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path='/registrationform' element={<RegistrationForm/>}/>
      <Route path="/notification" element={<Notification/>}/>   
      <Route path="/home"element={<Home/>}/>
      <Route path="about"element={<About/>}/>
      <Route path="/incidentreporting" element={<IncidentReportingForm/>}/>
      <Route path="/fileuploadpage" element={<FileUploadForm/>}/>
      <Route path="/status" element={<StatusPage/>}/>
      <Route path="/cases" element={<Cases/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
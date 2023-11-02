import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import RequestTutor from './Components/Pages/RequestTutor/RequestTutor';
import FindTutor from './Components/Pages/FindTutor/FindTutor';
import BecomeaTutor from './Components/Pages/BecomeaTutor/BecomeaTutor';
import NotFoundpage from './Components/Pages/NotFoundPage/NotFoundPage';
import TutionJob from './Components/Pages/TutionJob/TutionJob';
import Resources from './Components/Pages/Resources/resources';
import Blog from './Components/Pages/Blog/Blog';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/request_tutor" element={<RequestTutor />} />
        <Route path="/find_tutor" element={<FindTutor />} />
        <Route path='/becomea_tutor' element={<BecomeaTutor />} />
        <Route path='/tutor_job' element={<TutionJob />} />
        <Route path='/tutor_resources' element={<Resources />} />
        <Route path='/tutor_blog' element={<Blog />} />
        {/*  <Route path="/find_tutor" element={<FindTutor/>}/> */}
{/*-------------------- NotFound page start--------------------- */}
        <Route path="/404" element={<NotFoundpage />} />
        <Route path="*" element={<Navigate to="/404" />} />
{/*---------------------- NotFound page End------------------------ */}
      </Routes>


    </>
  )
}

export default App
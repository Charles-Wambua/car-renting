import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Vehicle } from './pages/Vehicle';
import { Testimonials } from './pages/Testimonials';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import {Navbar} from './components/Navbar.js'
import { BookRide } from './subpages/bookRide';
import { LearMore } from './subpages/learnMore';
import { CarOwners } from './pages/carOwners';
import { FindDetails } from './subpages/find-details';
import { PostCar } from './subpages/postCar';
import { Rides } from './subpages/rides';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/footer" element={< About/>} />
          <Route path="/vehicleModels" element={< Vehicle/>} />
          <Route path="/testimonials" element={ <Testimonials/>} />
          <Route path="/ChooseUs" element={ <Team/>} />
          <Route path="/contact-us" element={ <Contact/>} />
          <Route path="/login" element={< Login/>} />
          <Route path="/register" element={ <Register/>} />
          <Route path="/book-ride" element={ <BookRide/>} />
          <Route path="/learn-more" element={<LearMore />} />
          <Route path='/car-owners' element={ <CarOwners/>} />
          <Route path='/find-details' element={ <FindDetails/>} />
          <Route path='/postcar' element={<PostCar />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/rides/:cartype" element={<Rides />} />

        
        </Routes>
    </Router>
    </div>
  );
}

export default App;

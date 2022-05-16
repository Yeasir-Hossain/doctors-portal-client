import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './pages/Shared/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Appointment from './pages/Appointment/Appointment';


function App() {
  return (
    <div  className='max-w-7xl mx-auto px-12'>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>} />
       <Route path='/about' element={<About></About>} />
       <Route path='/login' element={<Login></Login>} />
       <Route path='/appointment' element={<Appointment></Appointment>} />
     </Routes>
    </div>
  );
}

export default App;

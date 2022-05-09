import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './pages/Shared/Header.js/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>} />
       <Route path='/about' element={<About></About>} />
       <Route path='/login' element={<Login></Login>} />
     </Routes>
    </div>
  );
}

export default App;

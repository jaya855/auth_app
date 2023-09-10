
import { Link, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      
    <nav className='navv'>
      < div>
        <ul className='ull'>
          <li><Link to="/" style={{textDecoration: 'none',color:'#3C2A21'}}>HOME</Link></li>
          <li><Link to="/About" style={{textDecoration: 'none',color:'#3C2A21'}}>ABOUT</Link></li>
          <li><Link to="/Contact" style={{textDecoration: 'none',color:'#3C2A21'}}>CONTACT</Link></li>
         </ul>
      </div>
      <div className='authbuttons'>
        <button><Link to={"/Login"} style={{textDecoration: 'none'}}>LOGIN</Link></button>
        <button><Link to={"/Signup"} style={{textDecoration: 'none'}}>SIGNUP</Link></button>
      </div>
    </nav>


    <div className='mid'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
    </div>
    
   <div className='myfooter'>
   <div className='left'>
   &copy; 2023 copyright : It's magic
   </div>
   
   <div className='right'>
   made with extreme love ❤ by Jaya Srivastava

   </div>
    
    </div>
    </div>
  );
}

export default App;

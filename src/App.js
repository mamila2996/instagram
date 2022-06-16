import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loginpage  from './Component/login';
import Signuppage from './Component/signup';
import ErrorPage from './Component/errorpage';

function App() {
  return (
 
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Loginpage />} />
          <Route path='/signup' element={<Signuppage />} />
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </Router>
      
    {/* <Route component={App} />
      <Route path="/home"component={Loginpage} />
      <Route exact path="/signup" component={Signuppage} />   */}
    </div>
    
    
  );
}

export default App;

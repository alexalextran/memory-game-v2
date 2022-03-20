import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./Contexts/AuthContext";
import Homepage from './Pages/HomePage';
import Loginpage from './Pages/LoginPage';
import PrivateRoute from './PrivateRoute';
import './Sass&Css/App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
    <AuthProvider>
        <Routes basename={process.env.PUBLIC_URL}>
         

          <Route path="/login" exact element={<Loginpage/>} />

          <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<Homepage />} />
            </Route>
         
          
        </Routes>
    </AuthProvider>
    </div>
  </BrowserRouter>
);
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./Contexts/AuthContext";
import Homepage from './Pages/HomePage';
import Loginpage from './Pages/LoginPage';
import './Sass&Css/App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
    <AuthProvider>
        <Routes basename={process.env.PUBLIC_URL}>
         

          <Route path="/login" exact element={<Loginpage/>} />

          <Route path="/" exact element={<Homepage/>} />
         
          
        </Routes>
    </AuthProvider>
    </div>
  </BrowserRouter>
);
}

export default App;

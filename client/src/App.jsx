import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Logout from './Components/Logout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

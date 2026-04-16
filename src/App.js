import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './Components/AddUser';
import ViewAllUsers from './Components/ViewAllUsers';
import Login from './Components/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/Add" element={<AddUser />} />
    <Route path="/ViewAll" element={<ViewAllUsers />} />
    <Route path="/" element={<Login />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;

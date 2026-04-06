import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './Components/AddUser';
import ViewAllUsers from './Components/ViewAllUsers';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddUser />} />
    <Route path="/ViewAll" element={<ViewAllUsers />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;

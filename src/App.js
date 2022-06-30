import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import ToDo from './Pages/ToDo/ToDo';
import Navbar from './Pages/Home/Navbar';

function App() {
  return (
    <div className="px-12 max-w-5xl mx-auto bg-gray-200">
      <Navbar></Navbar>
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
       </Routes>
    </div>
  );
}

export default App;

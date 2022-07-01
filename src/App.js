import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import ToDo from './Pages/ToDo/ToDo';
import Navbar from './Pages/Home/Navbar';
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/Footer/Footer';
import CompleteTask from './Pages/CompleteTask/CompleteTask';
import Calendar from './Pages/Calendar/Calendar';

function App() {
  return (
    <div className="max-w-5xl mx-auto bg-gray-200">
      <Navbar></Navbar>
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/complete' element={<CompleteTask></CompleteTask>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
       </Routes>
       <ToastContainer/>
       <Footer></Footer>
    </div>
  );
}

export default App;

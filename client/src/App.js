// import { Route, useLocation, Routes } from 'react-router-dom';
import { Route, useLocation, Routes } from 'react-router-dom';
import './App.css';
import { Detail, Form, Home, Landing, NotFound } from './views/index'
import NavBar from './component/Navbar/NavBar';

function App() {

  const location = useLocation()
  // console.log(location);
  return (
    <div className="App">
      {/* <Router> */}
      {location.pathname !== '/' && <NavBar></NavBar>}
      <Routes>
        <Route exact path="/" element={<Landing />} ></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/create" element={<Form />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;

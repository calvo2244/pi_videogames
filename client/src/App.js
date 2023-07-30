import { Route, useLocation } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import { Detail, Form, Home, Landing } from './views/index'
import NavBar from './component/Navbar/NavBar';

function App() {

  const location = useLocation()
  // console.log(location);
  
  return (
    <div className="App">
      {/* <Routes> */}
      {location.pathname !== '/' && <NavBar></NavBar>}
      <Route exact path="/" component={Landing} ></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/detail/:id" component={Detail}></Route>
      <Route exact path="/create" component={Form}></Route>
      {/* </Routes> */}
    </div>
  );
}

export default App;

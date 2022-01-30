import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
        
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;

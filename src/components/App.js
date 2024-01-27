
import AllProducts  from "./productList";
import AllUsers  from "./userList";
import Navbar  from "./Navbar";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      {/* <Route exact path="/" element={<Home />} /> */}
      <Route exact path="/productList" element={<AllProducts />} />
      <Route exact path="/userList" element = {<AllUsers />} />
   
      </Routes>
    </div>
  );
}


export default App;

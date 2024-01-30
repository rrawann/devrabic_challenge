
import AllProducts  from "./productsPage";
import AllUsers  from "./usersPage";
import Navbar  from "./Navbar";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route exact path="/" element={<AllProducts />} />
      <Route exact path="/productsPage" element={<AllProducts />} />
      <Route exact path="/usersPage" element = {<AllUsers />} />
      </Routes>
    </div>
  );
}


export default App;

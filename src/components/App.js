
import AllProducts  from "./productList";
import AllUsers  from "./userList";
import DataTable  from "./dataTable";
import Navbar  from "./Navbar";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route exact path="/" element={<AllProducts />} />
      <Route exact path="/productList" element={<AllProducts />} />
      <Route exact path="/userList" element = {<AllUsers />} />
      {/* <Route exact path="/DataTable" element = {<DataTable />} /> */}
      </Routes>
    </div>
  );
}


export default App;

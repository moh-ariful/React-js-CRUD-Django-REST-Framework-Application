import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./EmpListing";
import EmpCreate from "./EmpCreate";
import EmpDetail from "./EmpDetail";
import EmpEdit from "./EmpEdit";

function App() {
  return (
    <div className="container mb-5 my-3 text-center">
      <h1>ReactJS+Django REST Framework CRUD Application</h1>
      <h3>“Light tomorrow with today.” — Elizabeth Barrett Browning</h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path="employee/create" element={<EmpCreate />}></Route>

          <Route path="employee/detail/:empid" element={<EmpDetail />}></Route>
          <Route path="employee/edit/:empid" element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import { Staff } from "./components/Staff";
import { Student } from "./components/Student";
import { Login } from "./components/Login";
import { UnAuth } from './components/UnAuthPage';
import { RequireAuth } from "./components/RequireAuth";
import { Register } from "./components/Register";


const ROLES = {
  Staff: "staff",
  Student: "student",
};
function App() {
  return (
    <div className="App">
        <h1>App page</h1>
        <Link to="/login">Go to Login</Link>
        {/* <Header /> */}
      <Routes>
        {/* Public route  */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/home" element={<Header />}></Route>
        <Route path="/unauthorized" element={<UnAuth />}></Route>

        {/* Private Route */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Staff]} />}>
          <Route path="/staff" element={<Staff />}></Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Student]} />}>
          <Route path="/student" element={<Student />}></Route>
        </Route>


      </Routes>
    </div>
  );
}

export default App;

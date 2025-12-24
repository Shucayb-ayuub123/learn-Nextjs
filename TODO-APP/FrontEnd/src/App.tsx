
import SingUp from "./pages/SingUp";
import Login from "./pages/Login";
// import ForgotPassword from "./Pages/ForgetPass";
import PublicRoute from "./context/Verify";
import { PraviteRoute } from "./context/Verify";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route index element = {<SingUp />} />
        <Route
          index
          element={
            <PublicRoute>
              <SingUp />
            </PublicRoute>
          }
        />
        <Route
          path="/Singup"
          element={
            <PublicRoute>
              <SingUp />
            </PublicRoute>
          }
        />

        <Route
          path="/Login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/Dashboard"
          element={
            <PraviteRoute>
              <Dashboard />
            </PraviteRoute>
          }
        ></Route>
        
      </Routes>
    </div>
  );
};

export default App;
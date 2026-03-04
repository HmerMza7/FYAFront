import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import RegisterCredit from "./pages/RegisterCredit";
import CreditList from "./pages/CreditList";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegisterCredit />} />
        <Route path="/credits" element={<CreditList />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;

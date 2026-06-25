import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import ReceptionistAuth from "./pages/ReceptionistAuth";
import ReceptionDashboard from "./pages/ReceptionDashboard";
import PatientsPage from "./pages/PatientsPage";
import QueueManagement from "./pages/QueueManagement";

import { PatientProvider } from "./context/PatientContext";

// Placeholder pages
const DoctorDashboard = () => (
  <div>Doctor Dashboard (Coming Soon)</div>
);

const PatientPage = () => (
  <div>Patient Tracking Page (Coming Soon)</div>
);

const Unauthorized = () => (
  <div>Access Denied</div>
);

function App() {
  return (
    <PatientProvider>

      <BrowserRouter>

        <Routes>

          {/* Landing */}
          <Route
            path="/"
            element={<Landing />}
          />

          {/* Receptionist Login */}
          <Route
            path="/receptionist-login"
            element={<ReceptionistAuth />}
          />

          {/* Reception Dashboard */}
          <Route
            path="/receptionist/dashboard"
            element={<ReceptionDashboard />}
          />

          {/* Patients Page */}
          <Route
            path="/receptionist/patients"
            element={<PatientsPage />}
          />

          {/* Queue Management */}
          <Route
            path="/receptionist/queue"
            element={<QueueManagement />}
          />

          {/* Future Pages */}
          <Route
            path="/doctor/dashboard"
            element={<DoctorDashboard />}
          />

          <Route
            path="/patient"
            element={<PatientPage />}
          />

          {/* Unauthorized */}
          <Route
            path="/unauthorized"
            element={<Unauthorized />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div
                style={{
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#060b17",
                  color: "white",
                  fontSize: "32px",
                  fontWeight: "700"
                }}
              >
                404 Page Not Found
              </div>
            }
          />

        </Routes>

      </BrowserRouter>

    </PatientProvider>
  );
}

export default App;
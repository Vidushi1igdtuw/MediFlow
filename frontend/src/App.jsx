import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import ReceptionistAuth from "./pages/ReceptionistAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<Landing />}
        />

        {/* Receptionist Login / Signup */}
        <Route
          path="/receptionist-login"
          element={<ReceptionistAuth />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
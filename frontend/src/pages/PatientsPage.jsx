import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientsPage.css";
import { usePatients } from "../context/PatientContext";

export default function PatientsPage() {

  const navigate = useNavigate();

  const { patients, setPatients } = usePatients();

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    phone: "",
    priority: "normal"
  });

  // ================= ADD PATIENT (GLOBAL SAFE FIX) =================
  const addPatient = () => {

    if (!formData.name || !formData.age || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    const nextToken =
      patients.length > 0
        ? Math.max(...patients.map((p) => p.token)) + 1
        : 101;

    const newPatient = {
      token: nextToken,
      name: formData.name,
      age: Number(formData.age),
      gender: formData.gender,
      phone: formData.phone,
      priority: formData.priority,
      status: "waiting"
    };

    // ✅ IMPORTANT: functional update for real-time sync
    setPatients((prev) => [...prev, newPatient]);

    // reset form
    setFormData({
      name: "",
      age: "",
      gender: "Male",
      phone: "",
      priority: "normal"
    });

    setShowModal(false);
  };

  // ================= PRIORITY SORT =================
  const priorityOrder = {
    emergency: 1,
    senior: 2,
    normal: 3
  };

  const sortedPatients = [...patients].sort(
    (a, b) =>
      (priorityOrder[a.priority] || 3) -
      (priorityOrder[b.priority] || 3)
  );

  return (
    <div className="patients-container">

      {/* ================= NAVBAR ================= */}
      <div className="patients-navbar">

        <div className="patients-logo-section">
          <div className="patients-logo-icon">✚</div>
          <h2>
            Medi<span>Flow</span>
          </h2>
        </div>

        <div className="patients-hospital">
          City Care Hospital, Delhi NCR
        </div>

        <div className="patients-right">
          <span className="patients-time">
            {new Date().toLocaleTimeString()}
          </span>

          <div className="patients-profile">
            👩‍⚕️ Receptionist
          </div>

          <button className="patients-logout">
            Logout
          </button>
        </div>

      </div>

      {/* ================= BODY ================= */}
      <div className="patients-layout">

        {/* ================= SIDEBAR ================= */}
        <div className="patients-sidebar">

          <button onClick={() => navigate("/receptionist/dashboard")}>
            Dashboard
          </button>

          <button className="active-btn">
            Patients
          </button>

          <button onClick={() => navigate("/receptionist/queue")}>
            Queue Management
          </button>

          <button>Appointments</button>
          <button>Analytics</button>
          <button>Notifications</button>

          <div className="patients-sidebar-box">

            <h4>⚡ Quick Actions</h4>

            <button onClick={() => setShowModal(true)}>
              Add New Patient
            </button>

            <button>Call Next</button>
            <button>Print Token</button>
            <button>Generate QR</button>

          </div>

          <div className="patients-system-status">
            <div className="patients-dot"></div>
            System Online
          </div>

        </div>

        {/* ================= MAIN ================= */}
        <div className="patients-main">

          <div className="patients-header">
            <h1>Patients Management</h1>
            <p>View and manage all registered patients</p>
          </div>

          {/* SEARCH */}
          <div className="patients-search-row">

            <input
              type="text"
              placeholder="Search patients..."
            />

            <button
              className="patients-add-btn"
              onClick={() => setShowModal(true)}
            >
              + Add Patient
            </button>

          </div>

          {/* TABLE */}
          <div className="patients-table-card">

            <table>

              <thead>
                <tr>
                  <th>Token</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Priority</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {sortedPatients.map((patient) => (
                  <tr key={patient.token}>

                    <td>{patient.token}</td>
                    <td>{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.phone}</td>
                    <td>{patient.priority}</td>

                    <td>
                      <span className="patients-status-pill">
                        {patient.status}
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* ================= MODAL ================= */}
      {showModal && (

        <div className="patients-modal-overlay">

          <div className="patients-modal">

            <h2>Register New Patient</h2>

            <input
              type="text"
              placeholder="Patient Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <select
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <select
              value={formData.priority}
              onChange={(e) =>
                setFormData({ ...formData, priority: e.target.value })
              }
            >
              <option value="normal">Normal Patient</option>
              <option value="senior">Senior Citizen</option>
              <option value="emergency">Emergency</option>
            </select>

            <div className="patients-modal-buttons">

              <button onClick={() => setShowModal(false)}>
                Cancel
              </button>

              <button
                className="patients-save-btn"
                onClick={addPatient}
              >
                Generate Token
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}
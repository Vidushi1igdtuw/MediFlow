import { useNavigate } from "react-router-dom";
import "./ReceptionDashboard.css";
import { usePatients } from "../context/PatientContext";

export default function ReceptionDashboard() {

  const {
    patients,
    callNextPatient
  } = usePatients();

  const navigate = useNavigate();

  // ================= LIVE DERIVED STATE =================

  const totalPatients = patients.length;

  const activeQueue = patients.filter(
    (p) => p.status === "waiting"
  ).length;

  const serving = patients.find(
    (p) => p.status === "serving"
  );

  const completed = patients.filter(
    (p) => p.status === "completed"
  ).length;

  // fake but realistic for hackathon demo
  const avgWaitTime =
    activeQueue === 0 ? 0 : activeQueue * 6;

  const tokensGenerated = patients.length;

  return (
    <div className="rd-container">

      {/* ================= NAVBAR ================= */}
      <div className="rd-navbar">

        <div className="logo-section">
          <div className="logo-icon">✚</div>
          <h2>
            Medi<span>Flow</span>
          </h2>
        </div>

        <div className="rd-hospital">
          City Care Hospital, Delhi NCR
        </div>

        <div className="rd-right">
          <span className="rd-time">
            {new Date().toLocaleTimeString()}
          </span>

          <div className="rd-profile">
            👩‍⚕️ Receptionist
          </div>

          <button className="rd-logout">
            Logout
          </button>
        </div>

      </div>

      {/* ================= BODY ================= */}
      <div className="rd-body">

        {/* ================= SIDEBAR ================= */}
        <div className="rd-sidebar">

          <button className="active">
            Dashboard
          </button>

          <button onClick={() =>
            navigate("/receptionist/patients")
          }>
            Patients
          </button>

          <button onClick={() =>
            navigate("/receptionist/queue")
          }>
            Queue Management
          </button>

          <button>Appointments</button>
          <button>Analytics</button>
          <button>Notifications</button>

          {/* QUICK ACTIONS */}
          <div className="sidebar-box">
            <h4>⚡ Quick Actions</h4>

            <button onClick={callNextPatient}>
              Call Next Patient
            </button>

            <button
              onClick={() =>
                navigate("/receptionist/patients")
              }
            >
              Add New Patient
            </button>

            <button>Print Token</button>
            <button>Generate QR</button>
          </div>

          {/* SYSTEM STATUS */}
          <div className="system-status">
            <span className="dot"></span>
            <span>System Online</span>
          </div>

        </div>

        {/* ================= MAIN ================= */}
        <div className="rd-main">

          {/* ================= STATS ================= */}
          <div className="rd-stats">

            <div className="card">
              <h3>Patients Today</h3>
              <p>{totalPatients}</p>
            </div>

            <div className="card">
              <h3>Active Queue</h3>
              <p>{activeQueue}</p>
            </div>

            <div className="card">
              <h3>Tokens Generated</h3>
              <p>{tokensGenerated}</p>
            </div>

            <div className="card">
              <h3>Completed Consultations</h3>
              <p>{completed}</p>
            </div>

            <div className="card">
              <h3>Average Wait Time</h3>
              <p>{avgWaitTime} min</p>
            </div>

            <div className="card highlight">
              <h3>Currently Serving</h3>
              <p>
                {serving
                  ? `${serving.token} - ${serving.name}`
                  : "None"}
              </p>
            </div>

          </div>

          {/* ================= CURRENT TOKEN ================= */}
          <div className="rd-current">

            <h2>Now Serving</h2>

            <div className="token-box">

              <h1>
                {serving
                  ? `Token ${serving.token}`
                  : "No Active Token"}
              </h1>

              <p>
                {serving
                  ? `${serving.name} - General Consultation`
                  : "Waiting for patients..."}
              </p>

            </div>

            <button
              className="next-btn"
              onClick={callNextPatient}
            >
              Call Next Patient
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
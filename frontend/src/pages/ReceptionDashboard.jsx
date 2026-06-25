import { useNavigate } from "react-router-dom";
import "./ReceptionDashboard.css";
import { patients } from "../data/patientsData";

export default function ReceptionDashboard() {
  const navigate = useNavigate();

  const totalPatients = patients.length;

  const activeQueue =
    patients.filter((p) => p.status === "waiting").length;

  const serving =
    patients.find((p) => p.status === "serving");

  const completed = 12; // temporary
  const avgWaitTime = 18;

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

          <button>Dashboard</button>
          <button
  onClick={() => navigate("/receptionist/patients")}
>
  Patients
</button>
          <button
  onClick={() => navigate("/receptionist/queue")}
>
  Queue Management
</button>
          <button>Appointments</button>
          <button>Analytics</button>
          <button>Notifications</button>

          {/* QUICK ACTIONS */}
          <div className="sidebar-box">
            <h4>⚡ Quick Actions</h4>

            <button>Call Next</button>
            <button>Add New Patient</button>
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
              <p>{patients.length + 100}</p>
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
              <p>{serving?.name || "None"}</p>
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
                  : "Waiting..."}
              </p>

            </div>

            <button className="next-btn">
              Call Next Patient
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
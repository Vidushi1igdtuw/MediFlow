import { useNavigate } from "react-router-dom";
import "./QueueManagement.css";
import { usePatients } from "../context/PatientContext";

export default function QueueManagement() {

  const navigate = useNavigate();

  const { patients } = usePatients();

  const sortedQueue = [...patients].sort((a, b) => {

    const priorityOrder = {
      emergency: 1,
      senior: 2,
      normal: 3
    };

    return (
      (priorityOrder[a.priority] || 3) -
      (priorityOrder[b.priority] || 3)
    );
  });

  const currentlyServing =
    sortedQueue.length > 0
      ? sortedQueue[0]
      : null;

  const emergencyCount =
    patients.filter(
      (p) => p.priority === "emergency"
    ).length;

  const seniorCount =
    patients.filter(
      (p) => p.priority === "senior"
    ).length;

  return (
    <div className="queue-container">

      {/* NAVBAR */}

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

      {/* BODY */}

      <div className="queue-body">

        {/* SIDEBAR */}

        <div className="rd-sidebar">

          <button
            onClick={() =>
              navigate("/receptionist/dashboard")
            }
          >
            Dashboard
          </button>

          <button
            onClick={() =>
              navigate("/receptionist/patients")
            }
          >
            Patients
          </button>

          <button className="active-btn">
            Queue Management
          </button>

          <button>Appointments</button>
          <button>Analytics</button>
          <button>Notifications</button>

          <div className="sidebar-box">

            <h4>⚡ Quick Actions</h4>

            <button>
              Call Next Patient
            </button>

            <button>
              Complete Consultation
            </button>

            <button>
              Mark Emergency
            </button>

            <button>
              Refresh Queue
            </button>

          </div>

          <div className="system-status">
            <div className="dot"></div>
            System Online
          </div>

        </div>

        {/* MAIN */}

        <div className="queue-main">

          <div className="page-header">

            <h1>Queue Management</h1>

            <p>
              Emergency patients are automatically
              prioritized, followed by senior citizens.
            </p>

          </div>

          {/* STATS */}

          <div className="queue-stats">

            <div className="card">
              <h3>Total Waiting</h3>
              <p>{patients.length}</p>
            </div>

            <div className="card emergency-card">
              <h3>Emergency Cases</h3>
              <p>{emergencyCount}</p>
            </div>

            <div className="card senior-card">
              <h3>Senior Citizens</h3>
              <p>{seniorCount}</p>
            </div>

            <div className="card">
              <h3>Avg Wait Time</h3>
              <p>18 min</p>
            </div>

          </div>

          {/* NOW SERVING */}

          <div className="current-serving-card">

            <h2>Now Serving</h2>

            {currentlyServing ? (

              <div className="serving-box">

                <h1>
                  Token {currentlyServing.token}
                </h1>

                <h3>
                  {currentlyServing.name}
                </h3>

                <span className="category-pill">
                  {currentlyServing.priority}
                </span>

              </div>

            ) : (

              <div className="serving-box">
                <h2>No Patients In Queue</h2>
              </div>

            )}

          </div>

          {/* QUEUE TABLE */}

          <div className="queue-table-card">

            <h2>Live Priority Queue</h2>

            <table>

              <thead>
                <tr>
                  <th>Priority</th>
                  <th>Token</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {sortedQueue.map(
                  (patient, index) => (

                    <tr key={patient.token}>

                      <td>
                        #{index + 1}
                      </td>

                      <td>
                        {patient.token}
                      </td>

                      <td>
                        {patient.name}
                      </td>

                      <td>
                        {patient.age}
                      </td>

                      <td>

                        <span className="category-pill">

                          {patient.priority === "emergency"
                            ? "Emergency"
                            : patient.priority === "senior"
                            ? "Senior Citizen"
                            : "Regular"}

                        </span>

                      </td>

                      <td>

                        <span className="status-pill">
                          {patient.status}
                        </span>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}
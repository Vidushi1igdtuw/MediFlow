import { useNavigate } from "react-router-dom";
import "./QueueManagement.css";

export default function QueueManagement() {
  const navigate = useNavigate();

  const patients = [
    {
      token: 108,
      name: "Rahul Sharma",
      age: 45,
      phone: "9876543210",
      category: "Emergency",
      status: "Waiting",
      priority: 1,
    },
    {
      token: 110,
      name: "Priya Verma",
      age: 68,
      phone: "9876543211",
      category: "Senior Citizen",
      status: "Waiting",
      priority: 2,
    },
    {
      token: 101,
      name: "Amit Kumar",
      age: 32,
      phone: "9876543212",
      category: "Regular",
      status: "Waiting",
      priority: 3,
    },
    {
      token: 103,
      name: "Neha Singh",
      age: 28,
      phone: "9876543213",
      category: "Regular",
      status: "Waiting",
      priority: 3,
    },
    {
      token: 111,
      name: "Suresh Gupta",
      age: 72,
      phone: "9876543214",
      category: "Senior Citizen",
      status: "Waiting",
      priority: 2,
    },
  ];

  const sortedQueue = [...patients].sort(
    (a, b) => a.priority - b.priority
  );

  const currentlyServing = sortedQueue[0];

  const emergencyCount = patients.filter(
    (p) => p.category === "Emergency"
  ).length;

  const seniorCount = patients.filter(
    (p) => p.category === "Senior Citizen"
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

          {/* HEADER */}

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

          {/* CURRENTLY SERVING */}

          <div className="current-serving-card">

            <h2>Now Serving</h2>

            <div className="serving-box">

              <h1>
                Token {currentlyServing.token}
              </h1>

              <h3>
                {currentlyServing.name}
              </h3>

              <span
                className={`category-pill ${currentlyServing.category
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {currentlyServing.category}
              </span>

            </div>

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

                        <span
                          className={`category-pill ${patient.category
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {patient.category}
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
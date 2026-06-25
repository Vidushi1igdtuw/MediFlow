import {
  Activity,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import { usePatients } from "../context/PatientContext";

export default function Landing() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const { patients } = usePatients();

  // ================= PRIORITY ORDER =================
  const priorityOrder = {
    emergency: 1,
    senior: 2,
    normal: 3,
  };

  // ================= WAITING QUEUE (SORTED REAL TIME) =================
  const queue = [...patients]
    .filter((p) => p.status === "waiting")
    .sort(
      (a, b) =>
        (priorityOrder[a.priority] || 3) -
        (priorityOrder[b.priority] || 3)
    );

  // ================= CURRENTLY SERVING =================
  const serving =
    patients.find((p) => p.status === "serving") || null;

  // ================= NEXT PATIENT =================
  const next = queue.length > 0 ? queue[0] : null;

  // ================= STATS =================
  const tokensAhead = queue.length;

  // realistic estimation (hackathon-friendly)
  const avgPerPatient = 8;
  const avgWaitTime =
    queue.length === 0 ? 0 : avgPerPatient;

  const estimatedWait =
    queue.length === 0 ? 0 : queue.length * avgPerPatient;

  return (
    <div className="landing-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-icon">✚</div>

          <div>
            <h2>
              Medi<span>Flow</span>
            </h2>
          </div>
        </div>

        <div className="nav-links">
          <a href="/">Live Update</a>

          <a
            href="#roles"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("roles");
            }}
          >
            Roles
          </a>

          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("features");
            }}
          >
            Features
          </a>
        </div>

        <button
          className="nav-btn"
          onClick={() => scrollToSection("roles")}
        >
          Get Started
        </button>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero-section">

        <div className="hero-left">

          <div className="live-badge">
            <span className="live-dot"></span>
            Smart Queue, Better Care.
          </div>

          <h1>
            Smarter Queues
            <br />
            for <span>Better Healthcare</span>
          </h1>

          <p className="hero-description">
            Transform patient experience with intelligent queue management,
            real-time updates and seamless clinic operations.
          </p>

          <div className="quick-features">

            <div className="feature-pill">
              <div className="icon-circle cyan">
                <Activity size={20} />
              </div>
              <div>
                <h4>Real-time Updates</h4>
                <p>Instant Queue Sync</p>
              </div>
            </div>

            <div className="feature-pill">
              <div className="icon-circle purple">
                <BarChart3 size={20} />
              </div>
              <div>
                <h4>Smart Analytics</h4>
                <p>Clinic Insights</p>
              </div>
            </div>

            <div className="feature-pill">
              <div className="icon-circle blue">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4>Secure Access</h4>
                <p>Role Based Control</p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= LIVE PANEL ================= */}

        <div className="queue-panel">

          <div className="panel-header">
            <div>
              <h3>LIVE QUEUE STATUS</h3>
              <p>Downtown Medical Center</p>
            </div>

            <div className="status-badge">Live</div>
          </div>

          {/* CURRENT + NEXT */}
          <div className="token-grid">

            <div className="token-card serving">
              <span>CURRENTLY SERVING</span>
              <h2>{serving?.token ?? "--"}</h2>
              <p>{serving?.name ?? "No Active Patient"}</p>
            </div>

            <div className="token-card waiting">
              <span>NEXT IN LINE</span>
              <h2>{next?.token ?? "--"}</h2>
              <p>{next?.name ?? "Queue Empty"}</p>
            </div>

          </div>

          {/* STATS */}
          <div className="stats-row">

            <div className="stat-box">
              <h3>{tokensAhead}</h3>
              <span>Tokens Ahead</span>
            </div>

            <div className="stat-box">
              <h3>{avgWaitTime}</h3>
              <span>Avg Minutes</span>
            </div>

            <div className="stat-box">
              <h3>{estimatedWait}</h3>
              <span>Estimated Wait</span>
            </div>

          </div>

          {/* QUEUE PREVIEW */}
          <div className="queue-progress">

            {queue.map((p) => (
              <div key={p.token} className="queue-token">
                {p.token}
              </div>
            ))}

          </div>

          {/* FOOTER */}
          <div className="panel-footer">

            <div>
              Estimated Wait:
              <strong> {estimatedWait} Minutes</strong>
            </div>

            <div className="green-text">
              Live Updated
            </div>

          </div>

        </div>
      </section>

      {/* ================= ROLES ================= */}
      <section id="roles" className="roles-section">

        <div className="section-title">
          <h2>Choose Your Role</h2>
          <p>
            Access personalized dashboards designed for your healthcare workflow
            <b> (SCROLL ↓)</b>
          </p>
        </div>

        <div className="role-cards">

          <div className="role-card receptionist-card">
            <div className="card-image">
              <img src="/receptionist.png" alt="Receptionist" />
            </div>
            <div className="card-content">
              <h3>Receptionist</h3>
              <p>
                Manage appointments, generate tokens,
                and control patient queues effortlessly.
              </p>
              <button onClick={() => navigate("/receptionist-login")}>
                Login/Signup →
              </button>
            </div>
          </div>

          <div className="role-card doctor-card">
            <div className="card-image">
              <img src="/doctor.png" alt="Doctor" />
            </div>
            <div className="card-content">
              <h3>Doctor</h3>
              <p>
                View patient flow, monitor queue status and access clinic insights.
              </p>
              <button>Login/Signup →</button>
            </div>
          </div>

          <div className="role-card patient-card">
            <div className="card-image">
              <img src="/patient.png" alt="Patient" />
            </div>
            <div className="card-content">
              <h3>Patient</h3>
              <p>
                Track token progress and receive real-time waiting updates.
              </p>
              <button>Login/Signup →</button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="why-section">

        <div className="section-title">
          <h2>Why Clinics Choose MediFlow</h2>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            ⚡ Real-time Sync
            <p>Instant updates across every screen.</p>
          </div>

          <div className="feature-card">
            📊 Analytics
            <p>Monitor patient flow and efficiency.</p>
          </div>

          <div className="feature-card">
            🔐 Secure Access
            <p>Role-based authentication and access.</p>
          </div>

          <div className="feature-card">
            📱 Mobile Friendly
            <p>Access from any device.</p>
          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">

        <h2>
          Better Queue. Better Care. Better Tomorrow.
        </h2>

        <button onClick={() => scrollToSection("roles")}>
          Get Started Today
        </button>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div>
          <h3>MediFlow</h3>
          <p>Smart Healthcare Queue Management</p>
        </div>

        <div>© 2026 MediFlow</div>

      </footer>

    </div>
  );
}
import {
  Activity,
  BarChart3,
  ShieldCheck
} from "lucide-react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="landing-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-icon">✚</div>

          <div>
            <h2>Medi<span>Flow</span></h2>
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

      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">

        {/* LEFT */}

        <div className="hero-left">

          <div className="live-badge">
            <span className="live-dot"></span>
            Smart Queue, Better Care.
          </div>

          <h1>
            Smarter Queues
            <br />
            for <span>Better
             Healthcare</span>
          </h1>

          <p className="hero-description">
            Transform patient experience with intelligent queue
            management, real-time updates and seamless clinic
            operations.
          </p>

          {/* FEATURES */}

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

        {/* RIGHT CARD */}

        <div className="queue-panel">

          <div className="panel-header">

            <div>
              <h3>LIVE QUEUE STATUS</h3>
              <p>Downtown Medical Center</p>
            </div>

            <div className="status-badge">
              Live
            </div>

          </div>

          <div className="token-grid">

            <div className="token-card serving">

              <span>CURRENTLY SERVING</span>

              <h2>101</h2>

              <p>Rahul Kumar</p>

            </div>

            <div className="token-card waiting">

              <span>YOUR TOKEN</span>

              <h2>104</h2>

              <p>Waiting</p>

            </div>

          </div>

          <div className="stats-row">

            <div className="stat-box">
              <h3>3</h3>
              <span>Tokens Ahead</span>
            </div>

            <div className="stat-box">
              <h3>30</h3>
              <span>Minutes</span>
            </div>

            <div className="stat-box">
              <h3>10</h3>
              <span>Avg Time</span>
            </div>

          </div>

          <div className="queue-progress">

            <div className="queue-token">
              101
            </div>

            <div className="queue-token">
              102
            </div>

            <div className="queue-token">
              103
            </div>

            <div className="queue-token active-token">
              104
            </div>

            <div className="queue-token">
              105
            </div>

            <div className="queue-token">
              106
            </div>

          </div>

          <div className="panel-footer">

            <div>
              Estimated Wait:
              <strong> 30 Minutes</strong>
            </div>

            <div className="green-text">
              Updated Now
            </div>

          </div>

        </div>

      </section>

      {/* ================= ROLE SECTION ================= */}

      <section id="roles" className="roles-section">

        <div className="section-title">
          <h2>Choose Your Role</h2>

          <p>
            Access personalized dashboards designed
            for your healthcare workflow <b>(SCROLL ↓)</b>
          </p>
        </div>

        <div className="role-cards">

          {/* CARD 1 */}

          <div className="role-card receptionist-card">

            <div className="card-image">
              <img src="/receptionist.png" alt="Receptionist"/>
            </div>

            <div className="card-content">

              <h3>Receptionist</h3>

              <p>
                Manage appointments, generate tokens,
                and control patient queues effortlessly.
              </p>

              <button
  onClick={() => navigate("/receptionist-login")}
>
  Login/Signup →
</button>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="role-card doctor-card">

            <div className="card-image">
              <img src="/doctor.png" alt="Doctor"/>
            </div>

            <div className="card-content">

              <h3>Doctor</h3>

              <p>
                View patient flow, monitor queue
                status and access clinic insights.
              </p>

              <button>
                Login/Signup →
              </button>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="role-card patient-card">

            <div className="card-image">
              <img src="/patient.png" alt="Patient"/>
            </div>

            <div className="card-content">

              <h3>Patient</h3>

              <p>
                Track token progress and receive
                real-time waiting updates.
              </p>

              <button>
                Login/Singup →
              </button>

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
            <h3>⚡ Real-time Sync</h3>
            <p>
              Instant updates across every screen.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Analytics</h3>
            <p>
              Monitor patient flow and efficiency.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔐 Secure Access</h3>
            <p>
              Role-based authentication and access.
            </p>
          </div>

          <div className="feature-card">
            <h3>📱 Mobile Friendly</h3>
            <p>
              Access from any device.
            </p>
          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta-section">

        <h2>
          Better Queue.
          Better Care.
          Better Tomorrow.
        </h2>

        <button onClick={() => scrollToSection("roles")}>
  Get Started Today
</button>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div>
          <h3>MediFlow</h3>

          <p>
            Smart Healthcare Queue Management
          </p>
        </div>

        <div>
          © 2026 MediFlow
        </div>

      </footer>

    </div>
  );
}
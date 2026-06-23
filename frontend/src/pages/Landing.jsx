import "./Landing.css";

export default function Landing() {
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
          <a href="/">Features</a>
          <a href="/">Solutions</a>
          <a href="/">Pricing</a>
          <a href="/">Contact</a>
        </div>

        <button className="nav-btn">
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

          <div className="hero-buttons">

            <button className="primary-btn">
              Launch Dashboard
            </button>

            <button className="secondary-btn">
              Watch Demo
            </button>

          </div>

          {/* FEATURES */}

          <div className="quick-features">

            <div className="feature-pill">
              ⚡ Real-time Updates
            </div>

            <div className="feature-pill">
              📊 Smart Analytics
            </div>

            <div className="feature-pill">
              🛡 Secure & Reliable
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

      <section className="roles-section">

        <div className="section-title">
          <h2>Choose Your Role</h2>

          <p>
            Access personalized dashboards designed
            for your healthcare workflow.
          </p>
        </div>

        <div className="role-cards">

          {/* CARD 1 */}

          <div className="role-card receptionist-card">

            <div className="card-image">
              IMAGE HERE
            </div>

            <div className="card-content">

              <h3>Receptionist</h3>

              <p>
                Manage appointments, generate tokens,
                and control patient queues effortlessly.
              </p>

              <button>
                Enter Dashboard →
              </button>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="role-card doctor-card">

            <div className="card-image">
              IMAGE HERE
            </div>

            <div className="card-content">

              <h3>Doctor</h3>

              <p>
                View patient flow, monitor queue
                status and access clinic insights.
              </p>

              <button>
                Enter Dashboard →
              </button>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="role-card patient-card">

            <div className="card-image">
              IMAGE HERE
            </div>

            <div className="card-content">

              <h3>Patient</h3>

              <p>
                Track token progress and receive
                real-time waiting updates.
              </p>

              <button>
                Track Token →
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="why-section">

        <div className="section-title">
          <h2>Why Clinics Choose MediFlow</h2>

          <p>
            Built specifically for modern healthcare facilities.
          </p>
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

        <button>
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
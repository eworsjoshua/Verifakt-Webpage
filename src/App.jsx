import { useState } from "react";

const gates = [
  {
    number: "GATE 01",
    title: "Geofence check-in",
    text: "Shift can't start unless GPS confirms the promoter is on-site.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
  {
    number: "GATE 02",
    title: "OTP handshake",
    text: "A real customer confirms the interaction with a 4-digit SMS code.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    number: "GATE 03",
    title: "Truth-Lens capture",
    text: "Live-only camera burns GPS, time, and ID onto the photo. No gallery uploads.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 8a2 2 0 0 1 2-2h2l1.5-2h5L16 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
  {
    number: "GATE 04",
    title: "Synced & logged",
    text: "Record lands on your dashboard — immutable, exportable, auditable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4h11l5 5v11H4V4z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8 13l2.5 2.5L16 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const audience = [
  {
    who: "For Brand Managers",
    title: "Know your spend actually happened.",
    text: "Stop reconciling activations from promoter photos you can't trust. Get real-time visibility into stock, engagements, and fraud flags — down to the individual promoter and market.",
    bullets: ["Live dashboard across every active market", "Automatic fraud and mock-GPS flags", "Exportable, audit-ready records"]
  },
  {
    who: "For Agencies",
    title: "Reports your clients don't question.",
    text: "Hand brands a verifiable audit trail instead of a spreadsheet. Win repeat contracts by making your field reporting the most credible thing in the room.",
    bullets: ["Client-ready verification reports", "Promoter accountability, built in", "One dashboard across all campaigns"]
  }
];

const clientOutcomes = [
  {
    tag: "BRANDS",
    title: "Know what happened in-market.",
    text: "Give marketing and commercial teams a live, verifiable view of field activity, people, locations and customer engagements."
  },
  {
    tag: "AGENCIES",
    title: "Make reporting defensible.",
    text: "Turn field execution into a client-ready evidence trail instead of a collection of screenshots, photos and spreadsheets."
  },
  {
    tag: "FIELD TEAMS",
    title: "Accountability without guesswork.",
    text: "Create a clear chain of custody from check-in to capture to dashboard, with verification built into the workflow."
  }
];

const faqs = [
  {
    q: "How does Verifakt prevent promoters from using mock GPS apps?",
    a: "Verifakt bypasses standard OS location spoofs by combining hardware-level cell tower triangulation, Wi-Fi BSSID handshakes, and live network latency validation. If mock GPS software is detected, the check-in is automatically flagged and blocked."
  },
  {
    q: "Can promoters upload pre-taken photos from their phone gallery?",
    a: "No. Verifakt's Truth-Lens camera operates strictly in live mode. Pre-saved photos or gallery uploads are physically disabled, ensuring every capture happens right in front of the customer in real time."
  },
  {
    q: "What happens if internet connectivity drops in remote markets?",
    a: "Verification records are encrypted and stored locally in tamper-proof device storage. As soon as the promoter device reconnects to network signal, the verified records automatically sync to your dashboard."
  },
  {
    q: "How quickly can we deploy Verifakt for our upcoming activation?",
    a: "Setup takes under 24 hours. We onboard your promoter roster, configure your campaign geofences, and provide your brand/agency team with full dashboard credentials."
  }
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Eyebrow({ children, light = false }) {
  return <div className={`eyebrow${light ? " eyebrow-light" : ""}`}>{children}</div>;
}

function Header({ openMenu, setOpenMenu }) {
  const go = (id) => {
    setOpenMenu(false);
    scrollToId(id);
  };

  return (
    <header className="site-header">
      <div className="scroll-progress-bar" />
      <div className="wrap nav">
        <button className="nav-brand brand-button" onClick={() => go("top")} aria-label="Go to top">
          <img src="/verifakt-logo.png" alt="Verifakt Logo" className="header-logo" />
        </button>

        <nav className={`nav-links${openMenu ? " is-open" : ""}`} aria-label="Main navigation">
          <button onClick={() => go("how")}>How it works</button>
          <button onClick={() => go("calculator")}>ROI Calculator</button>
          <button onClick={() => go("audience")}>Who it's for</button>
          <button onClick={() => go("clients")}>Clients</button>
          <a
            href="https://verifakt.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-signin-link"
            onClick={() => setOpenMenu(false)}
          >
            Sign in
          </a>
          <button onClick={() => go("contact")}>Contact</button>
        </nav>

        <div className="nav-actions">
          <a
            href="https://verifakt.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost desktop-only"
          >
            Sign in
          </a>
          <button className="btn btn-primary desktop-only glow-button" onClick={() => go("contact")}>
            Start a pilot
          </button>
          <button
            className="menu-toggle"
            onClick={() => setOpenMenu((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={openMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function VerificationTicket() {
  return (
    <div className="hero-product-showcase">
      <div className="ticket-frame" aria-label="Example Verifakt verification record">
        <div className="ticket-glow-aura" />
        <div className="ticket floating-ticket">
          <div className="ticket-top">
            <div>
              <div className="tt-label">Verification record</div>
              <div className="tt-id">VF–20406</div>
            </div>
            <div className="ticket-stamp pulse-stamp">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 13l5 5L20 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="ticket-body">
            <div className="tt-row"><span>Promoter</span><span>PR–0042</span></div>
            <div className="tt-row"><span>Location</span><span>6.5244° N, 3.3792° E</span></div>
            <div className="tt-row">
              <span>Geofence</span>
              <span className="live pulse-tag">
                <span className="live-dot" /> CONFIRMED
              </span>
            </div>
            <div className="tt-row">
              <span>OTP handshake</span>
              <span className="otp-digits">
                <i className="digit-pop">4</i>
                <i className="digit-pop">1</i>
                <i className="digit-pop">0</i>
                <i className="digit-pop">7</i>
              </span>
            </div>
            <div className="tt-row">
              <span>Truth-Lens capture</span>
              <span className="live pulse-tag">
                <span className="live-dot" /> LOCKED
              </span>
            </div>
            <div className="ticket-chainbar">
              <svg className="link-icon on" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="9" width="10" height="6" rx="3" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
              <div className="chain-track"><i className="animated-track-fill" /></div>
              <svg className="link-icon on" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="11" y="9" width="10" height="6" rx="3" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
            </div>
            <div className="ticket-footnote">CHAIN OF CUSTODY · IMMUTABLE · SYNCED</div>
          </div>
        </div>
      </div>

      <div className="app-mockup-badge">
        <img src="/app-mockup.png" alt="Verifakt Field Mobile App Interface" className="app-mockup-img" />
        <div className="mockup-caption">
          <span className="live-dot" /> Live Mobile Verification App
        </div>
      </div>
    </div>
  );
}

{/* INTERACTIVE FIELD LEAKAGE ROI CALCULATOR */}
function FieldLeakageCalculator() {
  const [budget, setBudget] = useState(15000000); // ₦15 Million default

  const leakage = Math.round(budget * 0.15);
  const formattedBudget = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(budget);
  const formattedLeakage = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(leakage);

  return (
    <section className="calculator-section" id="calculator">
      <div className="wrap">
        <div className="calculator-card hover-glow">
          <div className="calc-grid">
            <div className="calc-info">
              <Eyebrow light>Interactive Capital Leakage Calculator</Eyebrow>
              <h2>How much field spend are you losing to fraud?</h2>
              <p>Adjust your monthly activation budget below to calculate estimated capital leakage from unverified promoter reports &amp; mock GPS.</p>
              
              <div className="slider-box">
                <div className="slider-header">
                  <span>Monthly Field Budget:</span>
                  <strong>{formattedBudget}</strong>
                </div>
                <input
                  type="range"
                  min="2000000"
                  max="100000000"
                  step="1000000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="budget-slider"
                />
                <div className="slider-labels">
                  <span>₦2M</span>
                  <span>₦50M</span>
                  <span>₦100M+</span>
                </div>
              </div>
            </div>

            <div className="calc-result-card">
              <div className="cr-tag">ESTIMATED CAPITAL AT RISK</div>
              <div className="cr-amount">{formattedLeakage}</div>
              <div className="cr-note">Lost yearly to unverified claims, ghost check-ins &amp; duplicate promoter photos.</div>

              <div className="cr-divider" />

              <div className="cr-savings">
                <div className="crs-label">VERIFAKT PROTECTED ROI</div>
                <div className="crs-value">100% Verifiable Evidence</div>
              </div>

              <button className="btn btn-primary btn-block btn-gold glow-button" onClick={() => scrollToId("contact")}>
                Protect Your Field Budget ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{/* INTERACTIVE FAQ ACCORDION */}
function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section wrap">
      <div className="faq-head animate-fade-up">
        <Eyebrow>Got Questions?</Eyebrow>
        <h2>Frequently asked questions</h2>
        <p>Everything you need to know about Verifakt's verification technology and Nigerian field deployment.</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "is-open" : ""}`}
            key={faq.q}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            <div className="faq-question">
              <h3>{faq.q}</h3>
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer animate-fade-in">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function LoginCard() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open("https://verifakt.com.ng", "_blank", "noopener,noreferrer");
  };

  return (
    <form className="login-card animated-card" onSubmit={handleSubmit}>
      <div className="login-card-accent" />
      <h3>Access Dashboard</h3>
      <div className="sub">Sign in directly to your Verifakt project workspace</div>

      <div className="field">
        <label htmlFor="login-email">Work email</label>
        <input
          id="login-email"
          type="email"
          placeholder="you@brand.com"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="login-pass">Password</label>
        <input
          id="login-pass"
          type="password"
          placeholder="••••••••"
          required
        />
      </div>

      <div className="login-row">
        <label className="check-row">
          <input type="checkbox" defaultChecked />
          Remember me
        </label>
        <a href="https://verifakt.com.ng" target="_blank" rel="noopener noreferrer" className="text-button">
          Forgot password?
        </a>
      </div>

      <button type="submit" className="btn btn-primary btn-block btn-gold glow-button">
        Sign in to verifakt.com.ng ↗
      </button>

      <div className="login-foot">
        Need account access?{" "}
        <button type="button" className="text-button strong" onClick={() => scrollToId("contact")}>
          Contact sales
        </button>
      </div>
    </form>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    const subject = encodeURIComponent(`Verifakt Inquiry from ${name}${company ? ` (${company})` : ""}`);
    const body = encodeURIComponent(
      `Full Name: ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Automatically send message to info@verifakt.com.ng via mailto
    window.location.href = `mailto:info@verifakt.com.ng?subject=${subject}&body=${body}`;
    window.setTimeout(() => setSent(false), 8000);
  };

  return (
    <form className="contact-form animated-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="cf-name">Full name</label>
          <input
            id="cf-name"
            type="text"
            placeholder="Ada Okafor"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="cf-company">Company</label>
          <input
            id="cf-company"
            type="text"
            placeholder="Your agency or brand"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="cf-message">What are you looking to verify?</label>
        <textarea
          id="cf-message"
          placeholder="Tell us about your activation or campaign..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block glow-button">
        Send message
      </button>

      {sent && (
        <div className="form-note show animate-fade-in">
          Opening email client to send message to info@verifakt.com.ng... Thank you!
        </div>
      )}
    </form>
  );
}

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [dashboardView, setDashboardView] = useState("office"); // 'office', 'merged', 'real'

  return (
    <div id="top" className="app-container">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <main>
        <section className="hero wrap section-hero">
          <div className="hero-content animate-fade-up">
            <Eyebrow>Field verification, proven</Eyebrow>
            <h1>You can't manage what you can't <em className="gradient-text">verify.</em></h1>
            <p className="lede">
              Most field activations still run on trust alone. Verifakt replaces paper reports
              and unverifiable photos with a live, tamper-resistant record of what actually
              happened in the market — who was there, where, and whether a real customer was engaged.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary glow-button" onClick={() => scrollToId("contact")}>Start a pilot</button>
              <button className="btn btn-ghost" onClick={() => scrollToId("how")}>See how it works</button>
            </div>

            <div className="hero-proof">
              <div className="hp-item animate-pop"><b>4</b>verification gates</div>
              <div className="hp-item animate-pop" style={{ animationDelay: "0.1s" }}><b>0</b>gallery uploads accepted</div>
              <div className="hp-item animate-pop" style={{ animationDelay: "0.2s" }}><b>100%</b>GPS + OTP confirmed</div>
            </div>
          </div>

          <VerificationTicket />
        </section>

        <section className="problem wrap section-problem">
          <div className="problem-head animate-fade-up">
            <Eyebrow>The problem</Eyebrow>
            <h2>Field spend you can't see is field spend you can't trust.</h2>
            <p>
              Recycled photos, mock GPS, and paper reports mean brand managers are reconciling
              activations after the fact — if they can reconcile them at all.
            </p>
          </div>

          <div className="stats">
            <div className="stat stat-gold hover-glow stat-featured">
              <div className="stat-badge">TOTAL CAPITAL LEAKAGE</div>
              <div className="num">&gt;15%</div>
              <div className="label">
                <strong className="stat-title">Fraud &amp; Duplicates in Nigeria's Field Sector</strong>
                <p className="stat-desc">
                  Industry studies suggest more than 15% of field marketing spend is lost to fraud, duplicate claims, and unverifiable activity.
                </p>
                <div className="stat-footnote">
                  For a brand running nationwide market storms, that's real Naira leaving the market before a single verified insight makes it back to the dashboard.
                </div>
              </div>
            </div>
            <div className="stat stat-mint hover-glow">
              <div className="num">Mock GPS</div>
              <div className="label">and recycled photos are common ways promoters simulate presence</div>
            </div>
            <div className="stat stat-emerald hover-glow">
              <div className="num">Zero</div>
              <div className="label">real-time visibility for brand managers without a verification layer</div>
            </div>
          </div>
        </section>

        {/* VERIFAKT EXECUTIVE CAMPAIGN DASHBOARD SHOWCASE SECTION */}
        <section className="dashboard-showcase-section">
          <div className="wrap">
            <div className="dashboard-showcase-card hover-glow">
              <div className="dsc-header-row">
                <div className="dsc-header">
                  <Eyebrow light>Live Executive Control Center</Eyebrow>
                  <h2>Verifakt Campaign Dashboard on Ultrawide Workspace</h2>
                  <p>Real-time campaign telemetry: 8 Engagements, 4 Flagged Records, 79 Stock Issued, and 8 Geofence Breaches monitored live on executive displays.</p>
                </div>
                <div className="dsc-view-toggle">
                  <button
                    className={`btn-toggle ${dashboardView === "office" ? "active" : ""}`}
                    onClick={() => setDashboardView("office")}
                  >
                    Executive Desktop View 🖥️
                  </button>
                  <button
                    className={`btn-toggle ${dashboardView === "merged" ? "active" : ""}`}
                    onClick={() => setDashboardView("merged")}
                  >
                    Merged Telemetry Map
                  </button>
                  <button
                    className={`btn-toggle ${dashboardView === "real" ? "active" : ""}`}
                    onClick={() => setDashboardView("real")}
                  >
                    Campaign Dashboard UI
                  </button>
                </div>
              </div>

              <div className="dsc-image-wrapper">
                <img
                  src={
                    dashboardView === "office"
                      ? "/dashboard-office.png"
                      : dashboardView === "merged"
                      ? "/dashboard-merged.png"
                      : "/dashboard-real.png"
                  }
                  alt="Verifakt Executive Campaign Dashboard"
                  className="dashboard-img animate-fade-in"
                  key={dashboardView}
                />
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE ROI CALCULATOR */}
        <FieldLeakageCalculator />

        <section className="how section-how" id="how">
          <div className="wrap">
            <div className="how-head animate-fade-up">
              <div>
                <Eyebrow>Chain of custody</Eyebrow>
                <h2>Four gates. Nothing gets logged without them.</h2>
              </div>
              <p>Every record moves through the same sequence — in order — before it reaches your dashboard.</p>
            </div>

            <div className="chain">
              {gates.map((gate, index) => (
                <div className="gate hover-card" key={gate.number} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="gate-num">{gate.number}</div>
                  <div className="gate-icon bounce-icon">{gate.icon}</div>
                  <h3>{gate.title}</h3>
                  <p>{gate.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap section-audience" id="audience">
          <div className="audience-head animate-fade-up">
            <Eyebrow>Built for two teams</Eyebrow>
            <h2>Whichever side of the activation you're on.</h2>
          </div>

          <div className="audience">
            {audience.map((item) => (
              <article className="audience-card hover-card" key={item.who}>
                <div className="who">{item.who}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="clients section-clients" id="clients">
          <div className="wrap">
            <div className="clients-head animate-fade-up">
              <div>
                <Eyebrow>Client value</Eyebrow>
                <h2>A verification layer your clients can actually trust.</h2>
              </div>
              <p>
                Verifakt is designed to sit between field execution and the final report —
                giving every stakeholder evidence they can inspect, export and act on.
              </p>
            </div>

            <div className="client-grid">
              {clientOutcomes.map((item) => (
                <article className="client-card hover-card" key={item.tag}>
                  <div className="client-mark">{item.tag}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="client-line animated-line" />
                </article>
              ))}
            </div>

            <div className="client-cta glow-banner">
              <div>
                <div className="client-cta-label">CLIENT REPORTING</div>
                <strong>From field activity to evidence-backed reporting.</strong>
              </div>
              <button className="btn btn-primary btn-gold-solid glow-button" onClick={() => scrollToId("contact")}>Talk to Verifakt</button>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <FaqSection />

        <section className="signin section-signin" id="signin">
          <div className="wrap signin-grid">
            <div className="signin-content animate-fade-up">
              <Eyebrow light>Your projects</Eyebrow>
              <h2>Sign in to <span className="gold-gradient-text">verifakt.com.ng</span></h2>
              <p>
                Everything your team has verified — activations, promoters, flags, and exports —
                lives in one place on our secure platform.
              </p>

              <div className="signin-meta">
                <div className="sm-box"><b>Live</b>activation tracking</div>
                <div className="sm-box"><b>Auto</b>fraud flagging</div>
                <div className="sm-box"><b>1-click</b>audit export</div>
              </div>
            </div>

            <LoginCard />
          </div>
        </section>

        <section className="contact-section wrap section-contact" id="contact">
          <div className="contact-grid">
            <div className="contact-info animate-fade-up">
              <Eyebrow>Get in touch</Eyebrow>
              <h2>Run your next activation with a verification layer built in.</h2>
              <p>
                We're offering a limited pilot for early partners — discounted setup, full
                Truth-Lens verification, and a documented case study at the end.
              </p>

              <div className="contact-detail">
                <div className="cd-label">Email</div>
                <a className="cd-value contact-link" href="mailto:info@verifakt.com.ng">info@verifakt.com.ng</a>
              </div>
              <div className="contact-detail">
                <div className="cd-label">Phone Numbers</div>
                <div className="cd-value phone-group">
                  <a className="contact-link" href="tel:+2348063064786">+234 806 306 4786</a>
                  <span className="phone-sep">•</span>
                  <a className="contact-link" href="tel:+2347064732929">+234 706 473 2929</a>
                </div>
              </div>
              <div className="contact-detail">
                <div className="cd-label">Location / Address</div>
                <div className="cd-value">Lagos, Nigeria</div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-top">
            <button className="foot-brand brand-button" onClick={() => scrollToId("top")} aria-label="Go to top">
              <img src="/verifakt-logo.png" alt="Verifakt Logo" className="footer-logo" />
            </button>

            <div className="foot-links">
              <button onClick={() => scrollToId("how")}>How it works</button>
              <button onClick={() => scrollToId("calculator")}>ROI Calculator</button>
              <button onClick={() => scrollToId("audience")}>Who it's for</button>
              <button onClick={() => scrollToId("clients")}>Clients</button>
              <a href="https://verifakt.com.ng" target="_blank" rel="noopener noreferrer" className="foot-signin-link">Sign in</a>
              <button onClick={() => scrollToId("contact")}>Contact</button>
            </div>
          </div>

          <div className="foot-bottom">
            <span>© 2026 Verifakt. Field marketing, verified.</span>
            <span>GPS-LOCKED · OTP-CONFIRMED · TAMPER-RESISTANT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
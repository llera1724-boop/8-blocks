import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>8Blocks - Token economies</title>
        <meta
          name="description"
          content="Token economies that power the business. Strategic consulting, basic and advanced tokenomics, tokenomics audit."
        />
      </Head>

      <div className="page">
        <header className="header">
          <div className="header-inner">
            <div className="logo">
              <span className="logo-mark" aria-hidden="true">
                <img src="/logo-8blocks.png" alt="" />
              </span>
              <span className="logo-text">8Blocks</span>
            </div>

            <nav className="nav">
              <a href="#services">Services</a>
              <a href="#cases">Cases</a>
              <a href="#blog">Blog</a>
              <a href="#team">Team</a>
            </nav>

            <div className="header-right">
              <button className="lang-switch">EN</button>
              <button className="primary-cta">Talk to the team</button>
            </div>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="hero-gradient" />
            <div className="hero-content">
              <h1 className="hero-title">
                Token economies
                <br />
                that power the business
              </h1>

              <div className="hero-offer" id="services">
                <div className="hero-cta-row">
                  <button className="pill-button">Strategic consulting</button>
                  <button className="pill-button pill-secondary">
                    Basic tokenomics
                  </button>
                  <button className="pill-button pill-secondary">
                    Advanced tokenomics
                  </button>
                  <button className="pill-button pill-secondary">
                    Tokenomics audit
                  </button>
                </div>

                <p className="hero-subtitle">
                  We help businesses turn tokens from one-time fundraising tools
                  into working economic instruments. Tokens are embedded into
                  products and operations, so usage and demand drive lasting
                  value, not speculation.
                </p>
              </div>
            </div>
          </section>

          <section className="services-section" aria-labelledby="services-title">
            <div className="services-inner">
              <h2 id="services-title" className="services-title">
                How we design and fix broken economics
              </h2>

              <div className="services-grid">
                <article className="service-card service-card--wide service-card--top">
                  <div className="service-card-body">
                    <h3 className="service-card-title">Strategic consulting</h3>
                    <p className="service-card-text">
                      We design the economic strategy behind the system. This
                      includes defining token logic, incentives, and partner
                      structure for Web3 projects and businesses entering
                      tokenized ecosystems.
                    </p>
                    <button className="view-details">View details</button>
                  </div>
                  <div className="service-card-visual service-card-visual--curve" />
                </article>

                <article className="service-card service-card--wide">
                  <div className="service-card-body">
                    <h3 className="service-card-title">Basic tokenomics</h3>
                    <p className="service-card-text">
                      A foundational token economics model covering supply,
                      emission, and distribution, built to keep the system
                      stable from day one.
                    </p>
                    <button className="view-details">View details</button>
                  </div>
                  <div className="service-card-visual service-card-visual--orbits" />
                </article>

                <article className="service-card service-card--tall">
                  <div className="service-card-body">
                    <h3 className="service-card-title">Tokenomics audit</h3>
                    <p className="service-card-text">
                      A full assessment of an existing token economy,
                      identifying structural risks, broken incentive loops, and
                      scaling bottlenecks.
                    </p>
                    <div className="audit-timeline" aria-hidden="true">
                      <div className="audit-timeline-row">
                        <span className="audit-timeline-line" />
                        <span className="audit-timeline-icon audit-timeline-icon--done">
                          <span className="audit-timeline-check" />
                        </span>
                      </div>
                      <div className="audit-timeline-row">
                        <span className="audit-timeline-line" />
                        <img
                          className="audit-timeline-icon"
                          src="/audit-step.png"
                          alt=""
                        />
                      </div>
                      <div className="audit-timeline-row">
                        <span className="audit-timeline-line" />
                        <img
                          className="audit-timeline-icon"
                          src="/audit-step.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <button className="view-details view-details--audit">
                      View details
                    </button>
                  </div>
                </article>

                <article className="service-card service-card--wide service-card--bottom">
                  <div className="service-card-body">
                    <h3 className="service-card-title">Advanced tokenomics</h3>
                    <p className="service-card-text">
                      A deeper token economics model for complex ecosystems,
                      extending the foundation with treasury logic, incentive
                      systems, liquidity mechanics, and internal flows.
                    </p>
                    <button className="view-details">View details</button>
                  </div>
                  <div className="service-card-visual service-card-visual--beam" />
                </article>
              </div>

              <div className="services-cta-row">
                <button className="primary-cta services-cta">
                  Talk to the team
                </button>
              </div>
            </div>
          </section>

          <section className="impact-section">
            <div className="impact-inner">
              <div className="impact-left">
                <p className="impact-label">8Blocks Team:</p>
                <p className="impact-quote">
                  A token should generate value for the project over its entire
                  lifetime.
                </p>
                <p className="impact-note">
                  And that only happens when you clearly understand why it exists
                  and who needs it.
                </p>
                <div className="impact-avatars">
                  <div className="avatar-row">
                    <span className="avatar avatar-1" />
                    <span className="avatar avatar-2" />
                    <span className="avatar avatar-3" />
                    <span className="avatar avatar-4" />
                    <span className="avatar avatar-more">+8</span>
                  </div>
                  <button className="secondary-ghost-cta">
                    Explore our team
                  </button>
                </div>
              </div>

              <div className="impact-right">
                <div className="impact-metric">
                  <div className="impact-metric-value">30+</div>
                  <p className="impact-metric-text">
                    token economies designed for products across multiple industries
                  </p>
                </div>
                <div className="impact-metric">
                  <div className="impact-metric-value">$180M+</div>
                  <p className="impact-metric-text">
                    combined capitalization of client projects
                  </p>
                </div>
                <div className="impact-metric">
                  <div className="impact-metric-value">21 days</div>
                  <p className="impact-metric-text">
                    average time to design a complete token economy model
                  </p>
                </div>
                <div className="impact-metric">
                  <div className="impact-metric-value">14 funds</div>
                  <p className="impact-metric-text">
                    backed projects built on our economic models
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="partners-section">
            <div className="partners-inner">
              <h2 className="partners-title">Our partners</h2>
              <div className="partners-logos">
                <span className="partner-pill">SCLS</span>
                <span className="partner-pill">Dexusel</span>
                <span className="partner-pill">CEDRO</span>
                <span className="partner-pill">Lattice.tech</span>
                <span className="partner-pill">MetaLamp</span>
                <span className="partner-pill">CryptoX</span>
              </div>
            </div>
          </section>

          <section className="insights-section">
            <div className="insights-inner">
              <div className="insights-header">
                <h2 className="insights-title">
                  When a business grows, the token doesn&apos;t always follow.
                </h2>
                <p className="insights-subtitle">
                  So we design economies where it has to. We align token demand
                  with real usage, instead of speculation and hype cycles.
                </p>
              </div>

              <div className="insights-grid">
                <article className="insight-card">
                  <h3 className="insight-title">01 · Token as a product</h3>
                  <p className="insight-text">
                    We define the token&apos;s core job inside the product and
                    operations, then build mechanics that reward real usage.
                  </p>
                </article>
                <article className="insight-card">
                  <h3 className="insight-title">02 · Incentive architecture</h3>
                  <p className="insight-text">
                    Clear value flows for users, partners, and the treasury so
                    that upside is shared fairly across the ecosystem.
                  </p>
                </article>
                <article className="insight-card">
                  <h3 className="insight-title">03 · Long‑term stability</h3>
                  <p className="insight-text">
                    Emission, sinks, and liquidity are tuned to keep the system
                    healthy years after launch, not just at TGE.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="cases-section" id="cases">
            <div className="cases-inner">
              <div className="cases-header">
                <h2 className="cases-title">Our cases</h2>
                <div className="cases-controls">
                  <button className="cases-filter cases-filter--active">
                    All
                  </button>
                  <button className="cases-filter">DeFi</button>
                  <button className="cases-filter">Gaming</button>
                  <button className="cases-filter">Infrastructure</button>
                </div>
              </div>

              <div className="cases-grid">
                <article className="case-card">
                  <div className="case-media" />
                  <div className="case-body">
                    <div className="case-tag">DeFi</div>
                    <h3 className="case-title">
                      Rebuilding incentives for a lending protocol
                    </h3>
                    <p className="case-text">
                      Redesigned token flows to reward long‑term liquidity and
                      reduce mercenary capital dependence.
                    </p>
                  </div>
                </article>
                <article className="case-card">
                  <div className="case-media" />
                  <div className="case-body">
                    <div className="case-tag">Gaming</div>
                    <h3 className="case-title">
                      Making in‑game assets economically sustainable
                    </h3>
                    <p className="case-text">
                      Balanced sinks and rewards so player growth doesn&apos;t
                      break the economy.
                    </p>
                  </div>
                </article>
                <article className="case-card">
                  <div className="case-media" />
                  <div className="case-body">
                    <div className="case-tag">Infrastructure</div>
                    <h3 className="case-title">
                      Aligning validator incentives with real usage
                    </h3>
                    <p className="case-text">
                      Linked validator rewards to protocol revenue and
                      meaningful network activity.
                    </p>
                  </div>
                </article>
              </div>

              <div className="cases-footer">
                <button className="secondary-ghost-cta">
                  See more cases
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <section className="footer-top">
            <div className="footer-top-left">
              <h2 className="footer-heading">
                If the token has no purpose, the project has no future
              </h2>
              <p className="footer-text">
                We define the token&apos;s role and connect it directly to
                revenue and operations.
              </p>

              <form
                className="subscribe-form"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label className="subscribe-label">
                  <span className="visually-hidden">Email</span>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="subscribe-input"
                  />
                </label>
                <button type="submit" className="subscribe-submit">
                  →
                </button>
              </form>

              <p className="subscribe-hint">
                Subscribe to go a level deeper
              </p>

              <div className="social-row">
                <button className="social-button">X</button>
                <button className="social-button">TG</button>
                <button className="social-button">YT</button>
                <button className="social-button">IN</button>
                <button className="social-button">FB</button>
              </div>
            </div>

            <div className="footer-top-right">
              <div className="messengers">
                <a href="#" className="messenger-badge whatsapp">
                  <span className="messenger-label">Message us on WhatsApp</span>
                </a>
                <a href="#" className="messenger-badge telegram">
                  <span className="messenger-label">
                    Message us on Telegram
                  </span>
                </a>
              </div>

              <div className="footer-columns">
                <div className="footer-column">
                  <h3 className="footer-column-title">Navigation</h3>
                  <a href="#services">Services</a>
                  <a href="#cases">Cases</a>
                  <a href="#benefits">Benefits</a>
                  <a href="#blog">Blog</a>
                </div>

                <div className="footer-column">
                  <h3 className="footer-column-title">Services</h3>
                  <a href="#services">Strategic consulting</a>
                  <a href="#services">Basic tokenomics</a>
                  <a href="#services">Advanced tokenomics</a>
                  <a href="#services">Tokenomics audit</a>
                </div>

                <div className="footer-column footer-map">
                  <div className="map-placeholder">
                    <div className="map-pin" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="footer-bottom">
            <div className="footer-logo">8Blocks</div>
            <div className="footer-meta">
              <span>© 2026 8Blocks. All rights reserved.</span>
              <a href="#privacy">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

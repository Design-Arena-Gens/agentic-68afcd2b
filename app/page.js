const highlights = [
  {
    title: "Strategic Architecture",
    description:
      "Translate business mandates into a resilient AI infrastructure blueprint that accelerates time-to-impact.",
    icon: "🧭"
  },
  {
    title: "Production AI Platforms",
    description:
      "Deploy cloud-native data pipelines, feature stores, and inference layers engineered for scale and compliance.",
    icon: "⚙️"
  },
  {
    title: "Acceleration Playbooks",
    description:
      "Upskill teams and codify MLOps practices with proven implementation frameworks tailored to your organization.",
    icon: "🚀"
  }
];

const stats = [
  { value: "42%", label: "Faster deployment cycles" },
  { value: "3x", label: "Increase in AI project throughput" },
  { value: "99.95%", label: "Platform uptime under load" }
];

const services = [
  {
    title: "AI Infrastructure Audit",
    description:
      "Deep dive assessment uncovering architectural gaps, security posture, and optimization opportunities across your AI stack."
  },
  {
    title: "MLOps Platform Build",
    description:
      "Greenfield or modernization of end-to-end ML platforms combining data engineering, experimentation, and CI/CD."
  },
  {
    title: "Generative AI Integration",
    description:
      "Operationalize LLM-based workflows with governance controls, prompt hubs, vector stores, and human-in-the-loop loops."
  },
  {
    title: "Managed Enablement",
    description:
      "Fractional leadership to embed best practices, coach teams, and transition capabilities through measurable sprints."
  }
];

const process = [
  {
    step: "01",
    title: "Discovery & Benchmarking",
    description:
      "We unpack strategic objectives, stakeholders, and tech estate. Benchmark current maturity against industry leaders."
  },
  {
    step: "02",
    title: "Blueprint & ROI Model",
    description:
      "Design future-state architecture, operating model, and investment roadmap that aligns to measurable business value."
  },
  {
    step: "03",
    title: "Build & Operationalize",
    description:
      "Stand up data, model, and governance pipelines with iterative releases. Embed observability and compliance from day one."
  },
  {
    step: "04",
    title: "Enable & Scale",
    description:
      "Transfer playbooks, train teams, and manage scaling milestones until your org can run autonomously with confidence."
  }
];

const testimonials = [
  {
    quote:
      "Accelio Lab architected a unified model platform across three business units in under 90 days. Our release cadence tripled without compromising regulatory guardrails.",
    name: "Maya Chen",
    role: "SVP Data & Analytics, Stratiform Holdings"
  },
  {
    quote:
      "Their MLOps leadership rebuilt our foundational pipelines and culture. We now ship responsible AI services globally with predictable quality.",
    name: "David Klein",
    role: "CTO, Meridian Insurance Group"
  }
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="page">
      <header className="hero">
        <div className="hero__badge">Accelio Lab</div>
        <h1>
          AI infrastructure built for <span>enterprise velocity</span>.
        </h1>
        <p>
          We design, deploy, and operationalize AI platforms so your teams can deliver production-grade intelligence with
          confidence, compliance, and speed.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#contact">
            Book a strategy session
          </a>
          <a className="button button--ghost" href="#services">
            Explore our approach
          </a>
        </div>
        <div className="hero__stats">
          {stats.map((item) => (
            <div key={item.label} className="hero__stat-card">
              <span className="hero__stat-value">{item.value}</span>
              <span className="hero__stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </header>

      <section className="section highlights" id="services">
        <div className="section__header">
          <p className="eyebrow">What makes us different</p>
          <h2>Full-stack AI infrastructure leaders</h2>
          <p className="section__description">
            Partner with a team that fuses enterprise architecture, data engineering, and MLOps mastery to accelerate
            transformational AI outcomes.
          </p>
        </div>
        <div className="highlights__grid">
          {highlights.map((item) => (
            <article key={item.title} className="card card--highlight">
              <span className="card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services">
        <div className="section__header">
          <p className="eyebrow">Advisory & delivery</p>
          <h2>Services tailored to your AI mandate</h2>
        </div>
        <div className="services__grid">
          {services.map((service) => (
            <article key={service.title} className="card card--service">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process">
        <div className="section__header">
          <p className="eyebrow">Engagement journey</p>
          <h2>From diagnostic to autonomous execution</h2>
          <p className="section__description">
            A proven delivery rhythm that reduces risk, keeps executive sponsors aligned, and unlocks compounding impact.
          </p>
        </div>
        <div className="process__grid">
          {process.map((phase) => (
            <article key={phase.step} className="card card--process">
              <span className="card__step">{phase.step}</span>
              <div>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials">
        <div className="section__header">
          <p className="eyebrow">Client outcomes</p>
          <h2>Trusted by executives leading AI transformation</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="card card--testimonial">
              <p>“{testimonial.quote}”</p>
              <cite>
                {testimonial.name} · {testimonial.role}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section cta" id="contact">
        <div className="cta__content">
          <p className="eyebrow">Let’s build your AI advantage</p>
          <h2>Ready to operationalize AI at scale?</h2>
          <p>
            Tell us about your mandate. We’ll assemble the right architects, engineers, and delivery leaders to elevate
            your AI estate.
          </p>
        </div>
        <form className="cta__form">
          <div className="form__row">
            <label>
              Full name
              <input type="text" name="name" placeholder="Alex Morgan" required />
            </label>
            <label>
              Work email
              <input type="email" name="email" placeholder="alex.morgan@enterprise.com" required />
            </label>
          </div>
          <div className="form__row">
            <label>
              Company
              <input type="text" name="company" placeholder="Acme Corporation" required />
            </label>
            <label>
              Team size
              <select name="teamSize" defaultValue="200-500" required>
                <option value="50-199">50-199</option>
                <option value="200-500">200-500</option>
                <option value="500-1000">500-1000</option>
                <option value="1000+">1000+</option>
              </select>
            </label>
          </div>
          <label>
            What outcomes are you targeting?
            <textarea
              name="message"
              placeholder="Outline the initiatives, timelines, and success metrics driving your AI roadmap."
              rows={4}
              required
            />
          </label>
          <button className="button button--primary" type="submit">
            Request consultation
          </button>
          <p className="form__disclaimer">
            We respond within two business days. By submitting this form you agree to our privacy notice.
          </p>
        </form>
      </section>

      <footer className="footer">
        <div className="footer__top">
          <div>
            <span className="hero__badge">Accelio Lab</span>
            <p>
              Accelio Lab builds AI infrastructure that transforms enterprise operations through resilient data, model,
              and governance systems.
            </p>
          </div>
          <div className="footer__links">
            <div>
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">Platform Architecture</a>
                </li>
                <li>
                  <a href="#services">MLOps Delivery</a>
                </li>
                <li>
                  <a href="#services">GenAI Integration</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#contact">Careers</a>
                </li>
                <li>
                  <a href="#contact">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {currentYear} Accelio Lab. All rights reserved.</span>
          <span>Made for visionary leaders in AI.</span>
        </div>
      </footer>
    </div>
  );
}

import "./style.css";

export default function Home() {
  return (
    <div className="home-page">
      <header className="home-header">
        <img src="/Logo.svg" alt="Hubode logo" className="home-logo" />
      </header>

      <main className="home-content">
        <div className="mascot-wrapper">
          <img
            src="/mascot-support.gif"
            alt="Hubode mascot animation"
            className="mascot-visual"
          />
        </div>

        <h1 className="home-title">
          <span className="title-highlight">Complete</span>{" "}
          <span className="title-default">living</span>
        </h1>

        <p className="home-subtitle">Begins Soon</p>
      </main>

      <footer className="home-footer">
        <nav className="social-links" aria-label="Social media">
          <a href="#" aria-label="Instagram" className="social-link">
            <img src="/instagram 5.png" alt="" />
          </a>
          <a href="#" aria-label="Facebook" className="social-link">
            <img src="/instagram 6.png" alt="" />
          </a>
          <a href="#" aria-label="Community" className="social-link">
            <img src="/instagram 7.png" alt="" />
          </a>
        </nav>
      </footer>
    </div>
  );
}

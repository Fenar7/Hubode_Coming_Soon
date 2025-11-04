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
          <span className="title-highlight">Co</span>
          <span className="title-default">mplete</span>{" "}
          <span className="title-highlight">Living</span>
        </h1>

        <p className="home-subtitle">Begins Soon</p>
      </main>

      <footer className="home-footer">
        <nav className="social-links" aria-label="Social media">
          <a
            href="https://www.instagram.com/hubodeliving/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-link"
          >
            <img src="/instagram 5.png" alt="" />
          </a>
          <a
            href="https://www.facebook.com/share/1Bxn546Z5Z/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-link"
          >
            <img src="/instagram 6.png" alt="" />
          </a>
          <a
            href="https://www.threads.com/@hubodeliving"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="social-link"
          >
            <img src="/instagram 7.png" alt="" />
          </a>
        </nav>
      </footer>
    </div>
  );
}

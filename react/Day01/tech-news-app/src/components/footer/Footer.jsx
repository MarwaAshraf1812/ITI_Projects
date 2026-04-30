import "./Footer.css";

const Footer = () =>  {
    return (
      <footer className="site-footer">
        <div className="footer-brand">
          <a className="brand" href="#">
            <span className="brand-mark">N</span>
            <span>NovaWire</span>
          </a>
          <p>Premium intelligence for people building and backing the future of technology.</p>
        </div>

        <div className="footer-column">
          <h4>Coverage</h4>
          <a href="#">Artificial Intelligence</a>
          <a href="#">Consumer Tech</a>
          <a href="#">Cybersecurity</a>
          <a href="#">Enterprise</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Advertise</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Follow</h4>
          <div className="social-links" aria-label="Social links">
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;
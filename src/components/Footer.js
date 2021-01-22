const Footer = () => {
  return (
    <footer className="row">
      <div className="col-md-6 footer-section">
        <h4>About us</h4>
        <p>
          We are a team of nurses, doctors, technologistis and excecutives
          dedicated to help nurses find jobs that they love.
        </p>
        <p>All copyright reserved &copy;2020 - Health Explore</p>
      </div>
      <div className="col-md-3 footer-section">
        <h4>Sitemap</h4>
        <ul className="footer-list">
          <li>Nurses</li>
          <li>Employers</li>
          <li>Social networking</li>
          <li>Jobs</li>
        </ul>
      </div>
      <div className="col-md-3 footer-section">
        <h4>Privacy</h4>
        <ul className="footer-list">
          <li>Terms of use</li>
          <li>Privacy policy</li>
          <li>Cookie policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

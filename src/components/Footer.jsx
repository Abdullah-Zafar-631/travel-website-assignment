function Footer() {
  return (
    <footer className='footer'>
        <div className="social-media-links">
            {/* Replace '#' with your actual profile links */}
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook fa-4x"></i>
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter fa-4x"></i>
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-4x"></i>
            </a>
        </div>
        <p>World Travel &copy; 2026, All Rights Reserved</p>
    </footer>
  );
}
export default Footer;
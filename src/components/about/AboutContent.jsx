import { Link } from 'react-router-dom';

function AboutContent() {
  return (
    <section className="about">
        <div className="container">
            <h2 className='lg-heading text-black about-heading'>About Us</h2>
            <p className="text-gray">Lorem, ipsum dolor sit amet...</p>
            {/* Include the wrapper, counts, and cta-banner elements here */}
            <div className="cta-banner">
                <p className="cta-line">What are you waiting for, reach us right now.</p>
                <Link to="/contact" className='btn-cta'>Contact Us</Link>
            </div>
        </div>
    </section>
  );
}
export default AboutContent;
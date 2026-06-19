import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail } from 'lucide-react';

function Contact() {
  return (
    <div className="contact-page-wrapper">
      <Helmet>
        <title>Contact Us | Travel App</title>
      </Helmet>
      
      <header className="header" style={{ height: '40vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div className="header-content" style={{ marginTop: '5vh' }}>
            <h1 className='lg-heading text-light main-heading'>Contact Us</h1>
            <p className='text-light'>We'd love to hear from you</p>
        </div>
      </header>

      <section className="contact-form">
        <div className="container">
            <div className="form-wrapper">
                <div className="company-address">
                    <div className="address-group">
                        <MapPin size={24} className="text-red" style={{display: 'inline', marginRight: '10px'}}/>
                        <h2 className="text-gray md-heading">Location</h2>
                        <p>#2661 Janakpuri Colony, city name, town name</p>
                    </div>
                    <div className="address-group">
                        <Mail size={24} className="text-red" style={{display: 'inline', marginRight: '10px'}}/>
                        <h2 className="text-gray md-heading">Email</h2>
                        <p>mycompany@mymail.com</p>
                    </div>
                    <div className="address-group">
                        <Phone size={24} className="text-red" style={{display: 'inline', marginRight: '10px'}}/>
                        <h2 className="text-gray md-heading">Call</h2>
                        <p>+910123456789</p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop" alt="company" />
                </div>
                <form action="" className="form">
                    <h1 className="lg-heading text-black">Contact Us</h1>
                    <p className="text-gray">Let us know your questions, suggestions and concerns by filling out the contact form below.</p>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="" id="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="" id="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="" id="message" required></textarea>
                    </div>
                    <button type="submit" className='form-btn'>Submit</button>
                </form>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default Contact;

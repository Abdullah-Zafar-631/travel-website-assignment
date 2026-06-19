import Navbar from '../components/Navbar';
import AboutContent from '../components/about/AboutContent';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Travel App</title>
      </Helmet>
      <Navbar />
      <AboutContent />
      <Footer />
    </>
  );
}
export default About;
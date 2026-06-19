import Navbar from '../components/Navbar';
import Header from '../components/home/Header';
import Showcase from '../components/home/Showcase';
import Features from '../components/home/Features';
import Reviews from '../components/home/Reviews';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <div className="home-page-wrapper">
      <Helmet>
        <title>Home | Travel App</title>
      </Helmet>
      <header className="header"> 
        <Navbar />
        <Header />
      </header>
      <Showcase />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
}
export default Home;
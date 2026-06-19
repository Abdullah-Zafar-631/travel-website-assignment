import Navbar from '../components/Navbar';
import Header from '../components/home/Header';
import Showcase from '../components/home/Showcase';
import Features from '../components/home/Features';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-page-wrapper">
      <header className="header"> 
        <Navbar />
        <Header />
      </header>
      <Showcase />
      <Features />
      <Footer />
    </div>
  );
}
export default Home;
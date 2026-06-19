import showcase1 from '../../assets/showcase-photo1.jpg';
import showcase3 from '../../assets/showcase-photo3.jpg';
import { Link } from 'react-router-dom';

function Showcase() {
  return (
    <section className='showcase'>
        <div className="container">
            <div className="row row1">
                <div className="img-box">
                    <img src={showcase3} alt="Deganvy" />
                </div>
                <div className="text-box">
                    <h2 className='lg-heading text-black'>DEGANVY, U.K</h2>
                    <p className='text-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    <Link to="/about" className='btn btn-secondary'>More</Link>
                </div>
            </div>
            <div className="row row2">
                <div className="img-box">
                    <img src={showcase1} alt="Desert" />
                </div>
                <div className="text-box">
                    <h2 className='lg-heading text-black'>DESERT, EGYPT</h2>
                    <p className='text-gray'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <Link to="/about" className='btn btn-secondary'>More</Link>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Showcase;
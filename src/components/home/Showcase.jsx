import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const destinations = [
  {
    id: 1,
    title: 'DEGANVY, U.K',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1000&auto=format&fit=crop',
    category: 'City',
  },
  {
    id: 2,
    title: 'DESERT, EGYPT',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    image: 'https://images.unsplash.com/photo-1539667468225-eebb663053e6?q=80&w=1000&auto=format&fit=crop',
    category: 'Desert',
  },
  {
    id: 3,
    title: 'SWISS ALPS',
    description: 'Experience the breathtaking mountains and fresh air.',
    image: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1000&auto=format&fit=crop',
    category: 'Mountain',
  },
  {
    id: 4,
    title: 'MALDIVES',
    description: 'Relax on the beautiful sandy beaches and clear waters.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79b71a640f5?q=80&w=1000&auto=format&fit=crop',
    category: 'Beach',
  }
];

const categories = ['All', 'City', 'Desert', 'Mountain', 'Beach'];

function Showcase() {
  const [filter, setFilter] = useState('All');

  const filteredDestinations = filter === 'All' 
    ? destinations 
    : destinations.filter(d => d.category === filter);

  return (
    <section className='showcase' id="showcase">
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`btn ${filter === cat ? 'btn-secondary' : 'btn-primary'}`}
                  style={{ margin: '0 0.5rem', cursor: 'pointer' }}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <motion.div layout>
              <AnimatePresence>
                {filteredDestinations.map((dest, index) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={`row ${index % 2 === 0 ? 'row1' : 'row2'}`} 
                    key={dest.id}
                    style={{ marginBottom: '5rem' }}
                  >
                      <div className="img-box">
                          <img src={dest.image} alt={dest.title} />
                      </div>
                      <div className="text-box">
                          <h2 className='lg-heading text-black'>{dest.title}</h2>
                          <p className='text-gray'>{dest.description}</p>
                          <Link to="/about" className='btn btn-secondary'>More</Link>
                      </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
        </div>
    </section>
  );
}
export default Showcase;
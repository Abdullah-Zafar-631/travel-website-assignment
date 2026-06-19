import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: '"Absolutely the best travel experience I have ever had. The guides were amazing!"',
    rating: '⭐⭐⭐⭐⭐'
  },
  {
    id: 2,
    name: 'Michael Chen',
    text: '"Everything was perfectly organized. I didn\'t have to worry about a single thing."',
    rating: '⭐⭐⭐⭐⭐'
  },
  {
    id: 3,
    name: 'Emma Williams',
    text: '"Beautiful destinations and top-notch service. Will definitely book again."',
    rating: '⭐⭐⭐⭐'
  }
];

function Reviews() {
  return (
    <section className="reviews" style={{ padding: '5rem 0', background: 'var(--bg-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="lg-heading text-black" style={{ marginBottom: '3rem' }}>What Our Clients Say</h2>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {reviews.map((review, index) => (
                    <motion.div 
                        key={review.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        style={{ 
                            background: 'var(--card-bg)', 
                            padding: '2rem', 
                            borderRadius: '10px', 
                            width: '300px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}
                    >
                        <p className="text-gray" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>{review.text}</p>
                        <h4 className="text-black" style={{ fontWeight: 'bold' }}>{review.name}</h4>
                        <p>{review.rating}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
export default Reviews;

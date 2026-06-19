import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.div 
      className="header-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
        <h1 className='lg-heading text-light main-heading'>travel the world</h1>
        <p className='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
        <a href="#showcase" className='btn btn-primary text-red md-heading'>Explore Places</a>
    </motion.div>
  );
}
export default Header;
import { Map, Plane, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="features">
        <div className="container">
            <motion.div 
              className="box-wrapper"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className="box box-1" variants={itemVariants}>
                    <Map size={48} className="text-red" style={{marginBottom: '1rem'}}/>
                    <h2 className="md-heading">Adventure</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nesciunt.</p>
                </motion.div>
                <motion.div className="box box-2" variants={itemVariants}>
                    <Plane size={48} className="text-light" style={{marginBottom: '1rem'}}/>
                    <h2 className="md-heading">Less Price</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nesciunt.</p>
                </motion.div>
                <motion.div className="box box-3" variants={itemVariants}>
                    <Mountain size={48} className="text-red" style={{marginBottom: '1rem'}}/>
                    <h2 className="md-heading">Experience</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nesciunt.</p>
                </motion.div>
            </motion.div>
        </div>
    </section>
  );
}
export default Features;
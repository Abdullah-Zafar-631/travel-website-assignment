import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Moon, Sun } from 'lucide-react';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className='navbar glass' style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <div className="container">
             <h1 className='logo lg-heading text-light' style={{color: 'var(--text-light)'}}>WT</h1>
             <ul className='nav-items' style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/contact">Contact</Link></li>
                <li className="nav-item" style={{ cursor: 'pointer' }} onClick={toggleTheme}>
                  {theme === 'light' ? <Moon size={24} color="var(--text-light)"/> : <Sun size={24} color="var(--text-light)"/>}
                </li>
             </ul>
        </div>
    </nav>
  );
}
export default Navbar;
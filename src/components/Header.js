import { Link } from 'react-router-dom';
import './Header.scss';
//rafce command to create Header
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/movies">Movies</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;

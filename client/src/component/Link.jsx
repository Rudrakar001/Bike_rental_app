import { Link } from 'react-router-dom';

const Link = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">SignUp</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Link;
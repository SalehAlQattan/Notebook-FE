import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={styles}>
      <Link to="/">home</Link>
      <Link to="/notebooks">notebooks</Link>
    </div>
  );
};

const styles = {
  fontWeight: 'bold',
  textTransform: 'uppercase',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px',
  background: '#ccc',
  color: '#fff',
};

export default NavBar;

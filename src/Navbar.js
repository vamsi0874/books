import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> JJ Books</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#1d6c8b',
          borderRadius: '8px' 
        }}>New Book</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
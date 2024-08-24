// a component is just a function that returns a jsx file
// sfc => stateless functional component
// import link comp from the router-dom
import {Link} from 'react-router-dom'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Dauda's Blog</h1>
      <div className="links">
        <Link to="/" target = "">Home </Link>
        <Link to="/create" style= {{
        }}>New Blog</Link>
      </div>
    </nav>
   );
}
 
export default Navbar ;
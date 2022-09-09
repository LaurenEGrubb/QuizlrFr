import '../styles/App.css';
import { Link } from 'react-router-dom';

function Nav (){
    return (
      <nav>
         <h4>Navbar</h4>
         <div className='navlinks'>
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
         </div>
          
      </nav>
  
    )
  }
  export default Nav
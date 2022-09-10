import '../styles/App.css';
import { Link } from 'react-router-dom';

function Nav (){
    return (
      <nav>
         <h4>Navbar</h4>
         <div className='navlinks'>
            <Link to="api/user/login"> Login </Link>
            <Link to="api/user/register"> Register </Link>
         </div>
          
      </nav>
  
    )
  }
  export default Nav
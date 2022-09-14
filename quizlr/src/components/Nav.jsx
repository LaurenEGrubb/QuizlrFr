import '../styles/App.css';
import { Link } from 'react-router-dom';

function Nav (){
    return (
      <nav>
         
         <div className='navlinks'>
            <Link to="api/users/login"> Login </Link>
            <Link to="/users/register"> Register </Link>
            <Link to="/login/createset">Create</Link>
         </div>
          
      </nav>
  
    )
  }
  export default Nav
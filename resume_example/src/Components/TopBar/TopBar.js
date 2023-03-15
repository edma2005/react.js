import '../TopBar/TopBar.css';
import { useNavigate } from 'react-router-dom';
import { mainPageRoute, myProjectsRoute, contactMeRoute } from '../../Consts/consts.js';

const TopBar = () => {
    const navigate = useNavigate();
  return (
    <nav className='topbar'>
         <h2 className='logo' onClick={()=>navigate(mainPageRoute)}>Tomas..</h2>
        <ul>
            <li onClick={()=>navigate(mainPageRoute)}>Home</li>
            <li onClick={()=>navigate(myProjectsRoute)}>My Projects</li>
            <li onClick={()=>navigate(contactMeRoute)}>Contact Me</li>
        </ul>
    </nav>
  )
}

export default TopBar
import '../ProjectCard/ProjectCard.css';
import { useNavigate } from 'react-router-dom';
import { myProjectsRoute } from '../../Consts/consts';

const ProjectCard = ({title, image, subtitle }) => {
  const MembershipProjectRoute = (title) => myProjectsRoute + `/${title}`;
  const navigate = useNavigate();
  return (
    <div className='cardContainer'>
        <img src={image} alt="pic"/>
        <h3>
            {title}
        </h3>
        <p>{subtitle}</p>
        <div className='buttonDiv'>
          <button className='moreButton' onClick={()=>navigate(MembershipProjectRoute(title))}>Check further..</button>
        </div>
    </div>
  )
}

export default ProjectCard

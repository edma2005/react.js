import '../ProjectPage/ProjectPage.css';
import { useParams } from "react-router-dom"
import TopBar from "../../Components/TopBar/TopBar"
import { projects } from "../../Consts/consts";
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import '../ProjectPage/ProjectPage.css';

const ProjectPage = () => {
  const {title} = useParams();
  const pageProject = projects.filter(project => project.title === title);
  const picturesArr = pageProject[0].picturesArr;

  return (
    <div className="ProjectCont">
       <TopBar/>
       <div className='content'>
          <h1>{title}</h1>
          <div className='sliderCont'>
          <ImageSlider picturesArr={picturesArr} />
        </div>
        <p>{pageProject[0].subtitle}</p>
        </div>
    </div>
  )
}
export default ProjectPage

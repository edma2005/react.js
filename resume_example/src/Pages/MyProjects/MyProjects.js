import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import TopBar from "../../Components/TopBar/TopBar";
import '../MyProjects/MyProjects.css';
import { projects } from "../../Consts/consts";

const MyProjects = () => {
  return (
    <div>
        <TopBar/>
        <div className="myProjectsContent">
          <h1>My Projects:</h1>
          <div className="grid-table">

            {projects.map(projectC => 
            <ProjectCard title={projectC.title} image={projectC.image} subtitle={projectC.subtitle} key={projectC.title}/>)
            }
          </div>
        </div>
    </div>
  )
}

export default MyProjects

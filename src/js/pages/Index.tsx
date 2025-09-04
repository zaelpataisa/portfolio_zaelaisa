import AboutContainer from "./AboutContainer";
import EducationContainer from "./EducationContainer";
import PrincipalContainer from "./PrincipalContainer";
import ProjectsContainer from "./ProjectsContainer";
import SkillsContainer from "./SkillsContainer";
import WorksContainer from "./WorksContainer";

const Index = () => {

  return (
    <>
      <div className="flex flex-col justify-start items-start md:flex-row w-full">
        {/* Contenedor principal */}
        <div 
          className="md:fixed flex md:justify-center md:items-center min-h-[100dvh] w-full md:w-3/8 opacity-100"
        >
          <PrincipalContainer />
        </div>

        {/* Contenedor de contenido */}
        <div 
          className="md:absolute flex flex-col h-auto w-full md:w-5/8 bg-[var(--colors-01)]/75 right-0 p-10"
        >
          <AboutContainer />
          <SkillsContainer />
          <EducationContainer />
          <WorksContainer />
          <ProjectsContainer />
        </div>
      </div>
    </>
  );
}
export default Index;
import AboutContainer from "./AboutContainer";
import EducationContainer from "./EducationContainer";
import PrincipalContainer from "./PrincipalContainer";
import SkillsContainer from "./SkillsContainer";
import WorksContainer from "./WorksContainer";

const Index = () => {

  return (
    <>
      <div className="flex w-full relative ">
        {/* Contenedor principal */}
        <div className="fixed flex h-full w-3/8 opacity-100">
          <PrincipalContainer />
        </div>

        {/* Contenedor de contenido */}
        <div className="absolute flex flex-col h-auto w-5/8 bg-[var(--colors-01)]/95 right-0 p-10">
          <AboutContainer />
          <SkillsContainer />
          <EducationContainer />
          <WorksContainer />
        </div>
      </div>
    </>
  );
}
export default Index;
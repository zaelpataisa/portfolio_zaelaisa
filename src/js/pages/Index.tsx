import AboutContainer from "../components/AboutContainer";
import PrincipalContainer from "../components/PrincipalContainer";
import SkillsContainer from "../components/SkillsContainer";

const Index = () => {

  return (
    <>
      <div className="flex w-full relative ">
        {/* Contenedor principal */}
        <div className="fixed flex h-full w-1/2 opacity-1">
          <PrincipalContainer />
        </div>

        {/* Contenedor de contenido */}
        <div className="absolute flex flex-col h-auto w-1/2 bg-[var(--colors-01)]/95 right-0 p-10">
          <AboutContainer />
          <SkillsContainer />
        </div>
      </div>
    </>
  );
}
export default Index;
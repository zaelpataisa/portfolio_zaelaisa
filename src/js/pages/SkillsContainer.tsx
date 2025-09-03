import IconSelect from "../components/Icons";
import type { IconCode } from "../components/Icons";

  type SkillItem = {
    text: string;
    icon: IconCode;
  };

  type SkillCategory = {
    title: string;
    content: SkillItem[];
  };

const SkillsContainer = () => {
  const SkillsData: { data: SkillCategory[] } = {
    data: [
      {
        title: 'Web development', 
        content: [
          { text: 'Bootstrap',    icon: 'FaBootstrap' },
          { text: 'CSS',          icon: 'FaCss3Alt' },
          { text: 'Tailwind',     icon: 'RiTailwindCssFill' },
          { text: 'PHP',          icon: 'SiPhp' },
          { text: 'Laravel',      icon: 'FaLaravel' },
          { text: 'HTML',         icon: 'FaHtml5' },
          { text: 'Javascript',   icon: 'SiJavascript' },
          { text: 'React',        icon: 'FaReact' },
          { text: 'Typescript',   icon: 'SiTypescript' },
        ]
      },
      {
        title: 'Database Managment', 
        content: [
          { text: 'MySQL',        icon: 'GrMysql' },
        ]
      },
      {
        title: 'Software Developer', 
        content: [
          { text: 'Java',         icon: 'FaJava' },
          { text: 'Python',       icon: 'FaPython' },
        ]
      },
      {
        title: 'Electronics and Robotics', 
        content: [
          { text: 'Arduino',      icon: 'SiArduino' },
          { text: 'Raspberry',    icon: 'FaRaspberryPi' },
        ]
      },
      {
        title: 'Inmersive Reality', 
        content: [
          { text: 'Unity',        icon: 'FaUnity' },
          { text: 'Meta Quest',   icon: 'SiMeta' },
          { text: 'Vuforia',      icon: 'TbAugmentedReality2' },
          { text: 'Cardboard',    icon: 'FaVrCardboard' },
        ]
      }
    ]
  }

  return (
    <>
      <div className="flex flex-col justify-start items-start space-y-4 min-h-[100vh]" id="SkillsContainerDiv">
        <p className="text-[2.5rem] text-[var(--colors-06)] font-bold font-rFont">
          Tecnologías
        </p>
        {SkillsData.data && SkillsData.data.length > 0 ? (
            SkillsData.data.map((item, index) => (
              <div key={index} className="flex flex-col justify-center items-center w-full border-2 border-[var(--colors-06)] bg-[var(--colors-06)]/35 rounded-lg space-y-2">
                <div className="flex justify-center items-center p-2">
                  <p className={'text-[var(--colors-06)] text-[1.25rem] font-bold font-osFont'}>
                    {item.title}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center items-center w-full p-2">
                  {item.content && item.content.length > 0 ? (
                    item.content.map((item2, index2) => (
                      <div key={index2} className="flex justify-center items-center w-1/3 p-1">
                        <div className="flex flex-col justify-center items-center border-2 border-[var(--colors-06)]/25 rounded-lg w-full">
                          <div className="py-2">
                            <p className="text-[var(--colors-08)] text-[3rem]">
                              <IconSelect iconCode={item2.icon} />
                            </p>
                          </div>
                          <div className="pb-2">
                            <p className="text-[var(--colors-08)] text-[1rem] font-bold font-rFont">
                              {item2.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className='text-[1rem] text-[var(--colors-02)] font-osFont font-bold'>
                      Error en la carga de datos
                    </p>
                  )}
                </div>
              </div>
            ))
        ) : (
          <p className='text-[1rem] text-[var(--colors-02)] font-osFont font-bold'>
            Error en la carga de datos
          </p>
        )}
      </div>
    </>
  );
}

export default SkillsContainer;
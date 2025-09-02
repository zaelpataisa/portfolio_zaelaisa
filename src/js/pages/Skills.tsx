import IconSelect from "../components/Icons";
import Topmenu from "../components/Topmenu";

import type { IconCode } from "../components/Icons";

const Skills = () => {

  type SkillContent = {
    name: string;
    icon: IconCode;
  };

  type SkillCategory = {
    title: string;
    content: SkillContent[];
  };

  const relevantSkills: { data: SkillCategory[] } = {
    data: [
      { title: 'Electronics and Robotics', content: [
        { name: 'Arduino',       icon: 'SiArduino' },
        { name: 'Raspberry',     icon: 'FaRaspberryPi' },
      ]},
      { title: 'Database Managment', content: [
        { name: 'MySQL',         icon: 'GrMysql' }
      ]},
      { title: 'Software Developer', content: [
        { name: 'Java',          icon: 'FaJava' },
        { name: 'Python',        icon: 'FaPython' },
      ]},
      { title: 'Web Development', content: [
        { name: 'HTML',          icon: 'FaHtml5' },
        { name: 'CSS',           icon: 'FaCss3Alt' },
        { name: 'Bootstrap',     icon: 'FaBootstrap' },
        { name: 'Tailwind',      icon: 'RiTailwindCssFill' },
        { name: 'PHP',           icon: 'SiPhp' },
        { name: 'Laravel',       icon: 'FaLaravel' },
        { name: 'Javascript',    icon: 'SiJavascript' },
        { name: 'Typescript',    icon: 'SiTypescript' },
        { name: 'React',         icon: 'FaReact' },
      ]},
      { title: 'Virtual and Augmented Reality', content: [
        { name: 'Unity',         icon: 'FaUnity' },
        { name: 'Meta Quest',    icon: 'SiMeta' },
        { name: 'Vuforia',       icon: 'TbAugmentedReality2' },
        { name: 'Cardboard',     icon: 'FaVrCardboard' },
      ]}
    ]
  }

  return (
    <>
      <div>
        <div className='flex flex-col justify-start items-center w-full h-[100dvh] space-y-6 py-10'>
          <Topmenu />
          <div className="flex flex-wrap justify-center items-stretch w-full">
            {relevantSkills.data && relevantSkills.data.length > 0 ? (
              relevantSkills.data.map((item, index) => (
                <div 
                  key={index}
                  className='
                    flex justify-center items-stretch w-1/3 mb-10'
                >
                  <div className="flex flex-col justify-start items-center aspect-square rounded-lg border-2 border-[var(--colors-06)] p-2 bg-[var(--colors-06)]/25">
                    <p className="font-bold font-osFont text-[1.25rem] text-[var(--colors-06)]">
                      {item.title}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center items-center w-full h-full">
                      {item.content ? (
                        item.content.map((item, index) => (
                          <p
                            key={index}
                            className="flex justify-center text-center w-[30%] text-[2rem]"
                          >
                            <IconSelect iconCode={item.icon} />
                          </p> 
                        ))
                      ) : (
                        <p className='font-bold font-osFont text-[1rem] text-[var(--colors-01)]'>
                          Error en la carga de datos
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className='font-bold font-osFont text-[2rem] text-[var(--colors-06)]'>
                Error en la carga de datos
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
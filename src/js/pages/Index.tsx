import IconSelect from "../components/Icons";
import Topmenu from "../components/Topmenu";
import type { IconCode } from "../components/Icons";

const Index = () => {
  type LinkItem = {
    text: string;
    icon: IconCode;
    link: string;
  };

  const relevantLinks: { data: LinkItem[] } = {
    data: [
      { text: 'Github',    icon: 'FaGithub',      link: 'https://github.com/zaelpataisa/' },
      { text: 'Linkedin',  icon: 'FaLinkedin',    link: 'https://www.linkedin.com/in/elías-zapata-73791432a' },
      { text: 'Instagram', icon: 'FaInstagram',   link: 'https://www.instagram.com/zael_aisa/' },
      { text: 'Email',     icon: 'HiOutlineMail', link: 'mailto:eliaszapata.prof@gmail.com' },
    ]
  }

  return (
    <>
      <div>
        <div className='flex justify-center items-center w-screen h-screen p-20'>
          <Topmenu />

          {/* Contenedor 1 */}
          <div className="flex flex-col justify-center items-start w-[50%] h-full space-y-10 px-6">
            <div className="flex flex-col">
              <p className="text-[var(--colors-06)] text-[3.25rem] font-bold font-osFont">
                Hi! I'm Elias Zapata
              </p>
              <p className="text-[var(--colors-01)] text[2.25rem] font-bold font-osFont">
                Multi-environment developer
              </p>
            </div>
             <p className="vzla-styles flex flex-row items-center text-[var(--colors-06)] text-[1.25rem] gap-0.5 px-4 py-2 bg-[var(--colors-01)]/75 rounded-lg font-bold font-osFont transition-0_3">
              <IconSelect iconCode={'GiVenezuela'} /> 
              <span className="vzla-gradient">
                From Venezuela to the world!
              </span>
            </p>
            <p className="text-[var(--colors-01)] text-[1rem] italic font-iFont">
              "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine". 
              <span className="not-italic text-[var(--colors-06)] font-bold"> Alan Turing</span>
            </p>
          </div>

          {/* Contenedor 2 */}
          <div className="flex flex-col justify-center items-center w-[50%] h-full space-y-6 px-6">
            <div className="flex w-full justify-center">
              <p className="text-[1rem] text-[var(--colors-01)] font-rFont text-center">
                For over 5 years, I've dedicated my career to exploring technology, from software and web development to virtual and augmented reality applications, and robotics. As a tireless creator, I love to immerse myself in new fields to bring innovative projects to life, no matter what I have to learn along the way.
              </p>
            </div>
            <div className="flex flex-row justify-center items-center w-full space-x-4">
              {relevantLinks.data && relevantLinks.data.length > 0 ? (
                relevantLinks.data.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link} 
                    target="_blank"
                    className="text-[2rem] text-[var(--colors-01)] font-bold font-rFont border-2 border-[var(--colors-01)] p-2 rounded-2xl hover:text-[var(--colors-06)] hover:border-[var(--colors-06)]"
                  >
                    <IconSelect iconCode={item.icon} />
                  </a>
                ))
              ) : (
                <p className="text-[1rem] text-[var(--colors-01)] font-bold font-rFont">Error en la carga de datos</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
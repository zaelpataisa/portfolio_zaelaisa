import IconSelect from "../components/Icons";
import type { IconCode } from "../components/Icons";

const PrincipalContainer = () => {


  type RelevantLink = {
    text: string;
    icon: IconCode;
    link: string;
  };

  const relevantLinks: { data: RelevantLink[] } = {
    data: [
      { text: 'Github',    icon: 'FaGithub',      link: 'https://github.com/zaelpataisa/' },
      { text: 'Linkedin',  icon: 'FaLinkedin',    link: 'https://www.linkedin.com/in/elías-zapata-73791432a' },
      { text: 'Instagram', icon: 'FaInstagram',   link: 'https://www.instagram.com/zael_aisa/' },
      { text: 'Email',     icon: 'HiOutlineMail', link: 'mailto:eliaszapata.prof@gmail.com' },
    ]
  }

  return (
    <>
      <div className="flex flex-col justify-center items-start px-10">
        <p className="text-[2rem] text-[var(--colors-06)] font-bold font-rFont">
          ¡Hola! Soy Elías Zapata
        </p>
        <p className="text-[1.5rem] text-[var(--colors-07)] font-bold font-rFont">
          Desarrollador FullStack
        </p>
        <p className="flex flex-row items-center justify-center text-[1.5rem] vzla-gradient font-bold font-iFont my-10">
          <span className="text-[var(--colors-06)]"> 
            <IconSelect iconCode={'GiVenezuela'} /> 
          </span>
          ¡De Venezuela para el mundo!
        </p>
        <div className="flex flex-row justify-center items-center space-x-4">
          {relevantLinks.data && relevantLinks.data.length > 0 ? (
            relevantLinks.data.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                className="p-2 border-1 border-[var(--colors-07)] text-[var(--colors-07)] text-[1.25rem] rounded-lg"
              >
                <IconSelect iconCode={item.icon} />
              </a>
            ))
          ) : (
            <p className='text-[1rem] text-[var(--colors-02)] font-osFont font-bold'>
              Error en la carga de datos
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default PrincipalContainer;
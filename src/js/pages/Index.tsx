import IconSelect from "../components/Icons";
import Topmenu from "../components/Topmenu";

const Index = () => {

  const relevanteLinks = {
    data: [
      {'text': 'Github',         'icon': 'FaGithub',      'link': 'https://github.com/zaelpataisa/'},
      {'text': 'Linkedin',       'icon': 'FaLinkedin',    'link': 'https://www.linkedin.com/in/elías-zapata-73791432a'},
      {'text': 'Instagram',      'icon': 'FaInstagram',   'link': 'https://www.instagram.com/zael_aisa/'},
      {'text': 'Email',          'icon': 'HiOutlineMail', 'link': '#'},
    ]
  }

  return (
    <>
      <div>
        <div className='flex flex-row items-stretch p-8'>
          <Topmenu />
          <div className="flex flex-col w-[50%] space-y-10">
            <div className="flex flex-col">
              <p className="font-rFont font-bold text-[3rem] text-[var(--colors-06)]">
                Elías Zapata
              </p>
              <p className="font-rFont font-bold text-[1.5rem] text-[var(--colors-01)]">
                Multi-enviroment developer
              </p>
            </div>
            <div className="flex flex-row justify-center items-center">
              a
            </div>
            <div className="flex justify-center items-center">
              <p className="text-center italic font-rFont text-[var(--colors-01)]">
                "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine".
              </p>
            </div>
          </div>

          <div className="flex flex-col w-[50%] bg-blue-200/50">
            <p></p>
          </div>
        </div>
        a
      </div>
    </>
  );
}
export default Index;
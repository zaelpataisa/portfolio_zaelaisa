import IconSelect, { type IconCode } from "../components/Icons";
import ModalProjects from "../components/ModalProjects";



const ProjectsContainer = () => {

  const relevantProjects = {
    data: [
      {
        title: 'Sistema de Venta de Inmuebles',
        description: 'Proyecto de trabajo especial de grado para el T.S.U. en Informática en el Instituto Universitario de Tecnología Readic-UNIR. Sistema administrativo para la gestión en la venta de inmuebles.',
        year: '2021',
        company: 'Instituto Universitario de Tecnología Readic-UNIR',
        image: [
          'personal_data/projects/p_01.webp'
        ],
        video: 'https://www.youtube.com/embed/skkKNINfiSA?si=mMCGMO9zwh78AzI0',
        techs: ['SiPhp', 'FaCss3Alt', 'SiJavascript', 'GrMysql']
      },
      {
        title: 'Sistema Wallet',
        description: 'Sistema Wallet de tokens por compras para la farmacia Farmasoluciones.',
        year: '2023',
        company: 'Farmasoluciones',
        image: ['personal_data/projects/p_03.webp'],
        video: 'https://www.youtube.com/embed/YGX0Yf9WLKk?si=gVp7k9PdAOEijIOC',
        techs: ['FaJava', 'GrMysql']
      },
      {
        title: 'El Petroleo y el Lemna en la Cuenca del Lago de Maracaibo',
        description: 'Proyecto desarrollado en Unity 3D-VR para crear conciencia sobre la situación de contaminación que se presenta en dicho lago desde principios de la década del 2000.',
        year: '2024',
        company: 'Biblioteca Pública del Estado Zulia "María Calcaño"',
        image: ['personal_data/projects/p_04.webp'],
        video: 'https://www.youtube.com/embed/NcI-iiz8yOg?si=eM6ts7a-hEpIntAY',
        techs: ['FaUnity', 'SiMeta']
      },
      {
        title: 'Isla de Providencia',
        description: 'Proyecto desarrollado en Unity 3D-VR para exponer la historia de la isla venezolana desde tiempos antiguos hasta la actualidad.',
        year: '2024',
        company: 'Biblioteca Pública del Estado Zulia "María Calcaño"',
        image: ['personal_data/projects/p_05.webp'],
        video: 'https://www.youtube.com/embed/7tYCe8p208Q?si=c_x07A4KROQ2JcJr',
        techs: ['FaUnity', 'SiMeta']
      },
      {
        title: 'Portal Cuenta Cuentos',
        description: 'Nombre original: "Primer Festival de Cuentos Universitarios". Sistema web cuyo objetivo es presentar y resguardar el trabajo realizado en el Primer Festival de Cuentos Universitarios, organizado en la universidad por estudiantes de la carrera de Educación. Además, busca rendir homenaje a la maestra Aida López por su reconocida labor docente a varias generaciones de estudiantes en el país.',
        year: '2024',
        company: 'Universidad Dr. José Gregorio Hernández',
        image: ['personal_data/projects/p_06.webp'],
        video: 'https://www.youtube.com/embed/vN-MYYiEz8o?si=UVklAMQa0AV62HdW',
        techs: ['FaLaravel', 'FaBootstrap', 'SiJavascript', 'GrMysql']
      },
      {
        title: 'Red de datos UJGH',
        description: 'Red de Datos desarrollada para la universidad que propone añadir funcionalidades Wi-Fi en las instalaciones y unir todo en pequeñas LANs para crear la red WAN propia de la universidad, dando como resultado un almacenamiento de información más seguro y eficiente e intercomunicación a través de IP Privadas dentro de una misma red.',
        year: '2024',
        company: 'Universidad Dr. José Gregorio Hernández',
        image: ['personal_data/projects/p_07.webp'],
        video: 'https://www.youtube.com/embed/X7khHGCqpyU?si=ecnNoy7PqzjP9zM2',
        techs: ['SiCisco']
      },
      {
        title: 'Sistema Domótico',
        description: 'Varios sistemas domóticos con distintas funciones, abarcando: [1] sensor de movimiento, sensor de gas y sensor de temperatura. [2] sensor de movimiento, puerta inteligente e iluminación inteligente. [3] sensor de movimiento, puerta inteligente, sensor de temperatura e iluminación inteligente.',
        year: '2024',
        company: '',
        image: [
          'personal_data/projects/p_08_1.webp', 
          'personal_data/projects/p_08_2.webp', 
          'personal_data/projects/p_08_3.webp'],
        video: '',
        techs: ['SiArduino']
      },
      {
        title: 'Portafolio V1.0',
        description: 'Portafolio de Elías Zapata',
        year: '2024',
        company: '',
        image: ['personal_data/projects/p_09.webp'],
        video: '',
        techs: ['SiPhp', 'FaBootstrap', 'SiJavascript']
      },
      {
        title: 'Página de presentación - CLO',
        description: 'Página de presetación de cara al público para Comercializadora la Occidental. Link: https://cloccidental.com',
        year: '2025',
        company: 'Comercializadora la Occidental',
        image: ['personal_data/projects/p_10.webp'],
        video: '',
        techs: ['FaLaravel', 'RiTailwindCssFill', 'SiJavascript', 'GrMysql']
      },
      {
        title: 'Catálogo online de artículos - CLO',
        description: 'Página para la muestra del catálogo de articulos de Comercializadora la Occidental, con funciones personalizadas a los vendedores de la empresa. Link: https://store.cloccidental.com',
        year: '2025',
        company: 'Comercializadora la Occidental',
        image: ['personal_data/projects/p_11.webp'],
        video: '',
        techs: ['FaLaravel', 'RiTailwindCssFill', 'SiJavascript', 'GrMysql']
      },
      {
        title: 'Portafolio V2.0',
        description: 'Portafolio de Elías Zapata',
        year: '2025',
        company: '',
        image: ['personal_data/projects/p_12.webp'],
        video: '',
        techs: ['FaReact', 'RiTailwindCssFill', 'SiTypescript']
      },
      {
        title: 'Sistema estadístico para coordinadores - CLO',
        description: 'Sistema privado estadístico que muestra la data graficada de los vendedores pertenecientes a Comercializadora la Occidental.',
        year: '2025',
        company: 'Comercializadora la Occidental',
        image: ['personal_data/projects/p_13.webp'],
        video: '',
        techs: ['FaReact', 'FaLaravel', 'RiTailwindCssFill', 'SiTypescript', 'GrMysql']
      },
    ]
  }

  return (
    <>
      <div className="flex flex-col justify-start items-start space-y-6 py-10 min-h-[100vh]" id="EducationContainerDiv">
        <p className="text-[2.5rem] text-[var(--colors-06)] font-bold font-rFont">
            Proyectos
        </p>
        <div className="flex flex-wrap w-full">
          {relevantProjects.data && relevantProjects.data.length > 0 ? (
            relevantProjects.data.map((item, index) => (
              <div 
                key={index} 
                className="flex w-full justify-center items-center p-2"
              >
                <div className="flex flex-wrap w-full border-x-2 border-[var(--colors-07)] p-2 text-[var(--colors-07)] space-y-2 bg-[var(--colors-06)]/10">
                  {/* Titulo */}
                  <div className="flex w-7/8">
                    <p className="font-rFont font-bold text-[1rem]">
                      {item.title}
                    </p>
                  </div>

                  {/* Modal link */}
                  <div 
                    className="flex justify-center items-center bg-[var(--colors-06)] w-1/8 rounded-2xl"
                  >
                    <ModalProjects
                      projects_data={item}
                    />
                  </div>

                  {/* Hr */}
                  <div className="border-1 border-[var(--colors-06)]/15 w-full"></div>

                  {/* Año */}
                  <div className="flex w-1/8">
                    <p className="font-osFont font-bold">
                      {item.year}
                    </p>
                  </div>

                  {/* Compañía */}
                  <div className="flex w-7/8">
                    <p className="font-osFont">
                      {item.company}
                    </p>
                  </div>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap justify-start items-center w-full space-x-3">
                    {item.techs && item.techs.length > 0 ? (
                      item.techs.map((item2, index2) => (
                        <div key={index2} className="border-2 border-[var(--colors-06)] text-[1.5rem] rounded-2xl aspect-square p-2">
                          <IconSelect iconCode={item2 as IconCode} />
                        </div>
                      ))
                    ) : (
                      <p className="hidden">nada we</p>
                    )}
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
    </>
  );
}

export default ProjectsContainer;

const WorksContainer = () => {

    const relevantWorks = {
        data: [
            {
                company:    'Farmasoluciones',
                title:      'Sistema de Wallet',
                description:'Software diseñado para Farmasoluciones.',
                years:      '2023',
                role:       'Desarrollador',
                img:        '/personal_data/clients/clients_logo01.webp',
                technology_icon: ['FaJava']
            },
            {
                company:    'Biblioteca Pública del Estado Zulia "María Calcaño"',
                title:      'Preservación del Lago de Maracaibo',
                description:'Hecho para la exposición "Preservación del Lago de Maracaibo".',
                years:      '2023-2024',
                role:       'Desarrollador',
                img:        '/personal_data/clients/clients_logo02.webp',
                technology_icon: ['FaUnity', 'SiMeta']
            },
            {
                company:    'Universidad Dr. José Gregorio Hernández',
                title:      'Primer Festival de Cuentos Universitarios',
                description:'Sistema de cuentacuentos infantibles para la universidad Dr. José Gregorio Hernández',
                years:      '2024',
                role:       'Desarrollador',
                img:        '/personal_data/clients/clients_logo03.webp',
                technology_icon: ['FaLaravel', 'FaBootstrap', 'SiJavascript']
            },
            {
                company:    'E.B.E. Reinaldo Martinez',
                title:      'Mentor de First Tech Challenge',
                description:'Mentor en robótica y programación para el equipo del E.B.E. Reinaldo Martinez en la Copa Ka\'i 2024 de la competición FIRST Global Challenge.',
                years:      '2024',
                role:       'Mentor en Robótica y Programación',
                img:        '/personal_data/clients/clients_logo04.webp',
                technology_icon: ['FaRobot']
            },
            {
                company:    'TechCreativos',
                title:      'Profesor de Robótica',
                description:'Profesor de robótica para el U.E.P. Colegio San Vicente de Paul abarcando las áreas de primer a quinto año de media general.',
                years:      '2024-2025',
                role:       'Profesor de bachillerato',
                img:        '/personal_data/clients/clients_logo05.webp',
                technology_icon: ['FaRobot', 'VscTerminalCmd', 'SiArduino']
            },
            {
                company:    'Comercializadora la Occidental',
                title:      'Desarrollador de sistemas',
                description:'Desarrollador de los módulos web de la empresa encargandome de su presentación profesional, catálogo en linea, sistema administrativo estadístico de vendedores.',
                years:      '2025',
                role:       'Desarrollador web',
                img:        '/personal_data/clients/clients_logo06.webp',
                technology_icon: ['FaLaravel', 'RiTailwindCssFill', 'SiJavascript', 'GrMysql', 'FaReact', 'SiTypescript']
            },
        ]
    }

    return (
        <>
            <div className="flex flex-col justify-start items-start space-y-6 py-10 min-h-[100vh]" id="EducationContainerDiv">
                <p className="text-[2.5rem] text-[var(--colors-06)] font-bold font-rFont">
                    Trabajos
                </p>
                {relevantWorks.data && relevantWorks.data.length > 0 ? (
                    [...relevantWorks.data].reverse().map((item, index) => (
                        <div
                            key={index}
                            className={'flex justify-start items-stretch w-full p-2 border-x-2 border-[var(--colors-06)]'}
                        >
                            <div className="flex flex-col w-4/5 space-y-2">
                                <p className="font-bold font-rFont text-[1.5rem] text-[var(--colors-06)]">
                                    {item.company}
                                </p>
                                <p className="text-[var(--colors-07)] text-[1rem] font-rFont">
                                    <span className="font-bold">Título: </span>
                                    {item.title}
                                </p>
                                <p className="text-[var(--colors-07)] text-[1rem] font-rFont">
                                    <span className="font-bold">Año: </span>
                                    {item.years}
                                </p>
                                <p className="text-[var(--colors-07)] text-[1rem] font-rFont">
                                    <span className="font-bold">Cargo: </span>
                                    {item.role}
                                </p>
                            </div>
                            <div className="flex justify-center items-start w-1/5">
                                <img 
                                    src={item.img} 
                                    alt={item.company}
                                    className={'p-4 w-full bg-[var(--colors-06)] rounded-2xl'}
                                />
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

export default WorksContainer;
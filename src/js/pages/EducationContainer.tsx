
import ModalUJGH from '../components/ModalUJGH';

const EducationContainer = () => {

    const relevantEducation = {
        data: [
            {
                name: 'Instituto de Tecnología Readic-UNIR', 
                degree: 'T.S.U. en Informática', 
                date: '2018-2020', 
                img: '/personal_data/unir_logo.webp',
                reconocimiento: []
            },
            {
                name: 'Universidad Dr. José Gregorio Hernández', 
                degree: 'Ingeniero en Computación', 
                date: 'Desde 2025', 
                img: '/personal_data/ujgh_logo.webp',
                reconocimiento: [
                    'ujgh_20240221.jpg', 
                    'ujgh_20240406_1.jpg', 
                    'ujgh_20240406_2.jpg', 
                    'ujgh_20240627_1.jpg',
                    'ujgh_20240627_2.jpg', 
                    'ujgh_20241109.jpg', 
                    'ujgh_20250621.jpg'
                ]
            }
        ]
    }

    return (
        <>
            <div className="flex flex-col justify-start items-start space-y-6 py-10 min-h-[100vh]" id="EducationContainerDiv">
                <p className="text-[2.5rem] text-[var(--colors-06)] font-bold font-rFont">
                    Educación
                </p>
                {relevantEducation.data && relevantEducation.data.length > 0 ? (
                    relevantEducation.data.map((item, index) => (
                        <div 
                            key={index}
                            className={'flex justify-start items-stretch w-full p-2 border-x-2 border-[var(--colors-06)]'}
                        >
                            <div className="flex flex-col w-4/5 space-y-2">
                                <p className="font-bold font-rFont text-[1.5rem] text-[var(--colors-06)]">
                                    {item.name}
                                </p>
                                <p className="text-[var(--colors-07)] text-[1rem] font-rFont">
                                    <span className="font-bold">Título: </span>{item.degree}
                                </p>
                                <p className="text-[var(--colors-07)] text-[1rem] font-rFont">
                                    <span className="font-bold">Periodo: </span>{item.date}
                                </p>
                                {item.reconocimiento && item.reconocimiento.length > 0 ? (
                                    <div className='flex justify-center items-center'>
                                        <ModalUJGH />
                                    </div>
                                ) : (
                                    <div className="hidden">nada</div>
                                )}
                            </div>
                            <div className="flex justify-center items-center w-1/5">
                                <img 
                                    src={item.img} 
                                    alt={item.name}
                                    className={'p-4 w-full'}
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
    )
}

export default EducationContainer;
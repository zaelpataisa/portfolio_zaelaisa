import * as React from 'react';
import Modal from '@mui/material/Modal';
import IconSelect, { type IconCode } from './Icons';
import CarrouselProjects from './CarrouselProjects';

interface RelevantProjectData {
    title: string;
    description: string;
    year: string;
    company: string;
    image: string[];
    video: string;
    techs: string[];
}

interface ProjectsProps {
    projects_data: RelevantProjectData;
}

const ModalProjects = ({ projects_data }: ProjectsProps) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <a 
                href="javascript:void(0)"
                onClick={handleOpen}
                className='flex justify-center w-full text-[var(--colors-01)]'
            >
                <IconSelect iconCode={'FaAngleDown'} />
            </a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] bg-[var(--colors-01)]/75 p-4 shadow-lg rounded-2xl">
                    <div className="flex flex-wrap w-full space-y-4">
                        {/* Segmento superior */}
                        <div className="flex flex-col w-full md:w-4/4">
                            <p className="text-[2rem] text-[var(--colors-06)] font-bold font-rFont">
                                {projects_data.title}
                            </p>
                            <p className="text-[1.25rem] text-[var(--colors-07)] font-bold font-rFont">
                                {projects_data.company} ({projects_data.year})
                            </p>
                        </div>

                        {/* hr */}
                        <div className='border-[var(--colors-06)]/25 w-4/4 border-1'></div>

                        {/* Segmento izquierdo inferior */}
                        <div className="flex flex-col space-y-6  w-full lg:w-2/4">
                            <div className="flex flex-col space-y-2">
                                <p className="text-[1.5rem] text-[var(--colors-06)] font-bold font-rFont">
                                    Descripción
                                </p>
                                <p className='text-[1rem] text-[var(--colors-02)] text-justify font-osFont'>
                                    {projects_data.description}
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <p className="text-[1.5rem] text-[var(--colors-06)] font-bold font-rFont">
                                    Tecnologías
                                </p>
                                <div className='flex flex-wrap flex-row justify-start items-center w-full space-x-4'>
                                    {projects_data.techs && projects_data.techs.length > 0 ? (
                                        projects_data.techs.map((item, index) => (
                                            <div key={index} className="border-2 border-[var(--colors-07)] text-[2rem] rounded-2xl aspect-square p-2 text-[var(--colors-07)]">
                                                <IconSelect iconCode={item as IconCode} />
                                            </div>
                                        ))
                                    ) : (
                                        <p className='hidden'>nada</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Segmento derecho inferior */}
                        <div className="flex flex-col space-y-4 px-4 w-full lg:w-2/4">
                            <CarrouselProjects 
                                projects_images={projects_data.image}
                            />
                            <iframe width="100%" height="100%" className="videoembed" id="videoembed" src={projects_data.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalProjects;
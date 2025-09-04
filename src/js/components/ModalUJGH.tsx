import * as React from 'react';
import Modal from '@mui/material/Modal';
import CarrouselUJGH from './CarrouselUJGH';
import IconSelect from './Icons';

   

const ModalUJGH = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        
            <a 
                href="javascript:void(0)"
                onClick={handleOpen}
                className='text-[1rem] text-[var(--colors-01)] font-bold font-osFont bg-[var(--colors-06)] rounded-xl w-fit px-4 py-2'
            >
                Reconocimientos
            </a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="absolute flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] bg-[var(--colors-06)]/75 p-4 shadow-lg rounded-2xl">
                    <button
                        onClick={handleClose}
                        className='flex justify-end w-full text-[2rem]'
                    >
                        <IconSelect iconCode={'IoMdClose'} />
                    </button>
                    <CarrouselUJGH />
                </div>
            </Modal>
        </>
    )
}

export default ModalUJGH;
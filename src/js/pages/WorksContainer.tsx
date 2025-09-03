
const WorksContainer = () => {

    const relevantWorks = {
        data: [
            {
                company:    '',
                years:      '',
                role:       '',
                objetive:   '',
                img:        '',
                technology: [
                    ''
                ]
            }
        ]
    }

    return (
        <>
            <div className="flex flex-col justify-start items-start space-y-6 py-10 min-h-[100vh]" id="EducationContainerDiv">
                <p className="text-[2.5rem] text-[var(--colors-06)] font-bold font-rFont">
                    Trabajos
                </p>

            </div>
        </>
    );
}

export default WorksContainer;
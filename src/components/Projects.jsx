const Projects = () => {
    const projectDetails = [
        {
            title: "Feasibility Study on Low-Cost Bio-Gas Plant",
            timeline: "Nov 2020 - Mar 2021",
            description: (
                <>
                    Conducted a comprehensive feasibility study on the implementation of a low-cost bio-gas plant tailored for rural communities, under the academic guidance of Visvesvaraya Technological University. The project aimed to evaluate the technical and economic viability of renewable energy solutions using locally available biodegradable waste.
                    <br />
                    The study involved data collection from rural households, analysis of locally sourced construction materials, and estimation of energy output and cost-efficiency. Environmental factors and community impact were also assessed to ensure sustainability. A detailed technical and financial report was prepared, outlining the steps for deployment and long-term maintenance.
                    <br />
                    Collaborated in a multidisciplinary team to conduct field surveys, model system workflows, and present findings on sustainable energy alternatives. This project enhanced my understanding of renewable energy systems, cost-benefit analysis, and technical documentation while fostering teamwork, research, and project management skills.
                </>
            ),
        },
    ];

    return (
        <div className="mt-16 w-11/12 mx-auto text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-center">Projects</h2>
            <hr className="w-1/2 mx-auto border-3 border-gray-500 rounded-2xl mt-6 mb-4" />
            <div className="mt-10">
                {projectDetails.map((project, index) => (
                    <div key={index} className="mb-2 p-6 sm:p-8 text-white">
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        <p className="text-lg mt-1">{project.timeline}</p>
                        <p className="text-lg mt-3">{project.description}</p>
                        {index !== projectDetails.length - 1 && (
                            <hr className="w-11/12 mx-auto border border-gray-700 mt-6" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

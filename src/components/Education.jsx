const Education = () => {
    const educationDetails = [
        {
            institution: "CMR Institute of Technology",
            location: "Bangalore, Karnataka 560054",
            degree: "BE in Civil",
            duration: "Dec 2017 - Jun 2022",
            cgpa: "CGPA: 6.55",
        },
        {
            institution: "Devika PU Science College",
            location: "Ranebennur, Karnataka 581115",
            degree: "Pre-University - PCMB",
            duration: "Jun 2016 - May 2017",
            cgpa: "Percentage: 80.00%",
        },
        {
            institution: "OM National Public School",
            location: "Ranebennur, Karnataka 581115",
            degree: "CBSE - 10th",
            duration: "Jun 2014 - Mar 2015",
            cgpa: "CGPA: 9.0",
        },
    ];

    return (
        <div className="mt-16 w-11/12 mx-auto text-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center">Education</h2>
            <hr className="w-1/2 mx-auto border-3 border-gray-500 rounded-2xl mt-6 mb-8" />
            
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {educationDetails.map((edu, index) => (
                    <div key={index} className="border-4 rounded-2xl p-6 shadow-lg bg-gray-800 text-white">
                        <p className="text-xl font-semibold">{edu.institution}</p>
                        <p className="text-lg">{edu.location}</p>
                        <p className="text-lg font-semibold">{edu.degree}</p>
                        <p className="text-lg">{edu.duration}</p>
                        {edu.cgpa && <p className="text-lg font-semibold">{edu.cgpa}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;

import { useEffect } from "react";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Feedback from "./Feedback";

const Home = () => {

  return (
    <section className="min-h-screen pt-20 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center w-11/12 mx-auto">
        {/* Text Section */}
        <div className="p-7 m-6 w-full md:w-1/2 text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5">
            Deepak S Patil
          </h1>
          <p className="text-lg md:text-xl font-semibold">
          Enthusiastic and detail-oriented Civil Engineering graduate from CMR Institute of Technology, with a strong passion for data analysis, artificial intelligence, and technology-driven problem solving. Adept at leveraging a solid engineering background to approach analytical challenges with precision and creativity. A proactive and self-motivated learner who has undertaken a variety of self-initiated projects and completed multiple online certifications in data analytics, AI and machine learning, demonstrating a commitment to continuous growth and skill development.
          <br /><br />
          Possesses hands-on experience in SQL, data visualization tools and Python-basics, showcasing a strong foundation in turning complex datasets into actionable insights. Known for analytical thinking, attention to detail and an ability to communicate findings clearly to diverse audiences. Eager to bring value to a forward-thinking organization by applying data-driven strategies, contributing to innovation and growing within a collaborative, fast-paced environment.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="/Deepak-Patil/Deepak.jpg"
            alt="Deepak S Patil"
            className="w-48 md:w-72 lg:w-96 h-auto rounded-full drop-shadow-[0px_0px_80px_rgba(255,0,187,0.9)] object-cover"
          />
        </div>
      </div>

      <Education />
      <Skills />
      <Projects />
      <Feedback />
    </section>
  );
};

export default Home;

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">Contact Me</h2>
      <div className="border-4 border-white p-6 rounded-lg shadow-md w-full max-w-md md:max-w-lg">
        <p className="text-xl md:text-2xl font-bold mb-4"> 
          <a 
            href="mailto:dp17320@gmail.com" 
            className="text-white hover:text-3xl transition-transform duration-200"
          >
            📧 Email
          </a>
        </p>

        <p className="text-xl md:text-2xl font-bold mb-4">
          📞 Phone: 
          <a 
            href="tel:+918073018296" 
            className="text-white hover:text-3xl transition-transform duration-200 ml-2"
          >
            +91 8073018296
          </a>
        </p>

        <p className="text-xl md:text-2xl font-bold mb-4">
          <a 
            href="https://www.linkedin.com/in/raghupatil309/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-3xl transition-transform duration-200"
          >
            🔗 LinkedIn
          </a>
        </p>

        <p className="text-xl md:text-2xl font-bold">
          <a 
            href="/my-portfolio/Raghavendr Patil Resume.pdf" 
            download 
            className="text-white hover:text-3xl transition-transform duration-200"
          >
            📄 Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;

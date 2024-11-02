import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    degree: 'Bachelor of Engineering - Computer Science',
    institution: 'BMS College of Engineering',
    grade: 'CGPA - 7.5',
    duration: 'Dec 2022 - Present',
  },
  {
    degree: 'Pre University College',
    institution: 'RNS PU College',
    grade: '95.4 %',
    duration: 'June 2020 - March 2022',
  },
];

const Education = () => {
  // const [filled, setFilled] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setFilled(true);
  //   }, 500);
  // }, []);

  return (
    <section id="education" className="py-10 bg-gray-100 text-center pl-20 pr-20 shadow-lg dark:bg-gray-900">
      <div className="flex text-center align-center justify-center mr-auto ml-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-8">Education</h2>
        <FaGraduationCap className="dark:text-white text-gray-800 text-2xl" />
      </div>
      <div className=" w-2/4 mx-auto bg-white dark:bg-gray-800 pb-6 shadow-lg rounded-2xl">
        <div className="flex items-center mb-6"></div>
        <div className="relative">
          
          <div
          style={{'left':'4.4rem'}}
            className={`absolute top-6 bottom-5 mb-10 w-1 rounded-md bg-gray-500 h-[88%]`}
          ></div>
          <div  className="absolute left-16 top-5 w-4 h-4 bg-teal-500 rounded-full animate-inside-out"></div>
          <div style={{'top':'9.5rem'}} className="absolute left-16  w-4 h-4 bg-teal-500 rounded-full"></div>
          {education.map((edu, index) => (
            <div key={index} className="relative pb-4 pt-4 "> {/*border-b border-gray-300*/}
              <h3 className="text-xl font-semibold text-teal-400">{edu.degree}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">{edu.grade}</p>
              <p className="text-gray-400">{edu.institution}</p>
              <p className="text-gray-500">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes inside-out {
          0%, 100% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(.8);
          }
        }
        .animate-inside-out {
          animation: inside-out 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Education;

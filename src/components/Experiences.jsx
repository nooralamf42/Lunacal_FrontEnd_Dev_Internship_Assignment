import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiGreensock, SiExpress } from "react-icons/si";

function Experiences() {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Redux", icon: SiRedux, color: "text-purple-500" },
    { name: "GSAP", icon: SiGreensock, color: "text-green-500" },
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Node.js", icon: FaNode, color: "text-green-600" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-500" },
  ];

  return (
    <div className="text-neutral-400 pt-2 lg-pt-3 xl:pt-5 2xl:pt-8 space-y-2  lg:space-y-3 2xl:space-y-5 text-xs lg:text-sm xl:text-md">
      <h2 className="text-md lg:text-xl font-semibold text-neutral-200">
        My Experiences
      </h2>
      <p>
        Throughout my journey as a front-end web developer, I've had the
        opportunity to work with various technologies and frameworks. Each
        project has been a stepping stone, allowing me to expand my skill set
        and tackle new challenges.
      </p>
      <div>
        <div className="grid grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-2">
              <skill.icon className={`text-2xl ${skill.color}`} />
              <span className="hidden xl:inline-block">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;

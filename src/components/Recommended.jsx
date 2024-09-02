import { FaStar, FaExternalLinkAlt } from "react-icons/fa";

function Recommended() {
  const recommendations = [
    {
      title: "Modern React with Redux",
      type: "Course",
      author: "Stephen Grider",
      rating: 4.8,
      link: "https://www.udemy.com/course/react-redux/",
    },
    {
      title: "JS: Understanding the Weird Parts",
      type: "Course",
      author: "Anthony Alicea",
      rating: 4.7,
      link: "https://www.udemy.com/course/understand-javascript/",
    },
  ];

  return (
    <div className="pt-2 lg-pt-3 xl:pt-5 2xl:pt-8 space-y-2  lg:space-y-3 2xl:space-y-5 text-xs lg:text-sm xl:text-md">
      <h2 className="text-md lg:text:lg xl:text-2xl font-semibold text-neutral-200">
        Recommended Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((item, index) => (
          <div key={index} className="bg-neutral-800 p-2 rounded-lg">
            <h3 className="font-semibold text-neutral-200">{item.title}</h3>
            <p className=" text-neutral-400">
              {item.type} by {item.author}
            </p>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-400 mr-1" />
              <span>{item.rating.toFixed(1)}</span>
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              Learn More <FaExternalLinkAlt className="ml-1 text-xs" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommended;

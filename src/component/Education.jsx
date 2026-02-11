export default function Education({ educations = [] }) {
  return (
    <div className="grid gap-4">
      {educations.map((edu, index) => (
        <div
          key={index}
          className="rounded-xl bg-white border-2 border-black p-5 shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
        >
          <div className="flex flex-col md:flex-row gap-4 items-start">
            {/* Logo */}
            <div className="shrink-0">
              <img
                src={edu.logo}
                alt={edu.institution}
                className="w-20 h-20 object-contain rounded-xl border-2 border-gray-300 p-2 bg-white transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-bold text-xl md:text-2xl font-comic mb-1">
                {edu.institution}
              </h3>
              <p className="text-base md:text-lg text-gray-700 font-semibold mb-1">
                {edu.major}
              </p>
              {edu.gpa && (
                <p className="text-base md:text-lg text-gray-700 font-semibold mb-1">
                  GPA: {edu.gpa}
                </p>
              )}
              <p className="text-sm md:text-base text-gray-600">{edu.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

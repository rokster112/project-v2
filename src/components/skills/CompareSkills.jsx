import React from "react";

export default function CompareSkills({ compare, expanded }) {
  return (
    <>
      <p className="text-yellow-400 font-semibold">Comparing Skills:</p>

      <div className={`overflow-x-auto bg-gray-800 rounded-md p-2`}>
        <div
          className={`inline-block min-w-[450px] w-full transition-all duration-500 ease-in-out ${
            expanded ? "max-w-screen" : "max-w-[900px]"
          }`}
        >
          <div className="grid w-full grid-cols-3 text-blue-400 border-b border-gray-700 font-semibold p-1">
            <p>Skill</p>
            <p>Category</p>
            <p>Proficiency</p>
          </div>

          <div className="grid grid-cols-3 p-1">
            {compare
              .filter((comp) => !Object.keys(comp).includes("error"))
              .map((comp) => (
                <React.Fragment key={comp.title}>
                  <p>{comp.title}</p>
                  <p>{comp.category}</p>
                  <div className="flex items-center gap-2">
                    <p className="w-fit">{comp.score}</p>
                    <div className="bg-gray-700 w-full relative h-2 rounded-lg">
                      <div
                        style={{ width: `${comp.score}%` }}
                        className="absolute h-full bg-green-600 z-10 rounded-lg"
                      />
                    </div>
                  </div>
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>

      {compare.map(
        (comp) =>
          comp?.error && (
            <p className="text-red-400" key={comp.error}>
              {comp.error}
            </p>
          )
      )}
    </>
  );
}

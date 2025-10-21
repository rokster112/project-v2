export default function SingleSkill({ skill, isLight }) {
  return (
    <div className="text-blue-400">
      <p>
        Name:{" "}
        <span className={`${isLight ? "text-black" : "text-white"}`}>
          {skill.title}
        </span>
      </p>
      <p>
        Category:{" "}
        <span className={`${isLight ? "text-black" : "text-white"}`}>
          {skill.category}
        </span>
      </p>
      <p>
        Proficiency:{" "}
        <span className={`${isLight ? "text-black" : "text-white"}`}>
          {skill.score}
        </span>
      </p>
      <div className="relative bg-gray-700 w-full h-2 rounded-lg">
        <div
          style={{ width: `${skill.score}%` }}
          className={`absolute h-full z-10 bg-green-600 rounded-lg`}
        ></div>
      </div>
    </div>
  );
}

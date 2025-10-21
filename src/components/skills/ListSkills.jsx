export default function ListSkills({ skills, title }) {
  return (
    <div className="flex flex-col">
      <p className="text-blue-400 font-semibold">{title}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((t) => (
          <p className="bg-gray-800 w-fit py-1 px-2 rounded-md hover:bg-gray-700">
            {t.title} <span className="text-blue-400">{t.score}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

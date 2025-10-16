export default function Tech({ p, activeProject }) {
  let wordCount = activeProject ? p.length : 4;
  const truncatedSkills = p.tech.length - wordCount;
  return (
    <div className="flex flex-row flex-wrap gap-2 items-center w-full">
      {p.tech.slice(0, wordCount).map((t) => (
        <p
          key={t}
          className="text-sm py-1 px-2 rounded-lg bg-slate-600 text-green-600 font-semibold"
        >
          {t}
        </p>
      ))}
      {truncatedSkills > 0 ? (
        <p className="text-sm py-1 px-2 rounded-lg bg-slate-600 text-green-600 font-semibold">
          +{truncatedSkills}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default function CategoryBtns({
  buttons,
  handleCategoryClick,
  category,
}) {
  return (
    <div className="flex flex-row items-center justify-center gap-6 mb-10 flex-wrap">
      {buttons.map((btn) => (
        <button
          key={btn.title}
          onClick={() => handleCategoryClick(btn.value)}
          className={`cursor-pointer transition-all duration-400 ease-in-out flex flex-row-reverse justify-center items-center min-w-34 rounded-md p-4 ${
            btn.value === category
              ? "bg-green-600"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          <h4 className="font-semibold">{btn.title}</h4>
          <div className="text-green-800 pr-2">{btn.icon}</div>
        </button>
      ))}
    </div>
  );
}

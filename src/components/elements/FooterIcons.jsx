import { Link } from "react-router-dom";

export default function FooterIcons({ icon, text, link }) {
  return (
    <div className="group mx-[12px] bg-white rounded-full w-10 h-10 cursor-pointer flex flex-col items-center justify-center opacity-50 transition duration-300 ease-in-out hover:scale-175 group-hover:scale-120 hover:opacity-100 active:scale-175 active:opacity-100">
      <Link
        to={link}
        className="peer h-6 w-6 transition duration-300 ease-in-out hover:scale-120 active:scale-120"
        aria-label="Home"
      >
        <div className="w-full h-full text-black hover:text-green-500 active:text-green-500">
          {icon}
        </div>
      </Link>
      <p className="invisible peer-hover:visible text-white text-[6px] border border-emerald-600 rounded-sm text-nowrap px-[4px] py-[2px] transition duration-300 ease-in absolute top-[-60%]">
        {text}
      </p>
    </div>
  );
}

import { Home, User, Wrench, Folder, Heart, Mail } from "lucide-react";
import FooterIcons from "./elements/FooterIcons";

export default function Footer() {
  const iconArray = [
    { icon: <Home />, text: "Home", link: "/" },
    { icon: <User />, text: "About Me", link: "/about" },
    { icon: <Wrench />, text: "Skills", link: "/skills" },
    { icon: <Folder />, text: "Projects", link: "/projects" },
    { icon: <Heart />, text: "Interests", link: "/interests" },
    { icon: <Mail />, text: "Contact Me", link: "/contact" },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full min-w-[330px] max-w-[450px] mb-4 z-50">
      <div className="group rounded-md border-1 border-slate-700 transition duration-300 xs:opacity-50 hover:scale-105 hover:opacity-100 text-white flex flex-row justify-between items-center p-1 mx-2 sm:p-4 ">
        {iconArray.map((item, index) => (
          <FooterIcons
            key={index}
            icon={item.icon}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

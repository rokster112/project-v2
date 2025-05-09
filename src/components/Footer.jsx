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
    <div className="group rounded-md transition duration-300 xs:opacity-30 hover:scale-105 hover:opacity-100 text-white absolute flex flex-row justify-between items-center bottom-0 w-full xs:w-auto sm:w-auto md:w-auto lg:auto xs:left-1/2 xs:transform xs:-translate-x-1/2 p-4 border-2 border-emerald-600 mb-4">
      {iconArray.map((item, index) => (
        <FooterIcons
          key={index}
          icon={item.icon}
          text={item.text}
          link={item.link}
        />
      ))}
    </div>
  );
}

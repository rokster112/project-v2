import DefaultCarousel from "../components/Carousel";
import { hobbiesList } from "../data/values";

export default function Interests() {
  const basketballImages = import.meta.glob(
    "../assets/interest-assets/basketball/*.{png,jpg,jpeg,webp}",
    { eager: true }
  );
  const basketballUrls = Object.values(basketballImages).map(
    (img) => img.default
  );
  const natureImages = import.meta.glob(
    "../assets/interest-assets/nature/*.{png,jpg,jpeg,webp}",
    { eager: true }
  );
  const natureUrls = Object.values(natureImages).map((img) => img.default);

  return (
    <div className="min-h-screen bg-black text-white px-2 xs:px-14 flex flex-col gap-10">
      <h1 className="text-[40px] xs:text-[48px] sm:text-[55px] md:text-[68px] font-bold text-center pt-10">
        My <span className="text-green-600">Interests</span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hobbiesList.map((h) => (
          <div
            key={h.title}
            className="hover:border-green-600 transition-border duration-400 border-1 border-slate-700 bg-slate-800 w-full h-full p-4 rounded-md"
          >
            <div className="flex flex-row items-center">
              <p className="h-8 w-8 mr-2 text-green-600">{h.icon}</p>
              <h3 className="text-2xl">{h.title}</h3>
            </div>
            <p>{h.description}</p>
          </div>
        ))}
      </div>
      <div className="[&>*:nth-child(even)]:flex [&>*:nth-child(even)]:flex-col [&>*:nth-child(even)]:lg:items-end grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-600">
            Basketball
          </h2>
          <DefaultCarousel content={basketballUrls} />
          <h3 className="text-xl font-semibold">
            What <span className="text-green-600">Basketball</span> Taught Me
          </h3>
          <h5 className="text-lg italic">
            “Basketball taught me that teamwork and communication matter more
            than individual skill.„
          </h5>
          <p className="">
            I’ve been playing basketball since I was 11, competing at school,
            college, university, and men’s team levels. Through these
            experiences, I learned how essential teamwork, communication, and
            trust are, and I strengthened these skills by working closely with
            teammates to reach shared goals on the court. Following EuroLeague
            and NBA games continues to inspire me and reminds me of the
            dedication and collaboration required at the highest levels of the
            sport.
          </p>
        </div>
        <div className="lg:text-end flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Nature</h2>
          <DefaultCarousel content={natureUrls} />
          <h3 className="text-xl font-semibold text-green-600">
            What <span className="text-white">Nature</span> Taught Me
          </h3>
          <h5 className="text-lg italic">
            "Nature taught me to stay grounded and appreciate the world beyond
            myself."
          </h5>
          <p>
            Spending time in nature helps me disconnect from daily distractions
            and reset my focus. Whether it’s hiking, walking through forests, or
            exploring new trails, I find it clears my mind and helps me think
            more creatively.
          </p>
        </div>
      </div>
    </div>
  );
}

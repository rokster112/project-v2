import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { budget, contactInfo, timeline } from "../data/values";
import { HandleChange } from "../components/hooks/HandleChange";
const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactMe() {
  const [response, setResponse] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    number: "",
    description: "",
    budget: "",
    timeline: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await emailjs.send(service, template, formData, key);
      setResponse("Message sent successfully!");
      setFormData((prev) =>
        Object.fromEntries(Object.keys(prev).map((key) => [key, ""]))
      );
    } catch (error) {
      setResponse("Oops, something went wrong.");
    } finally {
      setTimeout(() => {
        setResponse(null);
      }, 3000);
    }
  }
  return (
    <div className="min-h-screen bg-black text-white px-2 xs:px-14 flex flex-col gap-4">
      <h1 className="text-[48px] font-bold text-center pt-4">Get In Touch</h1>
      <p className="text-slate-400 self-center text-center max-w-150">
        Interested in working together? Fill out the form below with some info
        about your project, and I'll get back to you as soon as possible.
      </p>
      <div className="flex flex-col lg:flex-row w-full gap-6 pb-2">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-full h-fit bg-slate-800 p-4 rounded-md border-1 border-slate-500 gap-4 grid"
        >
          <label className="text-xl font-semibold text-center">
            Want to hire me for your freelance project?
          </label>
          <div className="w-full flex flex-col sm:grid grid-cols-2 gap-6">
            <label className="flex flex-col gap-2 font-semibold">
              <p>
                Name <span className="text-red-700">*</span>
              </p>
              <input
                className="bg-slate-600 rounded-md pl-3 py-3 border-2 border-slate-500 active:border-green-600 focus:border-green-600 outline-0"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your name"
                required
                onChange={(e) => HandleChange(e, setFormData)}
              />
            </label>
            <label className="flex flex-col gap-2 font-semibold">
              Company
              <input
                className="bg-slate-600 rounded-md pl-3 py-3 border-2 border-slate-500 active:border-green-600 focus:border-green-600 outline-0"
                type="text"
                name="company"
                value={formData.company}
                placeholder="Your company"
                onChange={(e) => HandleChange(e, setFormData)}
              />
            </label>
            <label className="flex flex-col gap-2 font-semibold">
              <p>
                Email <span className="text-red-700">*</span>
              </p>
              <input
                className="bg-slate-600 rounded-md pl-3 py-3 border-2 border-slate-500 active:border-green-600 focus:border-green-600 outline-0"
                type="email"
                name="email"
                value={formData.email}
                placeholder="your@email.com"
                required
                onChange={(e) => HandleChange(e, setFormData)}
              />
            </label>
            <label className="flex flex-col gap-2 font-semibold">
              Phone Number
              <input
                className="bg-slate-600 rounded-md pl-3 py-3 border-2 border-slate-500 active:border-green-600 focus:border-green-600 outline-0"
                type="tel"
                pattern="[0-9]*"
                name="number"
                value={formData.number}
                placeholder="Your phone number"
                onChange={(e) => HandleChange(e, setFormData)}
              />
            </label>
            <label className="flex flex-col col-span-2 gap-2 font-semibold">
              <p>
                Project Description <span className="text-red-700">*</span>
              </p>
              <textarea
                required
                name="description"
                value={formData.description}
                onChange={(e) => HandleChange(e, setFormData)}
                className="bg-slate-600 rounded-md p-3 border-2 border-slate-500 active:border-green-600 focus:border-green-600 outline-0 min-h-[280px]"
                placeholder="Tell me about your project, goals, and requirements..."
              ></textarea>
            </label>
          </div>
          <div className="flex flex-col sm:grid grid-cols-2 gap-6">
            <label className="flex flex-col gap-2 font-semibold">
              Budget Range
              <select
                className="bg-slate-600 pl-3 py-3 border-2 border-slate-500 rounded-md outline-green-600"
                name="budget"
                value={formData.budget}
                onChange={(e) => HandleChange(e, setFormData)}
              >
                <option value={""}>Select a budget range</option>
                {budget.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 font-semibold">
              Project Timeline
              <select
                className="bg-slate-600 pl-3 py-3 border-2 border-slate-500 rounded-md outline-green-600"
                name="timeline"
                onChange={(e) => HandleChange(e, setFormData)}
                value={formData.timeline}
              >
                <option value={""}>Select a timeline</option>
                {timeline.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {response ? (
            <p
              className={`text-center py-4 ${
                !response.includes("Oops") ? "text-green-600" : "text-red-600"
              }`}
            >
              {response}
            </p>
          ) : (
            ""
          )}
          <button
            className="bg-green-600 rounded-md py-4 transition-all duration-400 hover:bg-green-700 hover:scale-102 cursor-pointer"
            type="submit"
          >
            Send Me an Email
          </button>
        </form>
        <div className="flex-1 flex flex-col justify-between h-full gap-4 lg:h-[775px]">
          {contactInfo.map((c, i) => (
            <div
              key={i}
              className="rounded-md flex flex-col justify-center gap-6 bg-slate-800 border-1 p-6 border-slate-500 lg:min-w-[450px] min-h-[200px]"
            >
              <h3 className="text-2xl font-semibold">{c.title}</h3>
              <div className="flex gap-4">
                <div className="p-2 rounded-md text-green-600">{c.icon}</div>
                <div className="flex flex-col">
                  <p>{c.iconLabel}</p>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-green-600 hover:text-green-400 active:text-green-400 cursor-pointer"
                  >
                    {c.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col p-4 gap-4 bg-slate-800 rounded-md border-1 border-slate-500 lg:min-w-[450px]">
            <h3 className="text-2xl font-semibold">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/rokas-arlauskas/"
                target="_blank"
                className="bg-slate-600 p-3 rounded-md cursor-pointer hover:bg-slate-700"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://github.com/rokster112"
                target="_blank"
                className="bg-slate-600 p-3 rounded-md cursor-pointer hover:bg-slate-700"
              >
                <FaSquareGithub size={32} />
              </a>
            </div>
            <p className="bg-slate-600 p-3 rounded-md">
              Looking forward to collaborating on your next project! I'm
              currently available for freelance work and open to discussing new
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

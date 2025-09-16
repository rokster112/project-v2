import { values } from "../data/values";
import QuoteFetch from "../components/hooks/QuoteFetch";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div>
        <h2>The Beginning</h2>
        <h4>
          I always had an interest in technology, whether it was tinkering with
          devices like phones or laptops to see how they worked or trying to fix
          things just for the challenge. Then I came across General Assembly
          through a work colleague of mine and decided to check it out. They had
          a test that everyone had to do — a basic design challenge — and it
          instantly got me hooked. I've never looked back since.
        </h4>
      </div>
      <div>
        <h3>
          <span>Image</span>Education
        </h3>
        <div>
          <p>Oct 2018 - June 2022</p>
          <p>B.Sc Sports Science and Exercise</p>
          <p>University of East London</p>
        </div>
        <div>
          <p>Sep 2014 - June 2017</p>
          <p>Sports Science and Exercise</p>
          <p>Peterborough Regional College</p>
        </div>
      </div>
      <div>
        <h2>Professional Development</h2>
        <div>
          <h3>Software Engineering Immersive</h3>
          <p>General Assembly</p>
          <p>June 2022 - Sep 2022</p>
          <p>
            A three-month intensive bootcamp focused on full-stack development
          </p>
        </div>
        <div>
          <h3>The Frontend Developer Career Path</h3>
          <p>Scrimba</p>
          <p>2024</p>
          <p>
            Covered a comprehensive frontend curriculum centered around modern
            web technologies like React, responsive design, and component-based
            architecture
          </p>
        </div>
        <div>
          <h3>The Full-Stack Development</h3>
          <p>Scrimba</p>
          <p>2025</p>
          <p>
            A project-based full-stack curriculum covering both frontend and
            backend development using tools like Express.js, Node.js, and
            Supabase
          </p>
        </div>
        <div>
          <h2>
            {"<h1> "}Professional Summary{" </h1>"}
            <p>
              I'm Rokas Arlauskas, a Full-Stack developer with a background in
              Sports Science and a strong drive to create sleek, intuitive, and
              user friendly digital experiences. My transition into tech began
              with General Assembly's immersive bootcamp and continued through
              Scrimba’s Full-Stack Developer Path, where I built real-world
              projects using tools like React, Firebase, Express.js, and
              Node.js. <br /> I enjoy crafting responsive frontend interfaces
              and building out functional backends, always aiming for clean,
              maintainable code. I approach development with curiosity,
              creativity, and a user first mindset, whether I’m debugging,
              designing, or deploying. I'm excited to keep learning and growing
              in a team that values thoughtful design, clear communication, and
              purposeful solutions
            </p>
          </h2>
        </div>
        <div>
          <h2 className="text-4xl my-20">Quote Of The Day</h2>
          <QuoteFetch />
        </div>
        <div>
          <h2>Things I Value</h2>
          {values.map((val, index) => (
            <div key={index}>
              <h3>
                <span>{val.icon}</span>
                {val.title}
              </h3>
              <p>{val.description}</p>
            </div>
          ))}
        </div>
        <div>
          <h2>Finding The Right Path</h2>
          <p>
            Since I was a child, I dreamed of playing professional basketball.
            That ambition stayed with me for years, fueling my discipline and
            determination. But like many dreams, it eventually met reality, and
            I found myself searching for something else that could ignite that
            same level of passion and purpose. <br /> I pursued a degree in
            Sports Exercise and Science, then moved into the construction
            industry, where I quickly advanced to a Supervisor role. I enjoyed
            the challenge, the problem solving, and the hands on nature of the
            work, and my curiosity helped me grow fast. But even then, something
            was missing. <br /> It wasn’t until I discovered web development
            that things started to click. Whether I was building out projects or
            learning a new framework, I felt fully engaged, the same way I once
            did on the court. Coding gave me that sense of curiosity, focus, and
            fulfillment I had been looking for. It’s more than a skillset to me,
            it’s a career I genuinely love doing, day in and day out.
          </p>
        </div>
      </div>
    </div>
  );
}

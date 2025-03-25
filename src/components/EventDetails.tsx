import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Share2 } from "lucide-react";
import electroField from "../images/electro-field.webp";
import shortFilm from "../images/short-film.jpeg";
import eSports from "../images/e-sports.jpg";
import droneWorkshop from "../images/drone-workshop.webp";
import paperPresentation from "../images/Paper-presentaion.jpeg";
import wiredWonders from "../images/Wired-Wonders.jpeg";
import roleAndDice from "../images/Halt-the-dice.jpeg";
import designedToDev from "../images/Design2dev.jpeg";
import reverseCoding from "../images/Decodex.jpeg";
import ojingeoGame from "../images/Ojngeo.jpeg";
import animeQuiz from "../images/Senpai-fans.jpeg";
import auralBliss from "../images/Aural-Bliss.jpeg";
import treasureHunt from "../images/Treasure-hunt.jpeg";

const events = {
  technical: [
    {
      title: "Paper Presentation",
      image: paperPresentation,
      description:
        "Showcase your research ideas and innovative findings to a distinguished panel of academicians and industry professionals.",
      timing: "Day 1 - 10:00 AM to 1:00 PM",
      price: "₹300",
      teamSize: 1 - 2,
      about:
        "This event provides an opportunity for students to present their research papers on emerging technologies, scientific innovations, and engineering advancements. Participants will receive expert feedback and gain recognition for their contributions.",
      rules: [
        "Each participant/team can present **only one** research paper.",
        "Papers must be **original** and should not have been published elsewhere.",
        "A **soft copy** of the paper must be submitted before the event for screening.",
        "Presentation time is **10 minutes**, followed by a **5-minute Q&A** session.",
        "Use of **plagiarized content** will lead to immediate disqualification.",
        "Presentations must follow **IEEE format** and should be in **PPT format**.",
        "Judging criteria: **Originality, Technical Content, Presentation Skills, and Q&A handling.**",
        "Decision of the judges will be **final and binding**.",
      ],
      details:
        "The event will be conducted in **Hall A**. Participants must bring their presentation on a USB drive and report **30 minutes before** their scheduled time.",
    },
    {
      title: "Wired Wonders",
      image: wiredWonders,
      description:
        "Test your knowledge of circuit design and troubleshooting in this electrifying competition!",
      timing: "Day 2 - 10:00 AM to 12:00 PM",
      price: "₹250",
      teamSize: 1 - 2,
      about:
        "This event challenges participants to design, analyze, and troubleshoot circuits. Participants will be provided with real-world problems and required to build functional circuits within the given time.",
      rules: [
        "Participants must bring their own calculators and circuit design tools (if needed).",
        "All circuit components and breadboards will be **provided on-site**.",
        "Each round consists of different tasks: **circuit design, debugging, and real-time implementation**.",
        "Time limit for each round: **30 minutes**.",
        "Marks will be awarded based on **circuit functionality, design efficiency, and time taken**.",
        "Short-circuiting or mishandling of components will lead to disqualification.",
        "Finalists will have to build a **working prototype** of a given circuit.",
      ],
      details:
        "The competition will be held in **Electronics Lab B**. Participants must report **15 minutes before** the event begins.",
    },

    {
      title: "DecodeX",
      image: reverseCoding,
      description:
        "Deconstruct and debug pre-written code to reveal its intended functionality.",
      timing: "Day 3 - 2:00 PM to 4:00 PM",
      price: "₹250",
      teamSize: 1 - 2,
      about:
        "Participants will be given obfuscated or scrambled code snippets and will need to reverse engineer them to understand their logic. The goal is to identify errors, optimize the code, and restore its original functionality.",
      rules: [
        "Each team will receive **multiple code snippets** that need to be debugged and reconstructed.",
        "Programming languages allowed: **C, C++, Python, and Java**.",
        "Participants must provide **comments and explanations** for their solutions.",
        "Marks will be based on **correctness, efficiency, and explanation clarity**.",
        "Use of **online compilers or external help** is strictly prohibited.",
        "Final submissions must be in **text or code file format**.",
        "Judging will consider **code quality, logic, and optimization techniques used**.",
      ],
      details:
        "The event will be conducted in **Coding Lab 2**. Participants should bring their own laptops if required.",
    },
    {
      title: "Halt the Dice",
      image: roleAndDice,
      description:
        "A unique event where rolling the dice leads to unpredictable tech-based quizzes and problem-solving challenges.",
      timing: "Day 3 - 10:00 AM to 12:00 PM",
      price: "₹200",
      teamSize: 2,
      about:
        "Participants will roll dice and complete various technical challenges, including debugging, circuit connections, and quizzes.",
      rules: [
        "Each team must consist of two members.",
        "Participants will roll a dice to determine the challenge they will attempt.",
        "The challenges will include debugging code, circuit problem-solving, and technical quizzes.",
        "Each team gets a limited amount of time to complete their assigned challenge.",
        "Mobile phones and external reference materials are not allowed.",
        "Teams that fail to complete their challenge will be eliminated.",
        "The team with the highest cumulative score after all rounds will be declared the winner.",
        "Judges’ decisions on challenge completion and scoring are final.",
      ],
      details:
        "The event includes three rounds: Qualifier (knockout stage), Challenge Round (technical tasks), and Final Showdown (intense competition).",
    },

    {
      title: "Design to Dev",
      image: designedToDev,
      description:
        "A UI/UX design and development challenge where participants create a website prototype and then convert it into a functional site.",
      timing: "Day 3 - 2:00 PM to 4:00 PM",
      price: "₹250",
      teamSize: 3 - 4,
      about:
        "This event focuses on transforming UI/UX designs into functional web applications through creativity and coding.",
      rules: [
        "Each team must consist of 3-4 members.",
        "Participants must first create a UI/UX design before proceeding to development.",
        "UI/UX designs must be made using either Figma or Canva.",
        "The final website implementation must use HTML, CSS, and JavaScript.",
        "Teams will be given a limited time frame to complete their projects.",
        "Judges will evaluate based on creativity, functionality, and responsiveness.",
        "Plagiarized or copied designs will result in disqualification.",
        "All team members must contribute to both design and development.",
      ],
      details:
        "The event consists of two rounds: UI Design Challenge (designing a website in Figma/Canva) and Development Challenge (converting the design into a working website).",
    },
  ],
  nonTechnical: [
    {
      title: "Ojingeo Game",
      image: ojingeoGame,
      description:
        "Inspired by the viral Korean survival game, this event will push your strategic thinking and endurance to the limit.",
      timing: "Day 1 - 11:00 AM to 1:00 PM",
      price: "₹200",
      teamSize: 1 - 4,
      about:
        "This event is a survival-based challenge inspired by the famous Squid Game. Participants will compete in multiple rounds of physically and mentally challenging games. The last team standing wins the ultimate prize!",
      rules: [
        "Each round will have **elimination-based mini-games**.",
        "Participants must follow the **given rules for each game** to avoid elimination.",
        "Any form of **cheating or misbehavior** will result in immediate disqualification.",
        "Eliminated players must exit the playing area immediately.",
        "Finalists will compete in a **mystery challenge** for the grand prize.",
        "Judging will be based on **survival, performance, and strategy.**",
      ],
      details:
        "The event will be conducted in **Ground Area C**. Participants must wear comfortable clothing suitable for physical activities.",
    },
    {
      title: "Anime Quiz",
      image: animeQuiz,
      description:
        "Test your anime and manga knowledge in this ultimate quiz showdown!",
      timing: "Day 1 - 3:00 PM to 5:00 PM",
      price: "₹150",
      teamSize: 1 - 2,
      about:
        "Are you an anime and manga expert? This quiz will challenge your knowledge across different anime genres, famous characters, theme songs, and classic storylines.",
      rules: [
        "The quiz will consist of **multiple rounds**: MCQs, image recognition, and audio rounds.",
        "Teams can have **up to 2 members**.",
        "Each correct answer earns points; incorrect answers do not result in penalties.",
        "Use of **mobile phones, notes, or any external help is prohibited**.",
        "Tiebreaker questions will be conducted if necessary.",
        "The **team with the highest points** at the end wins!",
      ],
      details:
        "The event will be conducted in **Hall B**. Participants should report **15 minutes before** the event begins.",
    },
    {
      title: "Aural Bliss",
      image: auralBliss,
      description:
        "A music lover’s paradise! 'Aural Bliss' is an exhilarating competition that tests your auditory perception and musical knowledge.",
      timing: "Day 2 - 2:00 PM to 4:00 PM",
      price: "₹150",
      teamSize: 1 - 3,
      about:
        "This event is for all music enthusiasts who love identifying songs, artists, and lyrics. Contestants will go through multiple rounds of music-related challenges, testing their auditory skills and knowledge.",
      rules: [
        "Participants must guess the song, artist, or lyrics based on **instrumentals, sound clips, or scrambled words.**",
        "Each correct answer gives **points**, and incorrect answers do not have penalties.",
        "Bonus rounds will be included for **extra points**.",
        "Participants are **not allowed to use mobile phones or any external help.**",
        "Finalists will face a **rapid-fire round.**",
        "The participant/team with the highest score at the end wins.",
      ],
      details:
        "The event will take place in **Music Room 2**. Participants should arrive **15 minutes early**.",
    },
    {
      title: "Treasure Hunt",
      image: treasureHunt,
      description:
        "Solve cryptic clues and uncover hidden treasures across the campus. An adventurous race against time and opponents!",
      timing: "Day 3 - 10:00 AM to 1:00 PM",
      price: "₹250",
      teamSize: 3 - 5,
      about:
        "Teams will solve riddles and navigate through multiple checkpoints to uncover the hidden treasure. The fastest team to complete all challenges wins.",
      rules: [
        "Each team consists of **3-5 members**.",
        "Teams must **follow the clue sequence** provided at each checkpoint.",
        "The use of **mobile phones or external help** is strictly prohibited.",
        "Each checkpoint must be completed before moving to the next location.",
        "A team caught **tampering with clues or misguiding others** will be disqualified.",
        "All team members must stay together during the hunt.",
        "Teams must respect campus rules and avoid disturbing other events.",
        "The winning team is determined by the fastest completion time.",
      ],
      details:
        "Participants will receive their first clue at the starting point. Each clue leads to a hidden location where the next clue awaits. The final clue will guide the team to the treasure.",
    },
    {
      title: "Electro Field",
      image: electroField,
      description:
        "A series of fun and interactive electronic-themed challenges designed for tech enthusiasts.",
      timing: "Day 3 - 2:00 PM to 4:00 PM",
      price: "₹200",
      teamSize: 2 - 3,
      about:
        "This event is a hands-on electronics challenge where participants must complete tasks involving circuits, sensors, and basic robotics.",
      rules: [
        "Teams must complete **3 electronic challenges** within the given time.",
        "Challenges include **circuit building, component identification, and logic debugging**.",
        "All required electronic components will be **provided on-site**.",
        "Use of **pre-made circuits or mobile assistance is not allowed**.",
        "Judging will be based on **accuracy, speed, and efficiency**.",
        "Any misuse of components may result in disqualification.",
      ],
      details:
        "The competition will be held in **Electronics Lab 3**. Participants should bring their own **basic tools (screwdrivers, pliers, etc.)** if needed.",
    },
  ],
  online: [
    {
      title: "Short Film",
      image: shortFilm,
      description:
        "Unleash your creativity by making a compelling short film in just a few minutes. Show off your storytelling, directing, and editing skills!",
      timing: "Submit by Day 1 - 5:00 PM",
      price: "₹300",
      teamSize: 3 - 5,
      about:
        "Participants will create a short film based on a given theme within the specified time limit. The best films will be showcased at the closing ceremony.",
      rules: [
        "Each team must consist of 3-5 members.",
        "The theme for the short film will be revealed on the event day.",
        "The maximum duration of the short film should be **5 minutes**.",
        "All content (video, audio, images) must be **original** and free from copyright infringement.",
        "Films must be submitted in **MP4 format** with a resolution of at least **720p**.",
        "Any form of plagiarism or pre-recorded content will lead to disqualification.",
        "Offensive, vulgar, or inappropriate content is strictly prohibited.",
        "Judging will be based on **creativity, storytelling, cinematography, and editing skills**.",
        "Late submissions will not be considered.",
      ],
      details:
        "Participants must submit their films online before the deadline. The best films will be screened during the closing ceremony, and winners will receive prizes.",
    },

    {
      title: "E-Sports",
      image: eSports,
      description:
        "Compete in an adrenaline-pumping online gaming tournament featuring some of the most popular multiplayer games!",
      timing: "Day 2 - Online",
      price: "₹200",
      teamSize: 2,
      about:
        "This high-intensity gaming competition brings together e-sports enthusiasts to battle it out in their favorite online multiplayer games. The tournament format will vary based on the selected games.",
      rules: [
        "The tournament will feature **multiple games** (e.g., BGMI, Valorant, CS:GO, FIFA).",
        "Each participant must **register for their preferred game** before the deadline.",
        "Teams must **follow the game-specific rules** and fair play policies.",
        "Any form of **cheating, hacking, or unfair play** will result in an immediate ban.",
        "Participants must have a **stable internet connection** and be available during match timings.",
        "Judging criteria: **Kill count, survival, teamwork, and strategy.**",
        "Winners will be determined based on **game-specific scoring and tournament brackets.**",
      ],
      details:
        "Participants will receive match schedules and lobby details via **Discord** before the tournament begins. Ensure your game account is ready and updated before the event.",
    },
  ],
  workshop: [
    {
      title: "Drone Workshop",
      image: droneWorkshop,
      description:
        "Learn the fundamentals of drone technology, including assembly, calibration, and flying techniques. A must-attend for drone enthusiasts!",
      timing: "Day 1 - Full Day",
      price: "₹1000",
      teamSize: 1,
      about:
        "A hands-on workshop covering drone aerodynamics, control systems, and live flying sessions. Participants will gain practical experience in drone assembly and operation.",
      rules: [
        "This is an **individual participation** workshop (no teams allowed).",
        "Participants will learn about **drone components, assembly, and programming**.",
        "All required materials and drones will be provided at the workshop.",
        "Participants must handle drones with **care and responsibility**.",
        "No unauthorized modifications to the drones are allowed during the session.",
        "A live **flight demonstration** will be conducted under expert supervision.",
        "Each participant must complete a **mini project** using the concepts learned in the workshop.",
        "Certificates of completion will be awarded to all attendees.",
      ],
      details:
        "The workshop consists of theory sessions, hands-on drone building, and live flight demonstrations. By the end, participants will have a basic understanding of UAV technology and flight mechanics.",
    },
  ],
};
import { useEffect } from "react";

const EventDetail = () => {
  const { eventTitle } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about"); // Default tab

  // Scroll to top when the event page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const event = Object.values(events)
    .flat()
    .find((e) => e.title.replace(/\s+/g, "-").toLowerCase() === eventTitle);

  if (!event) {
    return (
      <div className="text-center text-red-500 mt-10 text-xl">
        Event not found
      </div>
    );
  }

  const shareEvent = () => {
    const message = `We PRANAV2K25 team from MSEC presenting an event. Check out this event: ${event.title}! ${window.location.href}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="min-h-screen relative flex items-center justify-center px-6 py-16"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1)), url(${event.image})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Blurred Background Container */}
      <div className="bg-white/10 p-8 rounded-2xl shadow-lg max-w-3xl w-full backdrop-blur-md text-white">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center text-gray-300 hover:text-white mb-6 group"
          onClick={() => {
            // Check event category and navigate accordingly
            if (events.technical.some((e) => e.title === event.title)) {
              navigate("/events/technical");
            } else if (
              events.nonTechnical.some((e) => e.title === event.title)
            ) {
              navigate("/events/non-technical");
            } else if (events.online.some((e) => e.title === event.title)) {
              navigate("/events/online");
            } else if (events.workshop.some((e) => e.title === event.title)) {
              navigate("/events/workshop");
            } else {
              navigate("/events"); // Default fallback
            }
          }}
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Events
        </motion.button>

        {/* Event Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 text-center"
        >
          {event.title}
        </motion.h1>

        <p className="text-gray-300 text-lg text-center mb-4">
          {event.description}
        </p>
        <p className="text-yellow-400 text-lg font-bold text-center">
          {event.timing}
        </p>
        <p className="text-xl text-center font-bold mt-2">Fee: {event.price}</p>

        {/* Buttons for Registration & Sharing */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => navigate("/register")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-bold transition"
          >
            Register
          </button>
          <button
            onClick={shareEvent}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition"
          >
            <Share2 className="w-5 h-5" /> Share
          </button>
        </div>

        {/* TEMPORARY NAVBAR INSIDE BLURRED DIV */}
        <div className="mt-8 bg-white/10 p-4 rounded-lg backdrop-blur-lg shadow-md">
          <div className="flex justify-around text-yellow-300 font-bold text-lg cursor-pointer">
            <span
              className={`p-2 ${
                activeTab === "about" ? "underline text-white" : ""
              }`}
              onClick={() => setActiveTab("about")}
            >
              About
            </span>
            <span
              className={`p-2 ${
                activeTab === "rules" ? "underline text-white" : ""
              }`}
              onClick={() => setActiveTab("rules")}
            >
              Rules
            </span>
            <span
              className={`p-2 ${
                activeTab === "details" ? "underline text-white" : ""
              }`}
              onClick={() => setActiveTab("details")}
            >
              Details
            </span>
          </div>

          {/* Content Based on Active Tab */}
          <div className="mt-4 text-gray-300">
            {activeTab === "about" && (
              <p>
                {event.about || "No additional information about this event."}
              </p>
            )}
            {activeTab === "rules" && (
              <ul className="list-disc list-inside">
                {event.rules
                  ? event.rules.map((rule, index) => <li key={index}>{rule}</li>)
                  : "No specific rules provided for this event."}
              </ul>
            )}
            {activeTab === "details" && (
              <p>{event.details || "No extra details available."}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;

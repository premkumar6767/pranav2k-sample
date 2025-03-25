import { Link } from "react-router-dom";

type EventCardProps = {
  title: string;
  date: string;
};

const EventCard: React.FC<EventCardProps> = ({ title, date }) => (
  <div className="bg-gray-900 p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-400">{date}</p>
  </div>
);

const TechnicalEvents: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <Link to="/" className="text-gray-400 underline">← Back</Link>
      <h1 className="text-3xl font-bold mt-4 text-gray-400">Technical Events</h1>
      <div className="mt-6 space-y-4">
        <EventCard title="AI Hackathon" date="March 22, 2025" />
        <EventCard title="Coding Contest" date="March 25, 2025" />
      </div>
    </div>
  );
};

export default TechnicalEvents;

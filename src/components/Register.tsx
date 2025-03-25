import { useState } from "react";

// Define types
interface FormDataType {
  name: string;
  email: string;
  institution: string;
}

const institutions = [
  { value: "athens", label: "🏛 Athens Academy" },
  { value: "sparta", label: "⚔️ Spartan Tech Institute" },
  { value: "delphi", label: "🔮 Oracle University" },
  { value: "olympus", label: "⚡ Mount Olympus Institute" },
  { value: "corinth", label: "🏺 Corinthian Scholars" },
  { value: "argos", label: "🛡️ Argos Engineering Academy" },
  { value: "trojan", label: "🐴 Trojan Tech Institute" },
];

const SymposiumRegistration: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    institution: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const handleInstitutionSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, institution: value }));
    setDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.institution) {
      alert("⚠️ Zeus commands you to complete all fields before proceeding!");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-gold text-center p-6">
        <img src="/zeus-lightning.gif" alt="Zeus Blessing" className="w-32 h-32 mb-6 animate-pulse" />
        <h2 className="text-4xl font-extrabold text-amber-500">⚡ Congratulations, {formData.name}! ⚡</h2>
        <p className="text-lg mt-4 italic text-gray-300">
          Your name has been inscribed in the scrolls of the **Olympian Symposium**.  
          Athena smiles upon your wisdom, and Zeus himself has witnessed your registration!
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        >
          ✨ Return to the Mortal Realm ✨
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative p-6">
      {/* Glowing gold Greek heading */}
      <div className="bg-black/70 p-8 sm:p-12 rounded-lg shadow-2xl border-t-4 border-amber-600 w-full max-w-lg transform transition duration-500 hover:scale-105 backdrop-blur-md">
        <div className="px-6 py-8 bg-black/50 backdrop-blur-lg rounded-lg shadow-md border border-amber-600">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-500 font-['Cinzel'] animate-pulse">
              🏺 SYMPOSIUM REGISTRATION
            </h2>
            <p className="mt-2 text-sm text-gray-400 italic">
              "Gather, O Seekers of Knowledge, and let the discourse of the gods enlighten thee."
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-amber-500">⚡ Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black border border-amber-500 text-amber-300 placeholder-gray-400 focus:ring-amber-500 focus:border-amber-500 p-2 rounded-md outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-amber-500">📧 Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black border border-amber-500 text-amber-300 placeholder-gray-400 focus:ring-amber-500 focus:border-amber-500 p-2 rounded-md outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Institution Dropdown */}
            <div className="relative">
              <label className="block text-sm font-semibold text-amber-500">🏛 Select Institution</label>
              <div
                className="mt-1 w-full bg-black border border-amber-500 rounded-lg shadow-md cursor-pointer p-2 flex items-center justify-between text-amber-300"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>
                  {formData.institution
                    ? institutions.find((inst) => inst.value === formData.institution)?.label
                    : "Select an institution"}
                </span>
                <span className={`text-amber-600 transform ${dropdownOpen ? "rotate-180" : "rotate-0"} transition`}>
                  ▼
                </span>
              </div>

              {dropdownOpen && (
                <div className="absolute z-10 w-full bg-black border border-amber-600 rounded-lg shadow-lg mt-1 text-amber-300">
                  <input
                    type="text"
                    placeholder="Search institution..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-2 border-b border-gray-700 bg-black text-amber-300 outline-none"
                  />

                  <div className="max-h-40 overflow-y-auto">
                    {institutions
                      .filter((inst) => inst.label.toLowerCase().includes(search.toLowerCase()))
                      .map((inst) => (
                        <div
                          key={inst.value}
                          onClick={() => handleInstitutionSelect(inst.value)}
                          className="px-4 py-2 hover:bg-amber-800 cursor-pointer transition"
                        >
                          {inst.label}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              ⚡ Register for the Symposium
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SymposiumRegistration;

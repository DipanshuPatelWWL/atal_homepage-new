import { FaGlasses, FaFilePrescription, FaClipboardList } from "react-icons/fa";
import { GiMicroscopeLens } from "react-icons/gi";

const tips = [
  {
    icon: <FaGlasses size={40} className="text-red-600" />,
    title: "Learn about Frame",
    desc: "How to Choose the Perfect Eyeglasses for Your Face Shape: Complete Guide 2025",
  },
  {
    icon: <GiMicroscopeLens size={40} className="text-red-600" />,
    title: "Learn about Lens",
    desc: "Progressive Lenses: the Complete Guide 2025",
  },
  {
    icon: <FaFilePrescription size={40} className="text-red-600" />,
    title: "Learn about Prescription",
    desc: "Understanding Your Eyeglass Prescription: Complete Guide 2025",
  },
  {
    icon: <FaClipboardList size={40} className="text-red-600" />,
    title: "Learn about Maintenance",
    desc: "Essential Guide to Eyeglasses Care and Maintenance: Atal Opticals 10 Tips for 2025",
  },
];

export default function EyewearTips() {
  return (
    <section className="bg-black bg-gradient-to-b from-black to-red-600  text-white pb-16 md:px-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Eyewear Insights & Tips</h2>
      <hr className="md:w-116 md:ml-105 mt-2 mb-4 mx-6"></hr>
      <p className="max-w-3xl mx-auto text-gray-300 mb-12">
        Gain valuable knowledge and practical tips to enhance your eyewear experience,
        ensuring comfort, style, and lasting performance.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:mx-20 mx-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-xl shadow-xl hover:shadow-lg transition-all hover:scale-105 hover:cursor-pointer hover:-translate-y-2 hover:bg-black hover:text-white border-2 border-red-600 hover:border-black"
          >
            <div className="flex justify-center mb-4 ">{tip.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
            <p className="mb-4 text-base text-gray-400">{tip.desc}</p>
            <button className="mt-auto border border-red-500 text-red-600 px-4 py-1 rounded-full hover:bg-red-500 hover:text-white transition">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

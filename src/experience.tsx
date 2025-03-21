/**export default function ExperiencePage() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-4xl font-bold text-[#09354a]">Our Experience</h2>
      <p className="mt-4 text-gray-700">
        With years of experience in AI, Data, and Cloud computing, we have successfully
        delivered solutions for enterprises across various industries.
      </p>
    </div>
  );
}**/

import { Link } from "react-router-dom";
import case1 from "./img/case1.png";
import case2 from "./img/case2.png";
import case3 from "./img/case3.png";
import case4 from "./img/case4.png";

export default function ExperiencePage() {
  const caseStudies = [
    {
      id: 1,
      title: "IMPARVISH Reference Architecture for Modern AI/ML Platform",
      description:
        "Designed a scalable and efficient Modern AI/ML Platform architecture, enabling seamless data processing, model training, and deployment. This solution empowers enterprises to accelerate AI adoption with robust automation and cloud-native capabilities.",
      image: case1, // Replace with actual image path
    },
    {
      id: 2,
      title: "IMPARVISH Reference Architecture for Modern Data Platform",
      description:
        "Designed a scalable and efficient Modern Data Platform architecture, enabling seamless data integration, business cataloging, discovery, and governance. This solution empowers enterprises with robust data management, advanced analytics, and AI/ML readiness for smarter decision-making and innovation.",
      image: case2,
    },
    {
      id: 3,
      title: "IMPARVISH Reference Architecture for GenAI",
      description:
        "Designed a Cloud-Native Reference Architecture for Generative AI seamlessly integrates with modern Data and ML platforms, enabling end-to-end AI engineering. It encompasses key components such as embedding pipelines, vector databases, agentic AI workflows, LLM hosting, prompt engineering, AI governance, and scalable infrastructure. This architecture empowers enterprises to develop AI-powered applications while optimizing cost, performance, and responsible AI practices.",
      image: case3,
    },
    {
      id: 4,
      title: "Property Risk Assesment using Catastrophic Modeling - Weather Alerts & Storm Tracking",
      description:
        "A comprehensive Weather Alert and Hurricane data processing solution for property risk and catastrophe modeling. It enables real-time storm tracking, wind probability analysis, and loss estimation, empowering insurers with dynamic risk assessment, claims prediction, and catastrophe underwriting. Advanced modeling ensures proactive customer engagement, portfolio management, and efficient claims settlement.",
      image: case4,
    },
  ];

  return (
    <div className="p-10 text-center">
      <h2 className="text-4xl font-bold text-[#09354a]">Our Experience</h2>
      <p className="mt-4 text-white">
        With years of experience in AI, Data, and Cloud solutions, we have successfully
        delivered solutions for enterprises across various domains.
      </p>

      {/* Case Study Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-left"
          >
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {caseStudy.title}
            </h3>
            <p className="mt-2 text-gray-600">{caseStudy.description}</p>
            <Link to="/contact">
              <button style={{ backgroundColor: "#a8416a" }} className="mt-4 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}



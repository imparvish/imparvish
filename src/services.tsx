import { useParams } from "react-router-dom";

const services = {
  "AI Services": [
    { 
        title: "AI Strategy Consulting & AI Center of Excellence (AI COE)", 
        desc: "We help organizations define AI strategies, implement governance frameworks, and establish AI Centers of Excellence (AI COE). Our consulting services focus on aligning AI initiatives with business goals, ensuring ethical AI adoption, and fostering enterprise-wide AI transformation." 
    },
    { 
        title: "AI & ML Platform", 
        desc: "A robust AI/ML platform designed to streamline data ingestion, model development, training, and deployment. Our platform supports cloud-native, on-premise, and hybrid infrastructures, ensuring scalability and operational efficiency. With built-in automation and monitoring, businesses can accelerate AI adoption effortlessly." 
    },
    { 
        title: "Custom AI/ML Solutions", 
        desc: "We develop tailored AI and ML solutions to solve industry-specific challenges, from predictive analytics to intelligent automation. Our solutions are designed to enhance operational efficiency, reduce costs, and improve decision-making. With deep expertise across industries, we ensure AI models deliver measurable business impact." 
    },
    { 
        title: "Generative AI (GenAI) Solutions", 
        desc: "Harness the power of Generative AI for content creation, automation, and decision support. Our GenAI solutions leverage advanced LLMs and deep learning techniques to generate text, images, code, and more. From AI-driven chatbots to creative AI applications, we help businesses integrate GenAI seamlessly into their workflows." 
    },
    { 
        title: "ML Operationalization (MLOps)", 
        desc: "We provide end-to-end MLOps solutions to ensure smooth AI/ML deployment, monitoring, and lifecycle management. Our approach includes model versioning, performance optimization, and automation of retraining workflows. With robust CI/CD pipelines, businesses can scale AI models efficiently while maintaining accuracy and reliability." 
    },
    { 
        title: "Computer Vision & NLP Solutions", 
        desc: "Leverage AI-powered computer vision and natural language processing (NLP) for automation and insights. Our computer vision solutions enable real-time image recognition, object detection, and video analysis, while NLP solutions power chatbots, sentiment analysis, and intelligent document processing. These technologies drive efficiency across industries, from healthcare to finance." 
    },
    { 
        title: "Ethical AI Practices & Implementation", 
        desc: "We ensure AI solutions are designed with fairness, transparency, and responsibility at their core. Our ethical AI framework focuses on bias detection, explainability, and compliance with global AI regulations. We help organizations build trust in AI by implementing robust governance and human-in-the-loop validation." 
    },
    { 
        title: "Synthetic Data Generation", 
        desc: "We create high-quality synthetic data to enhance AI training while preserving privacy and security. Our solutions address data scarcity, balance class distributions, and comply with data protection regulations. By leveraging synthetic datasets, businesses can improve AI model accuracy without relying on sensitive real-world data." 
    }
  ],
  "Data Services": [
    { 
        title: "Data Strategy & Consulting", 
        desc: "We help organizations develop a comprehensive data strategy aligned with business objectives. Our consulting services cover data architecture, modernization, and AI-driven insights. From assessing current data maturity to implementing best practices, we enable data-driven decision-making and long-term success." 
    },
    { 
        title: "Data Integration & ETL Pipelines", 
        desc: "Seamlessly integrate data from diverse sources with our advanced ETL (Extract, Transform, Load) solutions. We build robust pipelines that clean, process, and unify structured and unstructured data, ensuring high-quality, real-time insights. Our scalable solutions optimize data workflows for analytics and AI applications." 
    },
    { 
        title: "Data Lakes, Warehousing & Data Virtualization Solutions", 
        desc: "Unlock the full potential of your data with modern storage and access solutions. We design and implement data lakes, cloud-based warehouses, and virtualization platforms to centralize and manage vast datasets efficiently. Our solutions enhance performance, scalability, and accessibility for enterprise-wide analytics." 
    },
    { 
        title: "Data Governance", 
        desc: "Ensure data integrity, security, and compliance with a robust data governance framework. We establish policies, metadata management, and access controls to safeguard data while enabling transparency. Our solutions help organizations adhere to regulations like GDPR, HIPAA, and CCPA while maximizing data usability." 
    },
    { 
        title: "Data Analytics", 
        desc: "Transform raw data into actionable insights with our advanced analytics solutions. We offer descriptive, predictive, and prescriptive analytics powered by AI and ML. Our solutions help businesses optimize operations, enhance customer experiences, and drive strategic growth through data-driven intelligence." 
    },
    { 
        title: "Data Catalog & Discovery", 
        desc: "Empower teams with seamless data discovery and metadata management. Our data catalog solutions provide a unified view of enterprise data assets, enabling easy search, lineage tracking, and governance. By fostering data democratization, we help organizations improve efficiency, collaboration, and compliance." 
    }
  ],
  "Cloud Services": [
    { 
        title: "Cloud Migration Strategy & Consulting", 
        desc: "Accelerate your cloud transformation with a well-defined migration strategy. We assess your existing infrastructure, identify the right cloud platforms, and design a seamless migration plan. Our approach minimizes downtime, optimizes costs, and ensures a smooth transition to the cloud while maximizing performance." 
    },
    { 
        title: "Cloud Ops & Cloud Engineering", 
        desc: "Enhance cloud reliability and efficiency with our Cloud Ops and engineering expertise. We provide automated cloud management, continuous monitoring, and performance optimization. Our solutions help businesses streamline operations, improve scalability, and ensure high availability across cloud environments." 
    },
    { 
        title: "Data Lakes, Warehousing & Data Virtualization Solutions", 
        desc: "Leverage scalable cloud-based storage solutions for seamless data access and management. We build modern data lakes and warehouses that unify disparate datasets for analytics and AI applications. Our data virtualization services enable real-time data access without complex integrations, improving agility and efficiency." 
    },
    { 
        title: "Cost Analytics & Automation", 
        desc: "Optimize cloud spending with advanced cost analytics and automation. We help organizations gain visibility into cloud expenditures, identify cost-saving opportunities, and implement automated scaling. Our FinOps-driven approach ensures cost efficiency while maintaining optimal cloud performance and resource utilization." 
    },
    { 
        title: "Cloud Security & Governance", 
        desc: "Strengthen your cloud security posture with robust governance frameworks. We implement identity and access controls, compliance monitoring, and threat detection solutions. Our cloud security services ensure regulatory compliance (GDPR, HIPAA, ISO) while protecting data and workloads from evolving cyber threats." 
    },
    { 
        title: "Data & ML Platform", 
        desc: "Build and scale AI-driven solutions with a powerful cloud-based Data & ML platform. We design end-to-end ML pipelines, data processing frameworks, and AI-driven analytics solutions. Our cloud-native ML platforms enable businesses to train, deploy, and manage models efficiently while ensuring scalability and compliance." 
    }
  ]
};

export default function ServicesPage({ }) {
  const { serviceType = "AI Services" } = useParams();

  const selectedServices = services[serviceType] || [];

  interface Service {
    name: string;
    description: string;
  }

  return (
    <div className="p-10 text-center">
      <h2 className="text-4xl font-bold text-[#09354a] mb-6">
        {serviceType ? serviceType.replace("-", " ") : "Services"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedServices.map((service: Service, index: number) => (
          <div key={index} className="bg-white text-[#0a192f] p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
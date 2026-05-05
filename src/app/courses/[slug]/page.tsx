import { notFound } from "next/navigation";
import CourseClient from "./CourseClient";

type Term = {
  title: string;
  modules: string[];
};

type Course = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  terms: Term[];
};



const courseData: Record<string, Course> = {
  adse: {
  title: "Advanced Diploma in Software Engineering (ADSE AI)",
  tagline: "Build. Earn. Work Globally.",
  description: "AI-powered software engineering program.",
  image: "/adse.png",
  terms: [
    {
      title: "Term 1",
      modules: [
        "Programming Principles and Techniques",
        "Logic Building and Elementary Programming",
        "AI-Driven Dynamic Website Development",
        "Intelligent UI/UX Design with AI Insights",
        "Building Intelligent Interfaces with React",
        "AI-Powered Website Development",
        "Innovate with Generative AI",
        "Data Management with SQL Server",
      ],
    },

    {
      title: "Term 2",
      modules: [
        "Data Processing with XML and JSON",
        "AI-Driven Java Programming",
        "JavaFX and AI Tools",
        "Foundations of AI",
        "Low-Code / No-Code Development",
        "Smart C# Programming",
      ],
    },

    {
      title: "Term 3A (Java)",
      modules: [
        "GenAI Launchpad",
        "Spring Boot AI Apps",
        "Flutter & Dart AI Apps",
        "DevOps with AI",
        "Capstone Project",
      ],
    },

    {
      title: "Term 3B (.NET)",
      modules: [
        "ASP.NET Core AI Apps",
        "Flutter & Dart Apps",
        "DevOps with AI",
        "Capstone Project",
      ],
    },

    {
      title: "Term 4A (Full Stack Java)",
      modules: [
        "MySQL AI Data Systems",
        "Python + AI",
        "Django AI Apps",
        "Docker & Kubernetes",
        "Software Project Management",
      ],
    },

    {
      title: "Term 4B (.NET)",
      modules: [
        "Azure AI Development",
        "Docker & Kubernetes",
        "Python AI Systems",
        "Software Project Management",
      ],
    },

    {
      title: "Term 4C (Oracle)",
      modules: [
        "Oracle SQL",
        "PL/SQL Programming",
        "Database Administration",
      ],
    },

    {
      title: "Term 4D (Networking)",
      modules: [
        "Computer Networks",
        "Cybersecurity",
        "Azure Fundamentals",
        "Ethical Hacking",
      ],
    },

    {
      title: "Term 4E (AIML)",
      modules: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "AI Agents",
      ],
    },

    {
      title: "Term 4F (Data Science)",
      modules: [
        "MongoDB AI Systems",
        "Power BI Analytics",
        "MLOps",
        "Reinforcement Learning",
      ],
    },

    {
      title: "Term 4G (IoT)",
      modules: [
        "Python IoT Programming",
        "AI at the Edge",
        "Smart Networks",
        "Capstone IoT Project",
      ],
    },
  ],
}
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = courseData[slug];

  if (!course) return notFound();

  return <CourseClient course={course} />;
}



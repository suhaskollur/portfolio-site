"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SkillsGrid } from "@/components/skills-grid";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "C++",
        "C#",
        "HTML/CSS3",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React",
        "Angular",
        "Node.js",
        "Spring Boot",
        ".NET Core",
        "FastAPI",
        "GraphQL",
        "Express.js",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "GCP",
        "Microsoft Azure",
        "Elastic Beanstalk",
        "Azure DevOps",
        "Docker",
        "Kubernetes",
        "CI/CD",
      ],
    },
    {
      title: "Databases",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "DynamoDB",
        "Redis",
        "Microsoft SQL Server",
        "NoSQL",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "Jenkins",
        "Postman",
        "Bash Scripting",
        "Tableau",
        "Agile Methodologies",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center space-y-6 mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold gradient-text mb-4">
            Skills
          </h1>
          <div className="h-1 w-36 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various
            technologies and domains. I focus on building scalable systems and data-driven
            solutions.
          </p>
        </motion.div>

        <SkillsGrid categories={skillCategories} />
      </div>
    </div>
  );
}


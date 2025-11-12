"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "@/components/experience-card";

export default function ExperiencePage() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Rutgers Center for Cognitive Science (RuCCS)",
      location: "New Jersey, USA",
      startDate: "August 2024",
      endDate: "August 2025",
      description: [
        "Led development of a full-stack research platform using Node.js, React, and PostgreSQL",
        "Optimized 10K+ records, cutting query response time by 68% through efficient indexing and query tuning",
        "Secured high-traffic RESTful APIs (500+ req/sec) with OAuth2, Redis caching, and Grafana monitoring",
        "Automated CI/CD pipelines using GitHub Actions and Docker, shortening release cycles by 70%",
        "Built a Redis-powered real-time activity tracker, lowering latency by 50ms across user sessions",
      ],
      techStack: [
        "Node.js",
        "React",
        "PostgreSQL",
        "OAuth2",
        "Redis",
        "Grafana",
        "GitHub Actions",
        "Docker",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Bell Teleservices",
      location: "Bengaluru, India",
      startDate: "January 2021",
      endDate: "March 2022",
      description: [
        "Deployed Java-based microservices with Spring Boot on AWS, reducing latency by 30% for 6,000+ daily users",
        "Designed a feature toggle system with .NET Core, React, and SQL Server, cutting deployment errors by 40%",
        "Streamlined deployments by automating rollout pipelines, boosting upgrades by 12% and adding $50K in revenue",
        "Collaborated with a 7-member cross-functional Agile team to deliver bi-weekly feature releases",
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "AWS",
        ".NET Core",
        "React",
        "SQL Server",
        "Agile",
      ],
    },
    {
      role: "Software Engineer - Research Assistant",
      company: "PES University",
      location: "Bengaluru, India",
      startDate: "August 2020",
      endDate: "December 2020",
      description: [
        "Automated a machine learning pipeline for satellite/sensor data using Python, boosting data throughput by 40%",
        "Integrated AWS (S3, RDS, IAM) for secure distributed storage & scalability, reducing processing costs by 15%",
        "Partnered with QA and DevOps teams to implement CI/CD pipelines, reducing deployment time by 60%",
      ],
      techStack: [
        "Python",
        "Machine Learning",
        "AWS",
        "S3",
        "RDS",
        "IAM",
        "CI/CD",
      ],
    },
  ];

  // No search or filters per user request — render experiences as a simple stacked list
  const filtered = experiences;

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
          className="max-w-4xl mx-auto text-center space-y-6 mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Experience
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A journey through my professional experience in software engineering,
            research, and development.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

            <div className="space-y-8">
              {filtered.map((experience, index) => (
                <div key={index} className="relative">
                  <ExperienceCard {...experience} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


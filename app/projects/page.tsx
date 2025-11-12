"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Real-Time Social Media Sentiment Analysis Dashboard",
      description: "Real-time social media sentiment analysis dashboard (Python).",
      techStack: ["Python"],
      githubUrl: "https://github.com/suhaskollur/sentiment-analysis-dashboard",
    },
    {
      title: "Orbis AI-Conversational AI Agent",
      description:
        "Conversational AI WhatsApp Agent powered by n8n, OpenAI, and WhatsApp Business Cloud API — supports text, image, and audio.",
      techStack: ["Node.js", "n8n", "OpenAI"],
      githubUrl: "https://github.com/suhaskollur/Orbis-AI",
    },
    {
      title: "Optimised CPU GPU Data Transfer and Branch Prediction Using SimpleScalar and CUDA",
      description: "Research project for optimized CPU-GPU data transfer and branch prediction (CUDA).",
      techStack: ["CUDA"],
      githubUrl:
        "https://github.com/suhaskollur/Optimised-CPU-GPU-Data-Transfer-and-Branch-Prediction-Using-SimpleScalar-and-CUDA",
    },
    {
      title: "PathFinder",
      description: "PathFinder project (JavaScript).",
      techStack: ["JavaScript"],
      githubUrl: "https://github.com/suhaskollur/PathFinder",
    },
    {
      title: "Incremental Shortest Path Algorithm",
      description: "Forked repository implementing incremental shortest path approaches (C++).",
      techStack: ["C++"],
      githubUrl: "https://github.com/suhaskollur/IncrementalShortestPathAlgorithm",
    },
    {
      title: "Valuation and Forecasting Stock Prices of Publicly Traded Companies",
      description: "Valuation and forecasting stock prices using Spark (Jupyter Notebook).",
      techStack: ["Spark", "Python", "Jupyter"],
      githubUrl:
        "https://github.com/suhaskollur/Valuation-and-Forecasting-Stock-Prices-of-Publicly-Traded-Companies-Using-Spark-Framework",
    },
    {
      title: "Stock Portfolio Account Management System",
      description: "Stock portfolio/account management system (C++).",
      techStack: ["C++"],
      githubUrl: "https://github.com/suhaskollur/Stock-Portfolio-Account-Management-System",
    },
    {
      title: "SavorOps - Fault-Tolerant Order Processing System",
      description: "Forked restaurant takeout project (JavaScript).",
      techStack: ["JavaScript"],
      githubUrl: "https://github.com/suhaskollur/RestaurantTakeOut",
    },
    {
      title: "Effect of Climate Change using Predictive Models with Remote Sensing Data",
      description: "Research notebook on climate effects using remote sensing and predictive models.",
      techStack: ["Jupyter", "Python"],
      githubUrl:
        "https://github.com/suhaskollur/Effects-of-Climate-using-a-Predictive-Model-based-on-Remote-Sensing",
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
          className="max-w-4xl mx-auto text-center space-y-6 mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Projects
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my skills in full-stack
            development, distributed systems, and AI technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-min">
          {projects.map((project, index) => {
            const prettyTitle = project.title
              .replace(/[-_]+/g, " - ")
              .replace(/\s+/g, " ")
              .trim();
            return <ProjectCard key={index} {...project} title={prettyTitle} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}


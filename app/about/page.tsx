"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const timeline = [
    {
      icon: GraduationCap,
      title: "Rutgers University-New Brunswick",
      period: "September 2023 - October 2025",
      location: "New Jersey, USA",
      description: "Graduate Software Engineering student focusing on advanced software systems, distributed computing, and AI applications.",
      achievements: [],
    },
    {
      icon: Briefcase,
      title: "Software Engineer",
      company: "Rutgers Center for Cognitive Science (RuCCS)",
      period: "August 2024 – August 2025",
      location: "New Jersey, USA",
      description: "",
      achievements: [
        "Led development of a full-stack research platform using **Node.js**, **React**, and **PostgreSQL**",
        "Optimized 10K+ records, cutting query response time by 68% through efficient indexing and query tuning",
        "Secured high-traffic **RESTful APIs** (500+ req/sec) with **OAuth2**, **Redis** caching, and **Grafana** monitoring",
        "Automated **CI/CD pipelines** using **GitHub Actions** and **Docker**, shortening release cycles by 70%",
        "Built a **Redis**-powered real-time activity tracker, lowering latency by 50ms across user sessions",
      ],
    },
    {
      icon: Briefcase,
      title: "Software Development Intern",
      company: "Bell Teleservices",
      period: "January 2021 – March 2022",
      location: "Bengaluru, India",
      description: "",
      achievements: [
        "Deployed **Java**-based microservices with **Spring Boot** on **AWS**, reducing latency by 30% for 6,000+ daily users",
        "Designed a feature toggle system with **.NET Core**, **React**, and **SQL Server**, cutting deployment errors by 40%",
        "Streamlined deployments by automating rollout pipelines, boosting upgrades by 12% and adding $50K in revenue",
        "Collaborated with a 7-member cross-functional **Agile** team to deliver bi-weekly feature releases",
      ],
    },
    {
      icon: Code,
      title: "Software Engineer - Research Assistant",
      company: "PES University",
      period: "August 2020 – December 2020",
      location: "Bengaluru, India",
      description: "",
      achievements: [
        "Automated a machine learning pipeline for satellite/sensor data using **Python**, boosting data throughput by 40%",
        "Integrated **AWS** (**S3**, **RDS**, **IAM**) for secure distributed storage & scalability, reducing processing costs by 15%",
        "Partnered with QA and DevOps teams to implement **CI/CD pipelines**, reducing deployment time by 60%",
      ],
    },
  ];

  const strengths = [
    {
      icon: Target,
      title: "Backend Systems",
      description:
        "Expertise in designing and implementing scalable backend architectures using Node.js, Spring Boot, and .NET Core.",
    },
    {
      icon: Code,
      title: "Distributed Systems",
      description:
        "Experience building fault-tolerant, distributed systems with microservices architecture, message queues, and caching strategies.",
    },
    {
      icon: Briefcase,
      title: "Cloud & DevOps",
      description:
        "Proficient in AWS, GCP, Azure, Docker, Kubernetes, and CI/CD pipelines for automated deployment and scaling.",
    },
    {
      icon: GraduationCap,
      title: "AI & Machine Learning",
      description:
        "Applied AI/ML techniques in research projects, including predictive modeling and data analysis with Python.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 space-y-16">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center space-y-8 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold gradient-text mb-6">
              About Me
            </h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-primary/80 to-transparent mx-auto rounded-full" />
          </motion.div>
          <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-medium">
            I&apos;m a passionate Software Engineer with a strong foundation in
            backend development, distributed systems, and AI technologies. My
            journey in software engineering has been driven by{" "}
            <span className="font-bold text-foreground">curiosity</span> and a
            desire to build solutions that make a{" "}
            <span className="font-bold text-foreground">meaningful impact</span>.
          </p>
        </motion.section>

        {/* Timeline */}
        <section className="max-w-6xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold mb-16 text-center gradient-text"
          >
            My Journey
          </motion.h2>
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/60 to-transparent hidden md:block" />
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  <Card className="border-l-4 border-l-primary ml-0 md:ml-16 glass hover:border-primary/80 hover:shadow-2xl transition-all group p-6">
                    <div className="absolute -left-6 md:-left-14 top-8 hidden md:block">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 border-4 border-background shadow-xl group-hover:scale-125 group-hover:shadow-2xl transition-all" />
                    </div>
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-start gap-5">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-primary/25 to-primary/15 group-hover:from-primary/35 group-hover:to-primary/25 transition-all shadow-md">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors mb-2">
                            {item.title}
                          </CardTitle>
                          {item.company && (
                            <CardDescription className="text-xl font-semibold text-foreground mb-1">
                              {item.company}
                            </CardDescription>
                          )}
                          <div className="flex flex-wrap items-center gap-3 mt-2">
                            <CardDescription className="text-base font-semibold text-foreground/80">
                              {item.period}
                            </CardDescription>
                            {item.location && (
                              <>
                                <span className="text-muted-foreground">•</span>
                                <CardDescription className="text-base font-medium text-muted-foreground">
                                  {item.location}
                                </CardDescription>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 pt-4">
                      {item.description && (
                        <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-4">
                          {item.description}
                        </p>
                      )}
                      {item.achievements && item.achievements.length > 0 && (
                        <ul className="space-y-4 list-none">
                          {item.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + idx * 0.05 }}
                              className="flex items-start gap-4 text-lg text-muted-foreground leading-relaxed"
                            >
                              <span className="text-primary font-bold text-xl mt-0.5 flex-shrink-0">•</span>
                              <span
                                className="flex-1"
                                dangerouslySetInnerHTML={{
                                  __html: achievement.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-foreground">$1</strong>'),
                                }}
                              />
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Strengths */}
        <section className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl font-extrabold mb-16 text-center gradient-text"
          >
            My Strengths
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <Card className="h-full glass border-2 border-primary/10 hover:border-primary/50 hover:shadow-2xl transition-all group overflow-hidden relative p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader className="relative z-10 p-0 pb-4">
                      <div className="flex items-center gap-5">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-primary/25 to-primary/15 group-hover:from-primary/35 group-hover:to-primary/25 transition-all shadow-md">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                          {strength.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10 p-0">
                      <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                        {strength.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="max-w-6xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: "Education", value: "M.S. Software Engineering", detail: "Rutgers University-New Brunswick" },
              { label: "Location", value: "Dallas, TX", detail: "Available for opportunities" },
              { label: "Focus Areas", value: "Backend & AI", detail: "Full-Stack Development" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-8 rounded-2xl glass border-2 border-primary/20 hover:border-primary/50 transition-all group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                    {stat.label}
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}


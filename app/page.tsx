"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="absolute inset-0 grid-pattern" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 relative">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-7xl md:text-9xl font-extrabold tracking-tight"
            >
              <span className="gradient-text block mb-3">Suhas Kollur</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                Software Engineer
              </p>
              <p className="text-2xl md:text-3xl text-muted-foreground font-semibold">
                AI & Full-Stack Development
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Graduate Software Engineering student at{" "}
              <span className="font-bold text-foreground">Rutgers University</span>{" "}
              specializing in backend systems, distributed architectures, and
              AI-powered solutions. Passionate about building{" "}
              <span className="font-bold text-foreground">scalable, efficient, and innovative</span> software.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-5 pt-6"
          >
            <Button asChild size="lg" className="group shine relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25 text-lg px-8 py-6 h-auto">
              <a href="/portfolio-site/SuhasKollur_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group glass border-2 hover:border-primary/50 hover:bg-primary/5 transition-all text-lg px-8 py-6 h-auto">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="group hover:bg-primary/10 text-lg px-8 py-6 h-auto">
              <Link href="/contact">
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex items-center justify-center gap-8 pt-8"
          >
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/suhaskollur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl glass border-2 border-primary/20 text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-md hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/suhas-k2411"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl glass border-2 border-primary/20 text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-md hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:kollursuhas.us@gmail.com"
              className="p-4 rounded-xl glass border-2 border-primary/20 text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-md hover:shadow-lg"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Quick Stats Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 relative">
        <div className="absolute inset-0 gradient-mesh opacity-30 -z-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { label: "Years of Experience", value: "2+", icon: "" },
            { label: "Projects Completed", value: "10+", icon: "" },
            { label: "Technologies", value: "20+", icon: "" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative text-center p-10 rounded-2xl glass border-2 border-primary/20 hover:border-primary/50 transition-all cursor-default overflow-hidden shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-5xl md:text-6xl font-extrabold gradient-text mb-3">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Technologies Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Core Technologies
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Technologies I work with daily to build scalable and efficient solutions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Python", "Java", "JavaScript", "TypeScript", "React", "Node.js",
              "Spring Boot", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 rounded-xl glass border-2 border-primary/10 hover:border-primary/40 text-center group cursor-default transition-all"
              >
                <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 relative">
        <div className="absolute inset-0 gradient-mesh opacity-20 -z-10" />
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { title: "View My Work", description: "Explore my projects and contributions", link: "/projects", color: "from-blue-500/20 to-purple-500/20" },
              { title: "Learn About Me", description: "Discover my journey and expertise", link: "/about", color: "from-purple-500/20 to-pink-500/20" },
              { title: "Get In Touch", description: "Let's discuss opportunities", link: "/contact", color: "from-pink-500/20 to-blue-500/20" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link
                  href={item.link}
                  className="block p-8 rounded-2xl glass border-2 border-primary/20 hover:border-primary/50 transition-all group relative overflow-hidden h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-lg">
                      {item.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                      Learn more <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}


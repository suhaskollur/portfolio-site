"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  demoUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card className="group relative h-full overflow-hidden border-2 border-primary/10 bg-card transition-all duration-200 hover:border-primary/40 hover:shadow-lg">
        
        <CardHeader className="relative z-10">
          <div className="flex items-start justify-between gap-4 mb-3">
            <CardTitle className="text-2xl md:text-2xl font-bold group-hover:text-primary transition-colors break-words leading-tight">
              {title}
            </CardTitle>
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40 group-hover:bg-primary transition-all shrink-0" />
          </div>
          <CardDescription className="text-muted-foreground leading-relaxed text-sm md:text-base break-words">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="flex flex-wrap gap-3 items-center">
            {techStack.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 + techIndex * 0.05 }}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="relative z-10 flex gap-2 pt-4">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1"
            >
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="flex-1"
            >
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}


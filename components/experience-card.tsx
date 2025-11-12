"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack: string[];
  index?: number;
  onTagClick?: (tag: string) => void;
}

export function ExperienceCard({
  role,
  company,
  location,
  startDate,
  endDate,
  description,
  techStack,
  index = 0,
  onTagClick,
}: ExperienceCardProps) {
  const [expanded, setExpanded] = React.useState(true);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15 + index * 0.06 }}
      whileHover={{ translateY: -4 }}
    >
      <div className="md:pl-16">
        {/* timeline marker on the left */}
        <div className="absolute left-0 md:left-6 transform -translate-x-1/2 md:translate-x-0 md:relative md:top-0">
          <div className="w-3 h-3 rounded-full bg-primary shadow-md mt-3 md:mt-6" />
        </div>

  <Card className="h-full w-full border-2 border-primary/10 glass hover:border-primary/30 hover:shadow-2xl transition-all group relative overflow-hidden p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <CardHeader className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl md:text-3xl font-extrabold group-hover:text-primary transition-colors">
                {role}
              </CardTitle>
              <CardDescription className="text-base md:text-lg font-semibold text-foreground mt-2">
                {company}
                {location && ` • ${location}`}
              </CardDescription>
            </div>
            <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mt-3 md:mt-0">
              {startDate} - {endDate}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          <div>
            <div>
              <ul className="space-y-3 list-disc list-inside ml-4">
                {description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.12 + index * 0.05 + idx * 0.04 }}
                    className="text-muted-foreground text-base md:text-lg"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted-foreground/10 text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}


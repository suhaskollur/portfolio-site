"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsGridProps {
  categories: SkillCategory[];
}

export function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 + categoryIndex * 0.08 }}
          whileHover={{ y: -6, scale: 1.01 }}
        >
          <Card className="h-full glass border-2 border-primary/8 hover:border-primary/40 hover:shadow-2xl transition-all group relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  {/* simple category icon circle */}
                  <div className="w-5 h-5 rounded-full bg-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 pt-4">
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.32, delay: 0.18 + categoryIndex * 0.08 + skillIndex * 0.03 }}
                    whileHover={{ scale: 1.06 }}
                    className="px-4 py-2 text-base font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}


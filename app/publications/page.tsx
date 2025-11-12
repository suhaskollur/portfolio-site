"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PublicationsPage() {
  const publications = [
    {
      title:
        "Effect of Climate Change using Predictive Models with Remote Sensing Data",
      authors: "Suhas Kollur, et al.",
      venue: "IEEE Conference on Signal Processing and Applications (CSPA) 2023",
      year: "2023",
      description:
        "This paper presents predictive models for analyzing climate change effects using remote sensing data. The research employs machine learning algorithms to process satellite imagery and generate accurate predictions about environmental changes.",
      link: "https://ieeexplore.ieee.org/document/10087637",
      doi: "10.1109/CSPA57546.2023.10087637",
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
            Publications
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Research contributions and academic publications in software
            engineering and data science.
          </p>
        </motion.div>

  <div className="max-w-3xl mx-auto space-y-8">
          {publications.map((publication, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full glass border-2 border-primary/20 hover:border-primary/60 hover:shadow-2xl transition-all group relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader className="relative z-10 p-6">
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl md:text-3xl font-extrabold text-primary mb-2">
                            {publication.title}
                          </CardTitle>
                          <CardDescription className="text-sm text-muted-foreground font-medium">
                            {publication.authors}
                          </CardDescription>
                          <CardDescription className="mt-1 text-sm text-muted-foreground">
                            {publication.venue} • {publication.year}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10 p-6 pt-0">
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{publication.description}</p>
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-xs text-muted-foreground">{publication.doi ? `DOI: ${publication.doi}` : null}</div>
                        <div>
                          <Button asChild variant="default" size="sm" className="px-4 py-2">
                            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <ExternalLink className="h-4 w-4" />
                              View on IEEE Xplore
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


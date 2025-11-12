"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Get In Touch
          </h1>
          <div className="h-1 w-36 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            I am always open to discussing new opportunities, projects, or just having a conversation about technology.
          </p>
        </motion.div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="glass border-2 border-primary/10 p-6">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-semibold">Send a Message</CardTitle>
              <CardDescription className="text-sm md:text-base">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={8}
                    className="min-h-[170px]"
                  />
                </div>
                {submitStatus === "success" && (
                  <div className="p-3 rounded-md bg-green-500/10 text-green-500 text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-3 rounded-md bg-red-500/10 text-red-500 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}
                <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base flex items-center justify-center">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <Card className="glass border-2 border-primary/10 p-4">
            <CardHeader>
              <CardTitle className="gradient-text text-lg md:text-xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:kollursuhas.us@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    kollursuhas.us@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">New Brunswick, NJ</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-primary/10 p-4">
            <CardHeader>
              <CardTitle className="gradient-text text-lg md:text-xl">Social Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <motion.a
                whileHover={{ x: 5 }}
                href="https://linkedin.com/in/suhas-k2411"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base font-medium group-hover:text-primary transition-colors">LinkedIn</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="https://github.com/suhaskollur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base font-medium group-hover:text-primary transition-colors">GitHub</span>
              </motion.a>
            </CardContent>
          </Card>
        </motion.div>
        </div>
      </div>
    </div>
  );
}


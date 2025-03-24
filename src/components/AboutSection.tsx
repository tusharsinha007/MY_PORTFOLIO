"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Linkedin, Github, Award, ExternalLink } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-slate-50 dark:bg-slate-900/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          About Me
        </h2>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a B.Tech cybersecurity student with a strong passion for technology. I'm particularly
              interested in becoming a Java developer and leveraging my analytical thinking, problem-solving
              skills, and meticulous attention to detail to craft secure and efficient software solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My understanding of systems and networks, combined with my ethical mindset, makes me eager
              to contribute to building robust Java applications that protect information and user privacy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a full-time Arch Linux user with expertise in problem solving, object-oriented design,
              and programming.
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Connect with me</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:tusharsinharvvc@gmail.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>tusharsinharvvc@gmail.com</span>
                  </a>
                  <a
                    href="mailto:ts0800@srmist.edu.in"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>ts0800@srmist.edu.in</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tushar-sinha-%2059a389264/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <a
                    href="https://github.com/tusharsinha007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <a
                    href="https://www.hackerrank.com/ts0800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Award className="h-5 w-5" />
                    <span>HackerRank</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

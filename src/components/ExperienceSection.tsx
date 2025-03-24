"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, Briefcase } from 'lucide-react'

interface Experience {
  title: string;
  company: string;
  period: string;
  duration: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: 'Web Development Intern',
    company: 'Prodigy InfoTech',
    period: 'February 2024 - March 2024',
    duration: '2 months',
    skills: ['Web Development'],
  },
  {
    title: 'Web Development Intern',
    company: 'Bharat Intern',
    period: 'March 2024',
    duration: '1 month',
    skills: ['Web Development'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Experience
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="bg-primary/5 pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                  <Badge variant="outline" className="h-fit">
                    {exp.duration}
                  </Badge>
                </div>
                <div className="text-muted-foreground font-medium">{exp.company}</div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex items-center text-sm text-muted-foreground">
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Looking for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileCheck, Shield, Database, Globe, Cloud, Code, Lock, Briefcase } from 'lucide-react'

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  icon: React.ReactNode;
}

const certifications: Certification[] = [
  {
    title: 'Foundations of Cybersecurity',
    issuer: 'Google',
    date: 'March 2024',
    icon: <Shield className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Introduction to Databases',
    issuer: 'Meta (Coursera)',
    date: 'March 2024',
    icon: <Database className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Web Development',
    issuer: 'Prodigy InfoTech',
    date: 'March 2024',
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
  {
    title: 'AWS Academy Graduate - Machine Learning Foundations',
    issuer: 'AWS',
    date: 'February 2024',
    icon: <Cloud className="h-8 w-8 text-primary" />,
  },
  {
    title: 'AWS Academy Graduate - Data Engineering',
    issuer: 'AWS',
    date: 'March 2025',
    icon: <Cloud className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Ethical Hacker',
    issuer: 'Cisco',
    date: 'October 2024',
    icon: <Lock className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Tata Group - Cybersecurity Analyst Job Simulation',
    issuer: 'Forage',
    date: 'January 2025',
    icon: <Briefcase className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Participation in OODP Hackathon',
    issuer: '',
    date: '2022',
    description: 'Object-Oriented Design and Programming',
    icon: <Code className="h-8 w-8 text-primary" />,
  }
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Certifications
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="pb-3 pt-5">
                <div className="flex items-center gap-3 mb-2">
                  {cert.icon}
                  <CardTitle className="text-lg font-bold">{cert.title}</CardTitle>
                </div>
                {cert.description && (
                  <CardDescription className="text-sm">
                    {cert.description}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="text-sm text-muted-foreground flex justify-between items-center">
                  <div className="font-medium">
                    {cert.issuer}
                  </div>
                  <div className="flex items-center gap-1">
                    <FileCheck className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

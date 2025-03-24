"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Database, Bug, Car, Clock, TrafficCone, Package } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  tech: string;
  skills: string[];
}

const projects: Project[] = [
  {
    title: 'Refugee Camp Management Database',
    description: 'Designed a comprehensive relational database model in SQL to manage refugee camp data, encompassing demographics, healthcare, food distribution, shelter, and sanitation.',
    details: 'Utilized ERDs to effectively model entities, their attributes, and relationships within the database. Employed data normalization principles (1NF, 2NF, 3NF, 4NF, 5NF) to ensure data integrity and minimize redundancy.',
    icon: <Database className="h-10 w-10 text-primary" />,
    tech: 'MySQL',
    skills: ['SQL', 'Database Design', 'ERDs', 'Data Normalization'],
  },
  {
    title: 'Customer Relationship Management System',
    description: 'Collaborated on a CRM system, improving customer service and contributing to increased sales through better data management.',
    details: '',
    icon: <Package className="h-10 w-10 text-primary" />,
    tech: 'C++',
    skills: ['C++', 'Data Management', 'Customer Service'],
  },
  {
    title: 'Online Shopping System',
    description: 'Designed and implemented a feature-rich system in C, optimizing user experience and demonstrating expertise in data structures and algorithmic design.',
    details: '',
    icon: <Package className="h-10 w-10 text-primary" />,
    tech: 'C++',
    skills: ['C++', 'Data Structures', 'Algorithmic Design'],
  },
  {
    title: 'Bug Tracking System',
    description: 'Implemented process automation, reducing software bugs through efficient tracking and management.',
    details: '',
    icon: <Bug className="h-10 w-10 text-primary" />,
    tech: 'Python',
    skills: ['Python', 'Process Automation', 'Bug Tracking'],
  },
  {
    title: 'IoT Car Parking Simulation System',
    description: 'Created using iFogSim, optimizing data processing through fog and edge computing and integrating sensors for realistic scenarios.',
    details: '',
    icon: <Car className="h-10 w-10 text-primary" />,
    tech: 'IFogSim',
    skills: ['IoT', 'Fog Computing', 'Edge Computing', 'Sensors'],
  },
  {
    title: 'Task Scheduling System',
    description: 'Developed a task scheduling system to efficiently manage and allocate resources for various tasks within projects, enhancing productivity and organization.',
    details: '',
    icon: <Clock className="h-10 w-10 text-primary" />,
    tech: 'C',
    skills: ['C', 'Resource Management', 'Scheduling Algorithms'],
  },
  {
    title: 'Traffic Light Simulation System',
    description: 'Developed a Traffic Light Simulation System utilizing Assembly Language for Microprocessor 8086, demonstrating adeptness in low-level programming and microprocessor architecture.',
    details: '',
    icon: <TrafficCone className="h-10 w-10 text-primary" />,
    tech: 'Assembly Language (8086)',
    skills: ['Assembly', 'Microprocessor', 'Low-Level Programming'],
  },
  {
    title: 'Automated Inventory Tracking System',
    description: 'Reduced restocking time by 30% and decreased errors in inventory management by 20%.',
    details: '',
    icon: <Package className="h-10 w-10 text-primary" />,
    tech: 'C',
    skills: ['C', 'Inventory Management', 'Process Optimization'],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg border-t-4 border-t-primary/70">
              <CardHeader className="p-5 flex flex-row items-start gap-4">
                <div className="mt-1">{project.icon}</div>
                <div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="mt-2 text-sm">
                    <Badge variant="secondary" className="mr-2">
                      {project.tech}
                    </Badge>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                {project.details && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {project.details}
                  </p>
                )}
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

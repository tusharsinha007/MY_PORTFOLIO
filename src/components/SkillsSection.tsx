"use client"

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Brain, Code, Globe, Layers, Server } from 'lucide-react'

interface Skill {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Beginner';
}

interface SkillCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'core',
    label: 'Core Competencies',
    icon: <Brain className="h-4 w-4" />,
    skills: [
      { name: 'Data Structures', level: 'Advanced' },
      { name: 'Algorithms', level: 'Advanced' },
      { name: 'Operating Systems', level: 'Intermediate' },
      { name: 'Problem Solving', level: 'Advanced' },
      { name: 'Object-Oriented Design', level: 'Advanced' },
    ]
  },
  {
    id: 'programming',
    label: 'Programming Languages',
    icon: <Code className="h-4 w-4" />,
    skills: [
      { name: 'Java', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'C', level: 'Intermediate' },
      { name: 'Rust', level: 'Beginner' },
    ]
  },
  {
    id: 'web',
    label: 'Web Development',
    icon: <Globe className="h-4 w-4" />,
    skills: [
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'React', level: 'Beginner' },
    ]
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Technologies',
    icon: <Layers className="h-4 w-4" />,
    skills: [
      { name: 'Spring Boot', level: 'Intermediate' },
      { name: 'AWS', level: 'Beginner' },
      { name: 'Arch Linux', level: 'Advanced' },
    ]
  },
]

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Advanced': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
      case 'Intermediate': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
      default: return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
    }
  }

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Badge
          variant="outline"
          className="px-3 py-1 text-sm cursor-help transition-all hover:shadow-sm"
        >
          {skill.name}
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit">
        <div className="flex items-center space-x-2">
          <div className={`h-2 w-2 rounded-full ${getLevelColor(skill.level)}`} />
          <span className="text-sm">{skill.level}</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-slate-50 dark:bg-slate-900/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Skills
        </h2>

        <Tabs defaultValue="core" className="max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="pt-4 pb-2">
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <SkillBadge key={idx} skill={skill} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

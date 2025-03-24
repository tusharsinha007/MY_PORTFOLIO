"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, School, Trophy } from 'lucide-react'

interface Education {
  degree: string;
  specialization: string;
  institution: string;
  period: string;
  grade: string;
  icon: React.ReactNode;
}

const educationData: Education[] = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
    specialization: 'Specialization: Cyber Security',
    institution: 'S.R.M. Institute of Science and Technology, Kattankulathur',
    period: 'Expected Graduation: 2026',
    grade: 'CGPA (Current): 8.07',
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
  },
  {
    degree: 'XII - Don Bosco Academy (ISC)',
    specialization: 'Stream: Computer with Mathematics and Science',
    institution: '',
    period: '',
    grade: 'Percentage: 83.6%',
    icon: <School className="h-8 w-8 text-primary" />,
  },
  {
    degree: 'X - Don Bosco Academy (ICSE)',
    specialization: '',
    institution: '',
    period: '',
    grade: 'Percentage: 89%',
    icon: <School className="h-8 w-8 text-primary" />,
  },
]

const achievements: string[] = [
  "Achieved 1 National Level and more than 10 state level Chess certificates"
]

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-slate-50 dark:bg-slate-900/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Education
        </h2>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="mt-1">{edu.icon}</div>
                <div className="space-y-1">
                  <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                  {edu.specialization && (
                    <p className="text-sm text-muted-foreground">{edu.specialization}</p>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {edu.institution && (
                  <p className="font-medium">{edu.institution}</p>
                )}
                <div className="flex justify-between flex-wrap mt-2">
                  {edu.period && (
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  )}
                  <Badge variant="secondary">{edu.grade}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}

          {achievements.length > 0 && (
            <Card className="border-t-4 border-t-primary/70">
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="mt-1">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-xl font-bold">Achievements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                      <p>{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

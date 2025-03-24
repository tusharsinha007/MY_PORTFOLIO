"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="home" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background -z-10" />

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                TUSHAR SINHA
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Cybersecurity Student & Java Developer
              </p>
              <p className="text-muted-foreground max-w-[600px] mt-4">
                Building secure and efficient software solutions
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full border-8 border-white shadow-xl dark:border-gray-800">
              <Image
                src="/images/profile.jpg"
                alt="Tushar Sinha"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

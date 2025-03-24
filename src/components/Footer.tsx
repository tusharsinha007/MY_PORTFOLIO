"use client"

import React from 'react'
import Link from 'next/link'
import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">TS</span>
              <span className="text-lg font-semibold">Tushar Sinha</span>
            </div>
            <p className="text-sm text-gray-400">
              Building secure and efficient software solutions
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex justify-center gap-4">
            <Link
              href="https://www.linkedin.com/in/tushar-sinha-%2059a389264/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/tusharsinha007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:tusharsinharvvc@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © {currentYear} Tushar Sinha. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

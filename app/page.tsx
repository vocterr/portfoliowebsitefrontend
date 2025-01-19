"use client";

import React from "react";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen w-full font-sans">
      <section
        id="hero"
        className="flex flex-col items-center justify-center text-center py-16 px-4"
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Bartosz K</h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          Full-stack Developer • Creative Problem Solver
        </p>
      </section>

      <section id="about" className="max-w-4xl mx-auto py-16 px-4 sm:px-8">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Hi, I'm Bartosz. My destiny is to provide full-stack applications
          using technologies like Next.js, Express, Postgres, Prisma, and
          Tailwind CSS. My goal is to create clean, efficient, and user-friendly
          experiences across the web.
        </p>
        <p className="text-gray-300 leading-relaxed">
          When I'm not coding, I enjoy learning new frameworks, exploring UI/UX
          best practices, and generally continuously learning. Feel free to
          explore my highlighted projects below and contact me if you'd like
          to collaborate!
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="project"
        className="max-w-4xl mx-auto py-16 px-4 sm:px-8 border-t border-gray-700"
      >
        <h2 className="text-3xl font-semibold mb-6">My Projects</h2>

        {/* LUXry (Latest Project) */}
        <div className="space-y-4 text-gray-300 mb-12">
          <h3 className="text-xl font-semibold text-white">Latest Project</h3>
          <h4 className="text-xl font-semibold text-white">LUXry</h4>
          <p>
            This is a highly detailed luxury e-commerce website with a seamless
            user experience. I’ve paid special attention to the UI/UX design, 
            ensuring everything works smoothly from browsing to checkout.
          </p>
          <h2 className="text-center text-white text-lg font-bold">*Thats the actual first project i'm proud of*</h2>
        </div>

        <div className="bg-gray-800 p-4 rounded mb-8">
          <h4 className="font-semibold mb-2 text-white">Demo Account:</h4>
          <p>
            Name: <code className="text-blue-400">admin</code>
          </p>
          <p>
            Email: <code className="text-blue-400">admin</code>
          </p>
          <p>
            Password: <code className="text-blue-400">admin</code>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="https://luxry.vercel.app/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-8 py-3 bg-blue-600 text-center rounded hover:bg-blue-700 transition-colors"
          >
            View Live Project
          </a>
          <a
            href="https://github.com/vocterr/luxry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-8 py-3 bg-gray-700 text-center rounded hover:bg-gray-600 transition-colors"
          >
            GitHub Repo Frontend
          </a>
          <a
            href="https://github.com/vocterr/luxry-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-8 py-3 bg-gray-700 text-center rounded hover:bg-gray-600 transition-colors"
          >
            GitHub Repo Backend
          </a>
        </div>

        {/* finAI (Older Project) */}
        <div className="space-y-4 text-gray-300 mb-8">
          <h3 className="text-xl font-semibold text-white">finAI</h3>
          <p>
            This project is a full-stack web application built with Next.js,
            Express, PostgreSQL, Prisma, and Tailwind CSS. It demonstrates a
            clean architecture, robust authentication, and a beautiful UI.
          </p>
          <p>
            Check out the live demo to explore the app, or use the demo
            credentials below to log in and see all the features in action.
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded mb-8">
          <h4 className="font-semibold mb-2 text-white">Demo Account:</h4>
          <p>
            Name: <code className="text-blue-400">admin</code>
          </p>
          <p>
            Email: <code className="text-blue-400">admin@gmail.com</code>
          </p>
          <p>
            Password: <code className="text-blue-400">admin123</code>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://portfolio1frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-8 py-3 bg-blue-600 text-center rounded hover:bg-blue-700 transition-colors"
          >
            View Live Project
          </a>
          <a
            href="https://github.com/vocterr/portfolio1frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-8 py-3 bg-gray-700 text-center rounded hover:bg-gray-600 transition-colors"
          >
            GitHub Repo Frontend
          </a>
          <a
            href="https://github.com/vocterr/portfolio1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-8 py-3 bg-gray-700 text-center rounded hover:bg-gray-600 transition-colors"
          >
            GitHub Repo Backend
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="max-w-4xl mx-auto py-16 px-4 sm:px-8 border-t border-gray-700"
      >
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-4">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to collaborate. Feel free to reach out!
        </p>

        <div className="flex items-center mb-4">
          <span className="inline-block text-gray-400 mr-2">Email:</span>
          <a
            className="text-blue-400 hover:text-blue-500"
            href="mailto: vocterdev@gmail.com"
          >
            vocterdev@gmail.com
          </a>
        </div>

        <div className="space-y-2">
          <a
            href="https://github.com/vocterr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 block"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="py-6 text-center border-t border-gray-700">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Bartosz K. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

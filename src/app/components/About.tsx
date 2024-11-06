'use client';
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-emerald-500 to-emerald-700">
      <div className="container mx-auto px-6 ">
        <h1 className="text-center font-bold text-2xl hover:text-fuchsia-400 ">About</h1>
        <div className="text-center">
          <p className="text-lg text-black mb-6">
            About Me As a seasoned Full-Stack Developer, UI/UX Designer, and
            technology enthusiast, I excel in crafting visually stunning,
            scalable, and user-centric web applications. With a strong
            foundation in JavaScript, TypeScript, React.js, Next.js, and design
            principles, I bridge the gap between aesthetics and functionality.
          </p>
          <p className="text-lg text-black">
            With expertise in modern technologies like Next.js, React, and
            TypeScript, I craft responsive and optimized web applications. From
            UI/UX design to clean code, every step in the development process is
            carried out with precision.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 pb-4 ">
          <div className="bg-gradient-to-r from-teal-400 to-yellow-200 p-6 shadow-lg rounded-lg border-4 hover:border-x-fuchsia-800 hover:border-y-fuchsia-500">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
             Expertices:
            </h3>
            <ul className="text-black space-y-2">
        <li>Next.js Master: I leverage Next.js to create server-side rendered, statically generated, and performance-optimized web applications.</li>
            <li> React.js Master: My proficiency in React enables me to build reusable UI components, manage state changes, and optimize application performance. </li>
            <li>TypeScript Expert: I utilize TypeScript to ensure type safety, maintainability, and scalability in complex web applications.</li>
            <li>Tailwind CSS Master: I expertly utilize Tailwind CSS to design responsive, consistent, and customizable UI layouts.</li>
            <li>UI/UX Designer: I craft intuitive, user-friendly, and visually appealing interfaces, focusing on human-centered design principles.</li>
           </ul>  
    </div>
          <div className="bg-gradient-to-r from-teal-400 to-yellow-200 p-6 shadow-lg rounded-lg border-4 hover:border-x-fuchsia-800 hover:border-y-fuchsia-500">
            <h3 className="text-2xl font-semibold text--800 mb-2">
            Passionate About:
            </h3>
            <h6>
            <li> Building high-performance web applications</li>
<li> Crafting intuitive and responsive user interfaces</li>
<li> Staying up-to-date with the latest web development trends and technologies</li>
<li> Collaborating with innovative teams and clients</li>
<li> Creating user-centered design solutions</li>
</h6>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

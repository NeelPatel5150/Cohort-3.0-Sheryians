import React from "react";

const About = () => {
  return (
    <section className="min-h-[90vh] bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">About Us</h1>

        <p className="text-center text-slate-400 max-w-3xl mx-auto">
          We build high-quality web applications using modern technologies like
          React, Next.js, Node.js, and Tailwind CSS.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition">
            <h2 className="text-2xl font-bold mb-3">💡 Mission</h2>
            <p className="text-slate-400">
              Deliver scalable, user-friendly applications with clean
              architecture and modern UI.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition">
            <h2 className="text-2xl font-bold mb-3">🎯 Vision</h2>
            <p className="text-slate-400">
              Empower developers to build amazing products using the latest web
              technologies.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition">
            <h2 className="text-2xl font-bold mb-3">🚀 Goal</h2>
            <p className="text-slate-400">
              Create fast, secure, and beautiful digital experiences for
              businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

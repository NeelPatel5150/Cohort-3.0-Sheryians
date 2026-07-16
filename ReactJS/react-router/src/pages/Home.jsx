import React from "react";

const Home = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">
            🚀 Welcome to My Website
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Build Modern
            <span className="text-blue-500"> React Apps </span>
            With Confidence.
          </h1>

          <p className="text-slate-300 mt-6 text-lg leading-8">
            Learn React, React Router, Tailwind CSS and build fast, responsive,
            and beautiful web applications with clean code.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
              Get Started
            </button>

            <button className="border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/10">
          <h2 className="text-3xl font-bold mb-4">Why Choose React?</h2>

          <ul className="space-y-4 text-slate-300">
            <li>⚡ Fast Performance</li>
            <li>🎨 Component-Based Architecture</li>
            <li>📱 Fully Responsive UI</li>
            <li>🌍 Huge Community Support</li>
            <li>🚀 Easy Routing & State Management</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;

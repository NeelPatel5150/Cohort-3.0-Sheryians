import React from "react";

const Contact = () => {
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-slate-900 to-black text-white flex items-center">
      <div className="max-w-5xl mx-auto w-full px-6">
        <div className="bg-slate-900 p-10 rounded-3xl border border-slate-700 shadow-xl">
          <h1 className="text-5xl font-bold text-center">Contact Us</h1>

          <p className="text-center text-slate-400 mt-4 mb-10">
            We'd love to hear from you. Send us a message anytime.
          </p>

          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            ></textarea>

            <button className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#0A1929] to-[#040D12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto bg-[#0A1929]/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700">
          <div className="text-center mb-8 text-gray-300">
            <p className="mb-2">
              Phone:{" "}
              <Link href="tel:+917007836367" className="text-blue-400 hover:text-blue-300">
                +91 7007836367
              </Link>
            </p>
            <p className="mb-2">
              Email:{" "}
              <Link
                href="mailto:priyanshu1265656@gmail.com"
                className="text-blue-400 hover:text-blue-300"
              >
                priyanshu1265656@gmail.com
              </Link>
            </p>
          </div>

          <form
            className="space-y-6"
            action="https://getform.io/f/bqoewmwb"
            method="POST"
          >
            <div>
              <label htmlFor="name" className="block text-gray-200 mb-2">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-[#0A1929]/50 backdrop-blur-sm border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-200 mb-2">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-[#0A1929]/50 backdrop-blur-sm border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                name="message"
                className="w-full px-4 py-2 bg-[#0A1929]/50 backdrop-blur-sm border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Bookstore</title>
        <meta
          name="description"
          content="Discover Bookstore's mission to bring stories and knowledge to life. Learn more about our diverse range of books and values."
        />
      </Helmet>
      <Navbar />
      <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-700 dark:text-indigo-300">Abou Bookstore</h1>

          <section className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-md mb-8">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Welcome to <span className="font-semibold text-indigo-600 dark:text-indigo-300">Bookstore</span>, your one-stop destination for all things books! From gripping thrillers and heartwarming romances to insightful self-help and academic treasures, we cater to every kind of reader. Our collection includes both premium and free books to ensure knowledge is accessible for everyone.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="bg-indigo-100 dark:bg-indigo-900 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-800 dark:text-white">📚 Our Collection</h2>
              <ul className="list-disc pl-5 text-gray-800 dark:text-indigo-100">
                <li>Fiction, Non-fiction, Biographies, and Poetry</li>
                <li>Self-help and Personal Development</li>
                <li>Academic, Research, and Educational Resources</li>
                <li>Children's Books and Young Adult Novels</li>
                <li>Free eBooks and Public Domain Titles</li>
              </ul>
            </div>

            <div className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-white">🎯 Our Mission</h2>
              <p className="text-gray-800 dark:text-yellow-100">
                To ignite imagination, spread knowledge, and foster a lifelong love for reading by making a wide variety of books accessible and enjoyable for everyone.
              </p>
            </div>
          </section>

          <section className="bg-green-100 dark:bg-green-900 mt-10 p-6 rounded-xl shadow-md py-5 px-10">
            <h2 className="text-2xl font-semibold mb-4 text-green-800 dark:text-white">🌟 Why Choose Us?</h2>
            <ul className="list-disc pl-5 text-gray-800 dark:text-green-100 space-y-2">
              <li>Curated collections tailored to every reader</li>
              <li>Premium and free content for all budgets</li>
              <li>Dark mode for comfortable reading experience</li>
              <li>Fast, modern, and user-friendly interface</li>
              <li>Passionate team dedicated to your reading journey</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

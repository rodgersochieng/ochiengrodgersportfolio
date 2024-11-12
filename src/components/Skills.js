import React from "react";
import { FaReact, FaFigma, FaNodeJs } from "react-icons/fa"; // Add icons for other tech you use

function Skills() {
  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-bold">What I Use</h2>
      <div className="flex justify-center space-x-6 mt-4">
        <FaReact className="text-5xl" />
        <FaFigma className="text-5xl" />
        <FaNodeJs className="text-5xl" />
        {/* Add more icons as needed */}
      </div>
    </section>
  );
}

export default Skills;

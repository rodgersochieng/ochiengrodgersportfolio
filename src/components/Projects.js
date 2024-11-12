import React from "react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-bold">Check My GitHub for Projects</h2>
      <div className="flex justify-center space-x-4 mt-4">
        <FaGithub className="text-3xl" />
        <FaGithub className="text-3xl" />
        <FaGithub className="text-3xl" />
      </div>
    </section>
  );
}

export default Projects;

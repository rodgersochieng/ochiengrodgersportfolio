import React from "react";

function Education() {
  const learningData = [
    { title: "UoP - BSc Comp Science" },
    { title: "ALX - YB" },
    { title: "Moringa - S.E" },
    { title: "McKinsey - Piecework" },
    { title: "IBM - Design Thinking" },
    { title: "54 Collective - Building a Startup" },
  ];

  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-bold">What I Have Learned So Far</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {learningData.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white text-black rounded shadow-md"
          >
            {item.title}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

// import React, { useState } from "react";
// import avatar from '../avatar/avatar2.png';

// function AboutAndContact() {
//   const [notification, setNotification] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement the email sending logic here, e.g., using an email API service like EmailJS
//     setNotification('This is my safe space haha. I can’t allow roasting haha.');
//     setTimeout(() => {
//       setNotification('');
//     }, 3000);

//     // Reset the form
//     e.target.reset();
//   };

//   return (
//     <section className="my-8 p-6">
//       <div className="text-center">
//         <h2 className="text-3xl font-bold mb-6">About Me</h2>
//         <div className="text-left max-w-prose mx-auto mb-12">
//           <p className="mb-4">
//             Hi, I'm [Your Name], a passionate software developer with a love for creating innovative and user-centric solutions. My journey in tech began with a fascination for how things work, which led me to explore coding and software development.
//           </p>
//           <p className="mb-4">
//             Over the years, I've honed my skills in various programming languages and frameworks, working on diverse projects ranging from web applications to AI-driven solutions. I thrive on tackling challenges and continuously learning to improve my craft.
//           </p>
//           <p>
//             When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or indulging in my hobbies like reading, hiking, and photography. I'm always open to new opportunities and collaborations, so feel free to reach out!
//           </p>
//         </div>
//       </div>

//       <div className="text-center">
//         <h2 className="text-3xl font-bold mb-6">You wanna roast me?</h2>
//         <div className="flex flex-col md:flex-row items-center justify-center">
//           <img src={avatar} alt="Avatar" className="w-49 h-48 md:w-50 md:h-35 rounded-full object-cover mb-4 md:mb-0 md:mr-6"/>
//           <form className="w-full max-w-lg" onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-sm font-bold mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input className="border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" required/>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input className="border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" required/>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-bold mb-2" htmlFor="message">
//                 Message
//               </label>
//               <textarea className="border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message here..." rows="4" required></textarea>
//             </div>
//             <div className="flex items-center justify-between">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//                 Roast Me
//               </button>
//             </div>
//           </form>
//         </div>
//         {notification && (
//           <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded shadow-lg">
//             {notification}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default AboutAndContact;

import React, { useState } from "react";
import avatar from '../avatar/avatar2.png';

function AboutAndContact() {
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the email sending logic here, e.g., using an email API service like EmailJS
    setNotification('This is my safe space haha. I can’t allow roasting 😂😂.');
    setTimeout(() => {
      setNotification('');
    }, 5000);

    // Reset the form
    e.target.reset();
  };

  return (
    <section className="my-8 p-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="text-left max-w-prose mx-auto mb-12">
          <p className="mb-4">
            Hi, I'm [Your Name], a passionate software developer with a love for creating innovative and user-centric solutions. My journey in tech began with a fascination for how things work, which led me to explore coding and software development.
          </p>
          <p className="mb-4">
            Over the years, I've honed my skills in various programming languages and frameworks, working on diverse projects ranging from web applications to AI-driven solutions. I thrive on tackling challenges and continuously learning to improve my craft.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or indulging in my hobbies like reading, hiking, and photography. I'm always open to new opportunities and collaborations, so feel free to reach out!
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">You wanna roast me?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img src={avatar} alt="Avatar" className="w-49 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6"/>
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" required/>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" required/>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message here..." rows="4" required></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Roast Me
              </button>
            </div>
          </form>
        </div>
        {notification && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 text-white py-2 px-4 rounded shadow-lg transition-opacity duration-300 ease-in-out">
            {notification}
          </div>
        )}
      </div>
    </section>
  );
}

export default AboutAndContact;

import React from 'react';

const Services = () => {
  return (
    <section id="services" className="bg-teal-700 py-16 text-emerald-600">
      <h2 className="text-3xl font-bold text-center text-lime-500">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-gray-100 ml-2 rounded-xl border-4 hover:border-yellow-600">
          <h3 className="text-xl font-semibold">UI/UX Design</h3>
          <p>User Experience. User Interface. Responsive Design for Desktop & Mobile.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl border-4 hover:border-yellow-600">
          <h3 className="text-xl font-semibold">Web Development</h3>
          <p>Development Process, Project Planning & Discussion, Design Implementation.</p>
        </div>
        <div className="p-6 bg-gray-100 mr-2 rounded-xl border-4 hover:border-yellow-600">
          <h3 className="text-xl font-semibold">Tailwind CSS</h3>
          <p>Clean Code, No Extra CSS Files, Developed with Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

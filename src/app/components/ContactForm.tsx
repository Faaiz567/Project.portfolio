'use client';
const ContactForm = () => {
    return (
      <section id="contact" className="bg-teal-600 py-16">
        <h2 className="text-3xl font-bold text-center hover:text-teal-300">Contact</h2>
        <form className="max-w-md mx-auto mt-8">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="p-2 border rounded " />
            <input type="text" placeholder="Surname" className="p-2 border rounded" />
          </div>
          <input type="email" placeholder="Email" className="p-2 border rounded w-full mt-4"/>
          <textarea placeholder="Message" className="p-2 border rounded w-full mt-4" />
          <button type="submit" className="mt-4 bg-teal-800 text-lime-500 py-2 px-4 rounded hover:bg-rose-600 hover:text-whitenpm run dev
           hover:font-bold">
            Submit
          </button>
        </form>
      </section>
    );
  };
  
  export default ContactForm;
  
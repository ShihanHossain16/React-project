import React from 'react';

const Contact = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
          <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
          <textarea placeholder="Your Message" className="textarea textarea-bordered w-full"></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

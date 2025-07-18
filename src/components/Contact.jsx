import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    await new Promise(r => setTimeout(r, 1000));
    setStatus('Message sent!');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-16 bg-violet-100" id="contact">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          {['name','email','subject'].map(field => (
            <div key={field} className="mb-4">
              <label className="block font-medium mb-2 text-gray-700">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-violet-500"
              />
            </div>
          ))}
          <div className="mb-4">
            <label className="block font-medium mb-2 text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-violet-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-violet-300 text-dark py-3 rounded hover:bg-violet-400 transition cursor-pointer"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-green-600 font-medium">{status}</p>}
        </form>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Contact Info</h2>
          <p className="text-gray-700">
            <strong>Email:</strong> singhdeepak84088@gmail.com
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +91 8655148716
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> Jaipur, India
          </p>
          <div className="space-x-4">
            <a href="https://github.com/singdeepak" className="text-gray-600 hover:text-gray-800 cursor-pointer">GitHub</a>
            <a href="https://www.linkedin.com/in/deepaksing/" className="text-gray-600 hover:text-gray-800 cursor-pointer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

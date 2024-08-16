import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                className="grow"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group mb-4">
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="email"
                className="grow"
                placeholder="daisy@site.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group mb-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your message?</span>
                <span className="label-text-alt"></span>
              </div>
              <textarea
                className="input input-bordered w-full max-w-xs"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </div>
            </label>
          </div>
          <button type="submit" className="btn btn-primary bg-pink-500 text-white border-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
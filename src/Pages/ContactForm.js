import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("meojwvvq"); // Replace with your form ID

  if (state.succeeded) {
    return <p className="text-green-400 font-semibold text-center">Thanks for your message! We'll get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="_subject" value="New message from A2 Odyssey Labs website!" />
      
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm" />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm" />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm" />
      </div>

      {/* Honeypot field */}
      <input
        type="text"
        name="_gotcha"
        style={{ display: 'none' }}
        aria-hidden="true"
      />

      <button 
        type="submit" 
        disabled={state.submitting}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-lg transition-all hover:from-blue-600 hover:to-purple-700 disabled:opacity-50"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

export default ContactForm;
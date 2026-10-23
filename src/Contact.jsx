import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
function Contact(){
  const form = useRef();
  const [status, setStatus] = useState("");
  const sendEmail = async (e) => {
    e.preventDefault();
    try{
     await emailjs.sendForm(
        "service_2n8ny4b",
        "template_btn1lqg",
        form.current,
        "m_3-wuO4CzWqVtDEF"
      );
      setStatus("Message sent successfully!");
    } catch {
      setStatus("Failed to send message. Please try again later.");
    }
    e.target.reset();
  };
    return(
        <section id="contact" className="min-h-screen py-16 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-semibold text-center tracking-tight mb-8">
      Contact Me
    </h2>
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="bg-slate-900/80 p-6 md:p-8 rounded-xl border border-slate-800 shadow-lg">
        <h3 className="font-['Space_Grotesk'] text-2xl font-medium mb-4">Let&apos;s work together</h3>
        <p className="text-slate-300 leading-relaxed mb-6">
          Have a project in mind or want to collaborate? Send a message and I will get back to you.
        </p>
        <div className="space-y-4 text-slate-300">
          <div>
            <p className="text-slate-400 text-sm">Email</p>
            <a href="mailto:sambenmayu@gmail.com" className="hover:text-amber-400 transition">sambenmayu@gmail.com</a>
          </div>
          <div>
            <p className="text-slate-400 text-sm">LinkedIn</p>
            <a href="https://www.linkedin.com/in/samuel-molla" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition">/in/samuel-molla</a>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Availability</p>
            <p>Open to opportunities and collaborations.</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Response time</p>
            <p>Typically within 24-48 hours.</p>
          </div>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="bg-slate-900/80 p-8 rounded-xl border border-slate-800 shadow-lg space-y-6">

      <input 
        type="text" 
        name="name"
        placeholder="Name" 
        className="w-full px-4 py-2 bg-slate-900 text-slate-100 border border-slate-600 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
        required
      />

      <input 
        type="email" 
        name="email"
        placeholder="Email" 
        className="w-full px-4 py-2 bg-slate-900 text-slate-100 border border-slate-600 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
        required
      />

      <textarea 
        placeholder="Message" 
        name="message"
        rows="5"
        className="w-full px-4 py-2 bg-slate-900 text-slate-100 border border-slate-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
        required
      ></textarea>

      <input 
        type="submit" 
        value="Send Message" 
        className="w-full bg-amber-500 hover:bg-amber-600 text-slate-100 font-semibold py-2 px-4 rounded cursor-pointer transition"
      />
      {status && <p className="text-center text-amber-400 mt-2">{status}</p>}
      </form>
    </div>
  </div>
</section>
    );
};
export default Contact

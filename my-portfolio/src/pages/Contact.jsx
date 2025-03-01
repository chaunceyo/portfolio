import React, {useState} from 'react';
import emailjs from "@emailjs/browser";
import './Contact.css'

const Contact = () => {
      const [project, setProject] = useState("");
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();

        if (!project || !name || !email || !message) {
          alert("Please fill out all fields");
          return;
        }
    
        console.log("Form submitted:", {
          name,
          email,
          project,
          message,
        })
        
        emailjs
        .send(
          "service_rfcurq6", // Replace with your service ID
          "template_8do67hf", // Replace with your template ID
          templateParams,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Replace with your Public Key
        )
        .then(() => {
          alert("Message sent successfully ✅");
          setProjectType("");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => console.error("Email Error:", err));
    };
      
    
    return(
       <>
       <div>
        <h1 className='lets-talk'>Need a Website? Let's Talk!</h1>

        <h3 className='fill-out-form'> 
            I am always open to new freelance projects, website redesigns, or fixing bugs for small businesses.
            Fill <br /> out the form below or reach out directly — I will reply within 24 hours.
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <select 
          name="project" 
          value={project}
          onChange={(e) => setProject(e.target.value)}
          required
        >
          <option value="" disabled>Project Type</option>
          <option value="new-website">New Website</option>
          <option value="website-redesign">Website Redesign</option>
          <option value="bug-fixes">Bug Fixes</option>
          <option value="seo-services">SEO Services</option>
          <option value="maintenance-plan">Monthly Maintenance Plan</option>
        </select>

        <textarea 
          placeholder="Tell me about your project"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send Message</button>

      </form>

     
       </>
    )
}
export default Contact;
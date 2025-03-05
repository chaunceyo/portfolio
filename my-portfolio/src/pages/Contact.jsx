import React, {useState} from 'react';
import emailjs from "@emailjs/browser";
import './Contact.css'

const Contact = () => {
      const [project, setProject] = useState("");
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");

      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
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
        
        const templateParams = {
          name,
          email,
          project,
          message,
        };

        emailjs
        .send(
          "service_rfcurq6", // Replace with your service ID
          "template_8do67hf", // Replace with your template ID
          templateParams,
          publicKey // Replace with your Public Key
        )
        .then(() => {
          alert("Message sent successfully ✅");
          setProject("");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => console.error("Email Error:", err));
    };
      
    
    return(
       <>
       <div className='contact-container'>
        <div>
          <h1 className='lets-talk'>Need a Website? Let's Talk!</h1>

          <h3 className='fill-out-form'> 
              I am always open to new freelance projects, website redesigns, or fixing bugs for small businesses.
              Fill out the form below or reach out directly — I will reply within 24 hours.
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

        <div className='contact-info'>
          <h2 className='book'>Or Book A Free Consultation Call Here!</h2>
          <a className='book-link'target="_blank" rel="noopener noreferrer" href='https://calendly.com/chaunceywebdev/free-consultation-call'>
            https://calendly.com/chaunceywebdev/free-consultation-call
          </a>
        </div>
        
        <h2 className='payment-info'> Payments are handled securely through Stripe after the consultation. </h2>
        <h2 className='payment-info-2'> ✅ 50% Deposit to Start Projects <br />
            ✅ Monthly Plans Available
        </h2>

        <h2 className='where-to'>Where To Find Me 📲 </h2>

        <div className='contact-info'>
            <div className='social'>
              <img src='./LinkedIn.png'></img>
              <a href="https://www.linkedin.com/in/chaunceyogletree/" target="_blank" rel="noopener noreferrer">
              LinkedIn: https://www.linkedin.com/in/chaunceyogletree/
              </a>
            </div>
            <div className='social'>
              <img  className='github-img' src='./Github.png'></img>
              <a href="https://github.com/chaunceyo" target="_blank" rel="noopener noreferrer">
              Github: https://github.com/chaunceyo
              </a>
            </div>
            <div className='social'>
              <img src='./twitter.png'></img>
              <a href="https://x.com/webdevchauncey" target="_blank" rel="noopener noreferrer">
              Twitter: https://x.com/webdevchauncey
              </a>
            </div>

            <div className='social'>
              <img src='./Instagram.png'></img>
              <a href="https://www.instagram.com/webdevchauncey/" target="_blank" rel="noopener noreferrer">
              Instagram: https://www.instagram.com/webdevchauncey/
              </a>
            </div>
        </div>


        <h2 className='email-and-phone'> 📧 Email | 📞 Phone</h2>
        <div className='email-and-phone-info'>
          <a href="mailto:chaunceywebdev@gmail.com" target="_blank" rel="noopener noreferrer">
              Email: chaunceywebdev@gmail.com
          </a>
          <h4 className='phone'>Phone: 404-642-4031</h4>
        </div>
      
        <h2 className='free'>✅ Free Website Audit Available</h2>
        <h4 className='free-info'>I'll review your current website for FREE and tell you exactly how to improve it!</h4>
      </div>
      </>
    )
}
export default Contact;
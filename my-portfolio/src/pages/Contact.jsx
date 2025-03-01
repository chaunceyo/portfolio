import React from 'react';
import './Contact.css'

const Contact = () => {
    return(
       <>
       <div>
        <h1 className='lets-talk'>Need a Website? Let's Talk!</h1>

        <h3 className='fill-out-form'> 
            I am always open to new freelance projects, website redesigns, or fixing bugs for small businesses.
            Fill <br /> out the form below or reach out directly — I will reply within 24 hours.
        </h3>
      </div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <select name="project" id="project">
          <option value="" selected disabled>Project Type</option>
          <option value="new-website">New Website</option>
          <option value="website-redesign">Website Redesign</option>
          <option value="bug-fixes">Bug Fixes</option>
          <option value="seo-services">SEO Services</option>
          <option value="maintenance-plan">Monthly Maintenance Plan</option>
        </select>
        <textarea placeholder="Tell me about your project"></textarea>
        <button type="submit">Send Message</button>
      </form>

     
       </>
    )
}
export default Contact;
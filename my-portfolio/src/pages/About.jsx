import React from 'react';
import './About.css'

const About = () => {
    return(
        <>
        <div className='about-container'>
          <h1 className='about'>About Me</h1>

          <div className='about-section-1'>
            <img className='myImg2' src='./myImage2.png'></img>

              <h5 className='about-info'>
                👋 Hi, I'm Chauncey Ogletree, a Full Stack Web Developer and graduate <br />
                of BloomTech's Full Stack Web Development program. I specialize in building <br />
                modern, responsive websites and web applications using HTML, CSS, JavaScript, <br />
                React, and Node.js. I'm passionate about turning ideas into functional, user-friendly <br />
                websites that help businesses grow. Whether it's creating sleek landing pages <br />
                or full e-commerce platforms, I'm always focused on delivering clean code and <br />
                great user experiences. <br />
              </h5>
          </div>
          <div className='about-section-2'>
            <h3>What I Can Do For You? 💪</h3>
            <h5>
              • Build websites that look great on desktop + mobile <br />
              • E-Commerce stores with Stripe Payment Integration <br />
              • Fix bugs & speed up slow websites <br />
              • Monthly website maintenance plans 🔥 <br />
              • SEO to help your business rank higher on Google <br />
            </h5>
          
          
            <h3>Why Work With Me?</h3>
            <h5>
                ✅ I care about making websites that actually help <br />
                businesses grow — not just look pretty <br />
                ✅ Clear communication + no tech jargon <br />
                ✅ Fast delivery times <br />
                ✅ 100% satisfaction guaranteed <br />
            </h5>

            <h3>My Process</h3>
            <h5>
                1. Free Consultation <br />
                2. Website Design + Development <br />
                3. Revisions <br />
                4. Launch 🚀 <br />
                5. Monthly Maintenance Plan (Optional) <br /> <br />

                Let's build something amazing together! 🚀

            </h5>
          </div>
        </div>
        </>
    )
}
export default About;
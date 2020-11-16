import React from 'react'


const ContactForm = () => (
  <div className='contact animated fadeInRightBig'>
    <div className='contact-inner'>

      <div className='contact-section'>
        <h2 className='section-header'>Get in touch!</h2>

        {/* build in form by Netlify are amazing! - https://www.netlify.com/docs/form-handling/ -*/}
        <form className='contact-form' name='contact-form' method='POST' action='/thanks' data-netlify='true' data-netlify-honeypot='bot-field'>
          <input type='hidden' name='form-name' value='contact-form' />
          <input type='hidden' name='bot-field'/>
          
          <input type='email' name='email' placeholder='Your email'/>
          <input type='subject' name='subject' placeholder='Subject'/>
          <textarea name='message' placeholder='How can I help you today?'/>
          <button type='submit'>send</button>
        </form>
      </div>
    </div>

  </div>
)
export default ContactForm
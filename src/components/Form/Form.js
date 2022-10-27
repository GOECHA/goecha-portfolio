import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Form.css'



const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qg4fide', 'template_u9ktssv', form.current, '6zrSqK7yVZ2g5Sy0O')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset
  };
  return (
      <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
            <input type="text" name="user_name"></input>
          <label>Email</label>
            <input type="email" name="user_email"></input>
          <label>Subject</label>
            <input type="text" name="subject"></input>
          <label>Message</label>
            <textarea rows='6' placeholder='Type your message here' type="text" name="message"></textarea>
          <button className='btn'>Submit</button>
          </form>
      </div>
  )
}

export default Form
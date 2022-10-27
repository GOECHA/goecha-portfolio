import React from 'react'
import './Form.css'



const Form = () => {
  return (
      <div className='form'>
        <form>
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
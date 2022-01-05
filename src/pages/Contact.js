import React from 'react';
import '../styles/Contact.css';
import PizzaLeft from '../assets/pizzaLeft.jpg';

const Contact = () => {
  return (
    <div className='contact'>
      <div
        className='leftSide'
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className='rightSide'>
        <h1>CONTACT US</h1>
        <form id='contact-form'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' placeholder='Enter full name...' />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder='Enter Email...' />
          <label htmlFor='message'>Message</label>
          <textarea
            rows='6'
            name='message'
            placeholder='Enter message here...'
            required
          ></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

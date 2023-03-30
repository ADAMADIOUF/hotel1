import React from 'react'

const Contact = () => {
  return (
    <div className='section-center contact'>
      <div className='title'>
        <h3>contact us</h3>
      </div>
      <p>500 terry francine ,san francisco,CA 95678 </p>
      <p>info@mysite.com | Tel:1234567890</p>
      <div className='contact-form'>
        <form className='form'>
          <input type='text' className='input-form' placeholder='name' />
          <input type='email' className='input-form' placeholder='email' />
          <input type='number' className='input-form' placeholder='phone' />
          <textarea name="" id="" cols="30" rows="10" placeholder='type your message here' className='input-form'></textarea>
          <button className="btn btn-contact">submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
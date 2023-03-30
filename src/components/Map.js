import React from 'react'

const Map = () => {
  return (
    <div className='map'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10630.766103989825!2d-101.31067329999999!3d48.2318142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1680107127271!5m2!1sen!2sus'
        width='600'
        height='500'
        
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}

export default Map
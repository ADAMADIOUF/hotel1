import React from 'react'
import Map from './Map'
import ac1 from '../assets/ac1.png'
import Contact from './Contact'
const Location = () => {
  return (
    <div className='location'>
      <div className='section-center'>
        <div className='title'>
          <h3>location</h3>
        </div>
        <p>
          we're located in the heart of the city. it's easy to find us,but hard
          to leave.
        </p>
        <div className='map-location'>
          <article>
            <img
              src='https://images.pexels.com/photos/2127790/pexels-photo-2127790.jpeg?auto=compress&cs=tinysrgb&w=800'
              alt=''
            />
          </article>
          <article>
            <Map />
          </article>
        </div>
      </div>
      <div className='activities-line'>
        <img src={ac1} alt='' srcset='' />
      </div>
      <div className='activities-dote'>
        <img src={ac1} alt='' srcset='' />
      </div>
      <div className='section-center get-here'>
        <div className='title'>
          <h3>how to get here</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          voluptatibus eligendi voluptate magni quisquam, pariatur facere rem.
          Assumenda, excepturi corporis.
        </p>
        <div className='container-get'>
          <article>
            <img
              src='https://images.pexels.com/photos/28614/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
              alt=''
            />
          </article>
          <article>
            <h2>01</h2>
            <h3>by train</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sed
              aperiam necessitatibus libero ullam rerum enim officiis ipsa
              veritatis explicabo.
            </p>
          </article>
          <article>
            <h2>02</h2>
            <h3>by taxi</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sed
              aperiam necessitatibus libero ullam rerum enim officiis ipsa
              veritatis explicabo.
            </p>
          </article>
          <article>
            <img
              src='https://images.pexels.com/photos/876228/pexels-photo-876228.jpeg?auto=compress&cs=tinysrgb&w=800'
              alt=''
            />
          </article>
          <article>
            <img
              src='https://media.istockphoto.com/id/1132953037/photo/male-courier-with-bicycle-delivering-packages-in-city-copy-space.jpg?b=1&s=612x612&w=0&k=20&c=w-EZPSQyNBYybwORRwGPZiWjVPOnOyQwsuJlZ70fYIs='
              alt=''
            />
          </article>
          <article>
            <h2>03</h2>
            <h3>by bicycle</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sed
              aperiam necessitatibus libero ullam rerum enim officiis ipsa
              veritatis explicabo.
            </p>
          </article>
        </div>
      </div>
      <Contact/>
    </div>
  )
}

export default Location
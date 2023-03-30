import React from 'react'
import Slider from './Slider'
import ac1 from '../assets/ac1.png'
import h2 from "../assets/h2.webp"
import h1 from '../assets/h1.jpeg'
import a3 from '../assets/a3.jpeg'
import a4 from '../assets/a4.jpeg'
import a5 from '../assets/a5.jpeg'
import a6 from '../assets/a6.jpeg'
import Gallery from './Gallery'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <Slider />

      <div className='about-home section-center'>
        <div className='title'>
          <h3>about our casa</h3>
        </div>
        <p className='title-para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa totam
          velit ea ad exercitationem voluptate sed ab possimus deleniti, unde
          sapiente necessitatibus qui sint cupiditate, temporibus facilis magnam
          sunt, repellat laudantium corporis adipisci vero fugiat dignissimos.
          Earum omnis nesciunt porro iste, rem eveniet impedit amet veniam hic
          reiciendis suscipit culpa?
        </p>
        <Link to={`/about`}>
          <button className='btn about-home-btn'>read more</button>
        </Link>
        <div className='activities-line'>
          <img src={ac1} alt='' srcset='' />
        </div>
        <div className='activities-dote'>
          <img src={ac1} alt='' srcset='' />
        </div>
        <div className='home'>
          <article className='home-card'>
            <img src={h1} alt='' className='h1' />
            <img src={h2} alt='' className='h2' />
          </article>
          <article className='home-content'>
            <h3>01</h3>
            <h2>share a room</h2>
            <div className='underline under'></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              fugit. Quae ratione dolorem expedita odio, cumque illo facere
              dolore illum nisi dignissimos, autem id, ipsam harum vero sit
              officia saepe.
            </p>
            <button className='btn btn-home'>read more</button>
          </article>
        </div>
      </div>
      <div className='section-center home-active'>
        <div className='home-activities'>
          <article className='home-content'>
            <h3>02</h3>
            <h2>share a room</h2>
            <div className='underline under'></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              fugit. Quae ratione dolorem expedita odio, cumque illo facere
              dolore illum nisi dignissimos, autem id, ipsam harum vero sit
              officia saepe.
            </p>
            <button className='btn btn-home'>read more</button>
          </article>
          <article className='home-activities-card'>
            <img src={a3} alt='' className='a1' />
            <img src={a4} alt='' className='a2' />
          </article>
        </div>
      </div>
      <div className='section-center'>
        <div className='home-activities'>
          <article className='home-activities-card'>
            <img src={a5} alt='' className='a3' />
            <img src={a6} alt='' className='a4' />
          </article>
          <article className='home-content'>
            <h3>03</h3>
            <h2>share a room</h2>
            <div className='underline under'></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              fugit. Quae ratione dolorem expedita odio, cumque illo facere
              dolore illum nisi dignissimos, autem id, ipsam harum vero sit
              officia saepe. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Praesentium quo reprehenderit, quos necessitatibus dicta
              alias quisquam vel ut, minus tempora a laudantium sit facilis
              soluta impedit dolores voluptas. Provident cumque rerum error ea
              non dolor fuga fugit! Numquam, nesciunt vel sint consectetur neque
              totam? Doloremque voluptas illum non harum asperiores?
            </p>
            <button className='btn btn-home'>read more</button>
          </article>
        </div>
      </div>
      <div className='facilities'>
        <div className='section-center'>
          <div className='title'>
            <h3>facilities</h3>{' '}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            blanditiis deserunt necessitatibus veniam, magnam debitis corporis
            non enim eius sed repellendus eveniet asperiores iusto porro quia
            ipsam quis ducimus quasi?
          </p>
          <div className='activities-line'>
            <img src={ac1} alt='' srcset='' />
          </div>
          <div className='activities-dote'>
            <img src={ac1} alt='' srcset='' />
          </div>
          <Gallery />
        </div>
      </div>
    </>
  )
}

export default Home
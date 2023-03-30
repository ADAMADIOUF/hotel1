import React,{useState,useEffect} from 'react'
import gallery from '../dataGallery'
import {
  BsFillArrowDownLeftCircleFill,
  BsFillArrowDownRightCircleFill,
  BsFillArrowUpRightCircleFill,
} from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

const Gallery = () => {
 const [slideNumber, setSliderNumber] = useState(0)
 const [openModal, setOpenModal] = useState(false)
 const handleOpenModal = (index) => {
   setSliderNumber(index)
   setOpenModal(true)
 }
 const handleCloseModal = () => {
   setOpenModal(false)
 }
 const prevSlide = () => {
   slideNumber === 0
     ? setSliderNumber(gallery.length - 1)
     : setSliderNumber(slideNumber - 1)
 }
 const nextSlide = () => {
   slideNumber + 1 === gallery.length
     ? setSliderNumber(0)
     : setSliderNumber(slideNumber + 1)
 }
  return (
    <div>
      <section className='gallery' id='gallery'>
        
        {openModal && (
          <div className='sliderWrap'>
            <FaTimes className='btnClose' onClick={handleCloseModal} />
            <BsFillArrowDownLeftCircleFill
              className='btnPrev'
              onClick={prevSlide}
            />
            <BsFillArrowUpRightCircleFill
              className='btnNext'
              onClick={nextSlide}
            />
            <div className='fullScreenImage'>
              <img src={gallery[slideNumber].image} alt='' />
            </div>
            
          </div>
        )}
        <div className='galleryWrap'>
          {' '}
          {gallery &&
            gallery.map((slide, index) => {
              return (
                <div
                  className='single'
                  key={index}
                  onClick={() => handleOpenModal(index)}
                >
                  <img src={slide.image} alt='' />
                  <div className='gallery-details'>
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                  </div>
                </div>
              )
            })}
        </div>
      </section>
    </div>
  )
}

export default Gallery
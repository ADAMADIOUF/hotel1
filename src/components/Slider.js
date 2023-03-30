import Carousel from 'react-bootstrap/Carousel'
import s1 from "../assets/slider1.jpeg"
import s2 from '../assets/slider2.webp'
import s3 from '../assets/slider3.webp'

function Slider() {
  return (
    <Carousel className='slider'>
      <Carousel.Item interval={1000}>
        <img
          className='d-block w-100'
          src={s1}
          alt='First slide'
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className='d-block w-100'
          src={s2}
          alt='Second slide'
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={s3}
          alt='Third slide'
        />
        
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider

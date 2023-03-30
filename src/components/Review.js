import React, { useEffect, useState } from 'react'
import people from '../dataReview'
import { FaChevronLeft, FaChevronRight, } from 'react-icons/fa'
const Review = () => {
 
 const[index,setIndex] = useState(0)
 const {name,text}=people[index]
 const checkNumber =(number) =>{
  if(number >people.length - 1){
   return 0
  }
  if(number <0){
   return people.length -1
  }
  return number
 }
 const btnNext =()=>{
setIndex((index)=>{
 let newIndex = index +1
 return checkNumber(newIndex) 
})
 }
 const btnPrev = () => {
  setIndex((index) => {
    let newIndex = index - 1
   return checkNumber(newIndex) 
  })
 }
 
 useEffect(()=>{
  const slider = setInterval(()=>{
   setIndex((newIndex)=>{
    const result = (newIndex +1) % people.length
    return result
   })
  },5000)
  return()=>{
   clearInterval(slider)
  }
 },[index])
  return (
    <div className='review'>
      <div className='title'>
        <h3>what our guests are saying</h3>
        <div className='underline'></div>
      </div>
      <div className='review-details'>
        <h3>{name}</h3>
        <p>{text}</p>
       
      </div>
      <div className='button-container'>
        <button className='btn-next' onClick={btnNext}>
          <FaChevronLeft />
        </button>
        <button className='btn-prev'onClick={btnPrev}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Review
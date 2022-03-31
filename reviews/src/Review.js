import React from 'react'
import { useState} from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from './data'

function Review() {
    const [index,setIndex] = useState(0)

    const {name,image, job ,text} = people[index]

    const prevPerson = () =>{
        let newIndex = index-1
        if(newIndex<0){
            newIndex = people.length-1
        }
        setIndex(newIndex)
    }

    const nextPerson = () => {
        let newIndex = index+1
        if(newIndex>0){
            newIndex = 0
        } 
        setIndex(newIndex)
    }

    const randomPerson = () =>{
        let randomIndex = Math.floor(Math.random()* people.length)
        if(randomIndex === index){
            randomIndex +=1
        }
        if(randomIndex >= people.length){
            randomIndex = 0 
        }
        setIndex(randomIndex)
    }


  return (
    <article className='review'>
        <div className='img-container'>
            <img src={image} alt = {name} className='person-img'>
            </img>
            <span className='quote-icon'>
                <FaQuoteRight/>    
            </span>    
        </div>    
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='text'>{text}</p>

        <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}>
                <FaChevronLeft/>    
            </button>    
            <button className='next-btn' onClick={nextPerson}>
                <FaChevronRight/>    
            </button>
        </div>
            <button className='random-btn' onClick={randomPerson}>
                Random Review    
            </button>
    </article>
  )
}

export default Review
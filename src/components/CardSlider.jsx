import React, { useState } from 'react'
import Card from './Card'
import styled from 'styled-components'
import { useRef } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
export default function CardSlider({data,title}) {
    const [showControls, setShowControls] = useState(false)
    const [sliderPosition, setSliderPosition] = useState(0);
    const listRef = useRef();
    const handleDirection = (direction)=>{
        
    }
  return (
    <Container className='flex column'
    onMouseEnter={()=> setShowControls(true)}
    onMouseLeave={()=> setShowControls(false)}
    >
        <h1>{title}</h1>
        <div className="wrapper">
    <div className={`slider-action left ${!showControls? "none": ""} flex j-center a-center`}>
        <AiOutlineLeft onClick={()=>handleDirection("left")} />
    </div>
    <div className="flex slider " ref={listRef}>



        {

            data.map((movie,index)=>{
                return <Card movieData = {movie} index = {index} key={movie.id} />
            })

        }
</div>
<div className={`slider-action right ${!showControls? "none": ""} flex j-center a-center`}>
        <AiOutlineRight onClick={()=>handleDirection("right")} />
    </div>

        </div>
        
    </Container>
  )
}
const Container = styled.div`
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 50px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;

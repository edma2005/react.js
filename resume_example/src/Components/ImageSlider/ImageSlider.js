import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import styled from 'styled-components';
import { useState } from "react"

const SliderDiv = styled.div`
  position: relative;
  height: 40vh;
  width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftArrow = styled.span`
  display: flex;
  position: absolute;
  top: 50%;
  left: 0px;
  font-size: 3rem;
  color: black;
  z-index: 10;
  cursor: pointer;
`;

const RightArrow = styled.span`
  display: flex;
  position: absolute;
  top: 50%;
  right: 0px;
  font-size: 3rem;
  color: black;
  z-index: 10;
  cursor: pointer;
  border-radius: 55%;
  border: none;
  width: fit-content;
`;

const Image = styled.img`
    width: 700px;
    height: 400px;
    border-radius: 10px;
`;

const ImageSlider = ({picturesArr}) => {
    const [current, setCurrent] = useState(0);
    const length = picturesArr.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(picturesArr) || picturesArr.length <=0 ){
        return null;
    }

  return (
    <SliderDiv>
        <LeftArrow>
        <FaArrowAltCircleLeft onClick={prevSlide}/>
        </LeftArrow>
        <RightArrow>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
        </RightArrow>
        {picturesArr.map((pic, index)=>{
        return(
          <div key={index} className={index === current ? 'slide active' : 'slide'}>
            {index === current && (<Image key={index} src={pic.image} alt="projectImage"/>)}
          </div>
        )
        })}
    </SliderDiv>
  )
}

export default ImageSlider

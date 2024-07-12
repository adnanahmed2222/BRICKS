import styled from "styled-components"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { sliderItems } from "../data";
import { useState } from "react";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    background-color: #ffffff;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: rgb(222, 222, 222);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px" };
    right: ${props=> props.direction === "right" && "10px" };
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
height: 100vh;
display: flex;
transition: all 1s ease;
transform:translateX(${props => props.slideIndex *-100}vw);

`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
height: 100%;
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`
const Image= styled.img`
width: 800px;
height: 500px;
border-radius: 25px;

`
const InfoContainer = styled.div`
height: 60%;
width:50%;
background-color: #ffffff5c;
border-radius: 25px;
box-shadow: 5px;
flex: 1;
padding:60px;

`
const Title = styled.h1``
const Description = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 2px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
cursor: pointer;
background-color: transparent;
`


const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0 )
        }
    };
  return (
    <Container>
      <Arrow direction='left' onClick={()=>handleClick("left")}>
        <ChevronLeftIcon/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
        <Slide bg={item.bg}>
            <ImgContainer>
                <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>START YOUR JOURNEY</Button>
            </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={()=>handleClick("right")}>
        <ChevronRightIcon/>
      </Arrow>
    </Container>
  )
}

export default Slider

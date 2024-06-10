import React, { useState } from "react";
import styled from "styled-components";
import img from './gifs/bg1.jpg';
import itemData from "./cardData";
import Card from "./Card";
import boy from './gifs/boy.gif';
import happy from './gifs/happy.gif';
import { useNavigate } from "react-router-dom";

export default function Tinder() {

  const navigate = useNavigate();
  const [y,setY] = useState(0);
  const [n,setN] = useState(0);
  const [score,setScore] = useState(0);

  const handleY = ()=>{
    setY(prev => prev+1);
    
  }

  const handleN = ()=>{
    setN(prev => prev+1);
    console.log(n+1);

  }

  return (
    
      <Container>
        <Wrapper>
          <Para>Girlfriend Crash Course</Para>
          {itemData.map((item)=>(
            <Card img = {item.img} title={item.title} y={y} handleY={handleY} n={n} handleN={handleN}/>
          ))}
          {(n+y)===10? setTimeout(()=>{
            setScore(1);
          },3100):<></>}
          {score? <><Para>Scrore: {y}</Para><Imgdiv><Img src={y===10?happy:boy}></Img></Imgdiv><Btndiv><Button onClick={()=>{window.location.reload()}}>Retry</Button><Button onClick={()=>{navigate("/maze")}}>Next</Button></Btndiv></>:<></>}
        </Wrapper>      
      </Container>
    
  );
}

const Container = styled.div`
width: 100vw;
height: 100vh;

`
const Imgdiv = styled.div`
width: 20vw;
height:20vh; 
`
const Btndiv = styled.div`
width: 100vw;
display: flex;
height:20vh; 
`
const Img = styled.img`
width: 100%;
height:100%;
border-radius:5%; 
`

const Wrapper = styled.div`
background-image: url(${img});
display: flex;
flex-direction: column;
align-items:center;
width: 100%;
height: 100%;
`
const Para = styled.p`
  @font-face {
    font-family: 'Rocher';
    src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
  }
  font-family: 'Rocher';
  font-weight: 900;
  text-align: center;
  font-size: 50px;
  
`
const Aid = styled.p`
  @font-face {
    font-family: 'Rocher';
    src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
  }
  font-family: 'Rocher';
  font-weight: 900;
  text-align: center;
  font-size: 20px;
  
`
const Button = styled.button`
  display: ${props => props.hide};
  margin: 10%;
  height:50%;
  width:100%;
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

&:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}
`

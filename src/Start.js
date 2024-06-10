import styled from 'styled-components';
import img from './gifs/bg1.jpg';
import smug from './gifs/smug.gif';
import go from './gifs/go.gif';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Start() {

    const [main ,setMain] = useState(smug)
  
  const navigate = useNavigate();

  const handleClick = (e)=>{
    setMain(go);
    setTimeout(()=>{
        navigate("/card");
    },1500)
    
  }

  
  return (
    <>
      <Container>
        <Wrapper>
          <BWrap>
            <Para>Wait, there is moreeee.</Para>
            <Para>I have prepared a little something for you</Para>
            <Bdiv>
              <ButtonY onClick={(e)=>{handleClick(e)}}>
                  Play
              </ButtonY>
            </Bdiv>
            
          </BWrap>
          <Div>
            <Gif src={main}>
            </Gif>
          </Div>
          
        </Wrapper>      
      </Container>
    </>
  );
}

export default Start;

const Container = styled.div`
width: 100vw;
height: 100vh;

`

const Wrapper = styled.div`
background-image: url(${img});
display: flex;
width: 100%;
height: 100%;
overflow: hidden;
`

const Gif  = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
`
const BWrap = styled.div`
  display: ${props => props?.hide};
  height: 45vh;
  width: 70vw;
  align-self: center;
  justify-self: center;
  
`
const Div = styled.div`
  height: 60vh;
  width: 60vw;
  margin:30px;
  align-self: center;
  justify-self: center;
`


const ButtonY = styled.button`
  display: ${props => props.hide};
  margin-top:5%;
  height:20%;
  width:50%;
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

const Bdiv = styled.div`
  height: 100%;
  width: 100%;
  align-items: start;
  justify-content: center;
  display: flex;
  
`
const Para = styled.p`
  display: ${props => props?.hideText};
  @font-face {
    font-family: 'Rocher';
    src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
  }
  font-family: 'Rocher';
  text-align: center;
  font-size: 40px;
  margin-left:5px;
  
`
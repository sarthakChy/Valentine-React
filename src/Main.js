import styled from 'styled-components';
import gif from './gifs/ask2.gif';
import img from './gifs/bg1.jpg';
import img2 from './gifs/img2.jpg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  
  const navigate = useNavigate();
  const [xCordinate, setxCordinate] = useState(0);
  const [yCordinate, setyCordinate] = useState(0);
  const [main, setMain] = useState(gif);
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setxCordinate(0);
    setxCordinate(0);
    setCount(0);
  },[]);

  const handleNo = (e)=>{

    setxCordinate(Math.floor(Math.random() * (window.innerWidth/2)));
    setyCordinate(Math.floor(Math.random() * (window.innerHeight/2)));
    setCount((prev)=>prev+1);
    setTimeout(()=>{
      setMain(img2);
      },500);
    }


  const handleYes = (e)=>{
      
    if(count>0){
      navigate("/No");
    }
    else{
      navigate("/Yes");
    }
      
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Div>
            <Gif src={main}>

            </Gif>
          </Div>
          <BWrap>
            <Bdiv>
              <ButtonY onClick={(e)=>handleYes(e)}>
                  YES
              </ButtonY>
              <ButtonN  xcordinate={xCordinate} ycordinate={yCordinate} onMouseOver={(e)=>handleNo(e)} onClick={(e)=>handleNo(e)}>
                  NO
              </ButtonN>
            </Bdiv>
            
          </BWrap>
          
        </Wrapper>      
      </Container>
    </>
  );
}

export default Main;

const Container = styled.div`
width: 100vw;
height: 100vh;

`

const Wrapper = styled.div`
background-image: url(${img});
display: grid;
grid-template-rows: 0.5fr 0.3fr;
width: 100%;
height: 100%;
`

const Gif  = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const BWrap = styled.div`
  display: ${props => props?.hide};
  height: 15vh;
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

const ButtonN = styled.button`
  transform: translateX(-${props=> props?.xcordinate}px) translateY(-${props=> props?.ycordinate}px); 
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

const ButtonY = styled.button`
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

const Bdiv = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  
`
import React from 'react';
import styled from 'styled-components';
import no from './gifs/no.gif';
import love from './gifs/love.gif';
import itemData from './data.js';
import { useNavigate } from 'react-router-dom';


function Collage(props) {
    
    const navigate = useNavigate();
  
  
  return (
        <>
        {console.log(window.scrollX)}
        {props?.status==="check"?
        <Div onClick={()=>props.checkHandler("playing")}>
          <Top>
            <Para>Checkpoint {props.checkPoint}</Para>
            <Aid>(Click anywhere to resume)</Aid>
          </Top>
          <Bottom>
          
          {itemData[props?.checkPoint -1].map((item)=>(
              
                <Img src={item?.img} loading='lazy'/>
              
              
            ))}
          </Bottom>
          
          
    </Div>
        :
        props?.status==="notYet"?
        <Div onClick={()=>props.checkHandler("playing")}>
          <Wrapper>
            <Para>Collect all CheckPoints</Para>
            <Gif src={no}>
            
            </Gif>
          </Wrapper>
        </Div>
    :
    props?.status==="won"?
    <Div onClick={()=>props.checkHandler("playing")}>
    <Textdiv>
      <Text>Thank you<br/>
      For loving and dotting me<br/>
      For being there for me <br/>
      For Trusting me and giving me 2nd Chances<br/>
      For all the work you put in our relationship<br/>
      For Your affection and quality time <br/>
      For being a best friend<br/>
      For All the good and bad memories<br/>
      For Letting me tease you<br/>
      For Filling my life with excitement and colors<br/>
      For looking at me the way you do<br/>
      For laughing at dumb stuff that i do( i love your bright smile) (ps most of them are to make you laugh only. Im not that dumb) <br/>
      For helping me everytime i needed you<br/>
      For being an admiration for me and bringing out the best of me<br/>
      For taking care of me<br/></Text>
      <Imgdiv>
      <Gif2 src={love}>
            
            </Gif2>
      </Imgdiv>
      {setTimeout(()=>{
        navigate("/")
      },50000)}
    </Textdiv>
  </Div>
        :
        <></>
        }
            
            
        </>
  )
}

export default Collage


const Div = styled.div`
    z-index:999999;
    position:fixed;
    backdrop-filter: blur(4px);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items:center;
`

const Wrapper = styled.div`
height: 60vh;
width: 60vw;
margin:30px;
align-self: center;
justify-self: center;
`
const Gif = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`
const Text = styled.p`
  @font-face {
    font-family: 'Rocher';
    src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
  }
  font-family: 'Rocher';
  font-weight: 900;
  text-align: center;
  font-size: 30px;
  line-height: 2.5;
  animation: slide-up 200s 3;
  
  @keyframes slide-up {
    from {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
    to {
      -webkit-transform: translateY(-300%);
              transform: translateY(-300%);
    }
  
`
const Para = styled.p`
  @font-face {
    font-family: 'Rocher';
    src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
  }
  font-family: 'Rocher';
  font-weight: 900;
  text-align: center;
  font-size: 30px;
  
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
const Top = styled.div`
width:20%;
height:20%;
`
const Bottom = styled.div`
width: 100%;
height: 50%;
display:flex;
overflow:auto;
overflow-y:hidden;

&::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

&::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

`
const Textdiv = styled.div`
height: 80vh;
width: 70vw;
margin:30px;
display: flex;
flex-direction: column;
align-self: center;
justify-self: center;
`
const Gif2 = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`
const Imgdiv = styled.div`
height: 40vh;
width: 40vw;
display: flex;
flex-direction: column;
align-self: center;
justify-self: center;
animation: slide-up 80s 3;
  @keyframes slide-up {
    from {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
    to {
      -webkit-transform: translateY(-300%);
              transform: translateY(-300%);
    }

`
const Img = styled.img`
margin:5px;
object-fit: contain;
`

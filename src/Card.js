import React, { useState } from 'react'
import styled from 'styled-components';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { createTheme, ThemeProvider } from '@mui/material';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import why from './gifs/why.gif';
import punch from './gifs/punch.gif';
import chest from './gifs/chest.gif';
import fight from './gifs/fight.gif';
import mocha from './gifs/mocha.gif';
import { red } from '@mui/material/colors';

function Card(props) {

    const [fillY, setFillY] = useState(0);
    const [fillN, setFillN] = useState(0);
    const [clickY, setClickY] = useState(0);
    const [clickN, setClickN] = useState(0);
    const [hide, setHide] = useState('');



    const theme = createTheme({
        palette: {
          primary: {
            main: '#dd2c00',
          },
          secondary: {
            main: '#00c853',
          },
        },
    });

    const handleFillY = ()=>{
        setFillY(1);
    }
    const handleFillL = ()=>{
        setFillY(0);
    }
    const handleFillN = ()=>{
        setFillN(1);
    }
    const handleFillNL = ()=>{
        setFillN(0);
    }

    const handleClickN = ()=>{
        setClickN(1);
        props?.handleN();
        setTimeout(()=>{
            setHide('none');
        },3000)
        
        
    }
    const handleClickY = ()=>{
        setHide('none');
        props?.handleY();
    }

  return (
    <>

        <ThemeProvider theme={theme}>
            <Container hide={hide}>
                <Wrapper>
                    
                    <Top>
                        {clickN && props?.n===1 || clickN && props?.n===6?<Img src={why}></Img>:clickN && props?.n===2 || clickN && props?.n===7?<><Img src={punch}></Img></>:clickN && props?.n===3 || clickN && props?.n===8?<><Img src={chest}></Img></>:clickN && props?.n===4 || clickN && props?.n===9?<><Img src={fight}></Img></>:clickN && props?.n===5 || clickN && props?.n===10?<><Img src={mocha}></Img></>:<>
                        <Img src={props?.img} loading='lazy'></Img>
                        </>}
                        
                    </Top>
                    <Bottom>
                        <Text>{props?.title}</Text>
                        <Bottomicon>
                            <Icondiv onMouseEnter={handleFillN} onMouseLeave={handleFillNL} onClick={handleClickN}>
                                {fillN?<>
                                <ThumbDownIcon color="primary" sx={{width:'100%',height:'100%'}}/>
                                </>:
                                <>
                                <ThumbDownOffAltIcon color="primary" sx={{width:'100%',height:'100%'}}/>
                                </>}
                            </Icondiv>
                            <Icondiv onMouseEnter={handleFillY} onMouseLeave={handleFillL} onClick={handleClickY}>
                                {fillY?<>
                                <ThumbUpIcon color="secondary" sx={{width:'100%',height:'100%'}}/>
                                </>:
                                <>
                                <ThumbUpOffAltIcon color="secondary" sx={{width:'100%',height:'100%'}}/>
                                </>}
                            </Icondiv>
                        </Bottomicon>        
                    </Bottom>
                </Wrapper>
            </Container>
        </ThemeProvider>
    </>

  )
}

export default Card

const Container = styled.div`
    position:absolute;
    display:${props => props?.hide};
    top:18vh;
    width: 25%;
    height:70%;
    border-radius:5%;
    padding:20px;
    background-color:white; 
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`
const Wrapper = styled.div`
width: 100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Top = styled.div`
width: 80%;
height:60%; 
`
const Img = styled.img`
width: 100%;
height:100%;
border-radius:5%; 
`
const Bottom = styled.div`
width: 100%;
height:50%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center; 
`
const Bottomicon = styled.div`
width: 100%;
height:40%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around; 
`
const Bottomtext = styled.div`
width: 100%;
height:40%;
`
const Text = styled.h2`
@font-face {
    font-family: 'Roher';
    src: url('https://fonts.googleapis.com/css2?family=Ysabeau:ital,wght@1,300&display=swap');
  }
  font-family: 'Roher';
  text-align: center;
  font-size: 30px;
`
const Icondiv = styled.div`
width: 100px;
cursor:pointer;
height:100px;
display:hidden;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
border-radius:100%;
`
const Why = styled.div`
`
const Gif = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`
import styled from 'styled-components';
import gif3 from './gifs/kick-bear.gif';
import img from './gifs/bg1.jpg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function No() {
  
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/");
  },4000)
  },[navigate])

  return (
    <>
      <Container>
        <Wrapper>
          <Div>
            <Gif src={gif3}>

            </Gif>
          </Div>
          <><Text>
              I know you tried to say NO<br></br>
                    GANDIII
          </Text></>
          
        </Wrapper>      
      </Container>
    </>
  );
}

export default No;

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
const Div = styled.div`
  height: 60vh;
  width: 60vw;
  margin:30px;
  align-self: center;
  justify-self: center;
`
const Text = styled.h1`
  display: ${props => props?.hideText};
  @font-face {
    font-family: 'Rocher';
    src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
  }
  font-family: 'Rocher';
  text-align: center;
  font-size: 50px;
`
